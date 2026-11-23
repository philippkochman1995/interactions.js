const FEED_KEY = 'feed:v2';
const PREVIOUS_FEED_KEY = 'feed:v1';
const TOKEN_KEY = 'token:v1';
const ATTEMPT_KEY = 'feed-attempt:v2';
const FEED_MAX_AGE_MS = 6 * 60 * 60 * 1000;
const FEED_MAX_STALE_MS = 24 * 60 * 60 * 1000;
const RETRY_DELAY_MS = 10 * 60 * 1000;
const TOKEN_REFRESH_AGE_MS = 30 * 24 * 60 * 60 * 1000;
const PROFILE = 'franzwestprivatstiftung';
const POST_ALT = 'Beitrag der Franz West Privatstiftung auf Instagram';

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': status === 200 ? 'public, max-age=300' : 'no-store',
      'access-control-allow-origin': '*',
      'x-content-type-options': 'nosniff'
    }
  });
}

async function currentToken(env) {
  const stored = await env.INSTAGRAM_KV.get(TOKEN_KEY, { type: 'json' });
  if (stored && typeof stored.value === 'string' && stored.value) return stored;
  if (!env.IG_ACCESS_TOKEN) throw new Error('Instagram token not configured');
  const token = { value: env.IG_ACCESS_TOKEN, refreshedAt: Date.now() };
  await env.INSTAGRAM_KV.put(TOKEN_KEY, JSON.stringify(token));
  return token;
}

async function refreshToken(env) {
  const token = await currentToken(env);
  if (Date.now() - token.refreshedAt < TOKEN_REFRESH_AGE_MS) return;
  const url = new URL('https://graph.instagram.com/refresh_access_token');
  url.searchParams.set('grant_type', 'ig_refresh_token');
  url.searchParams.set('access_token', token.value);
  const response = await fetch(url);
  if (!response.ok) throw new Error('Instagram token refresh failed: ' + response.status);
  const result = await response.json();
  if (!result.access_token) throw new Error('Instagram token refresh returned no token');
  await env.INSTAGRAM_KV.put(TOKEN_KEY, JSON.stringify({
    value: result.access_token,
    refreshedAt: Date.now()
  }));
}

function imageFor(item) {
  if (item.media_type === 'VIDEO') return item.thumbnail_url || item.media_url;
  if (item.media_type === 'CAROUSEL_ALBUM') {
    const child = item.children?.data?.find((entry) => entry.media_type === 'IMAGE')
      || item.children?.data?.[0];
    return child?.thumbnail_url || child?.media_url || item.media_url;
  }
  return item.media_url;
}

export function normalizePosts(data) {
  if (!Array.isArray(data?.data)) throw new Error('Instagram returned no media list');
  return data.data.map((item) => ({
    id: item.id,
    image: imageFor(item),
    permalink: item.permalink,
    alt: POST_ALT,
    timestamp: item.timestamp
  })).filter((item) =>
    typeof item.id === 'string' &&
    typeof item.image === 'string' && item.image.startsWith('https://') &&
    typeof item.permalink === 'string' && item.permalink.startsWith('https://')
  ).slice(0, 12);
}

async function fetchOwnedPosts(env) {
  const token = await currentToken(env);
  const url = new URL('https://graph.instagram.com/me/media');
  url.searchParams.set('fields',
    'id,media_type,media_url,thumbnail_url,permalink,timestamp,children{media_type,media_url,thumbnail_url}');
  url.searchParams.set('limit', '18');
  const response = await fetch(url, {
    signal: AbortSignal.timeout(5000),
    headers: { authorization: 'Bearer ' + token.value }
  });
  if (!response.ok) throw new Error('Instagram media request failed: ' + response.status);
  return normalizePosts(await response.json());
}

function normalizeProfilePosts(html) {
  // Instagram's public profile embed includes posts published by collaborators.
  const match = html.match(/"isProfileEmbed"\s*:\s*true\s*,\s*"contextJSON"\s*:\s*("(?:[^"\\]|\\.)*")/);
  if (!match) throw new Error('Instagram profile embed returned no post data');
  const { context } = JSON.parse(JSON.parse(match[1]));
  if (context?.username !== PROFILE || !Array.isArray(context.graphql_media)) {
    throw new Error('Instagram profile embed returned an unexpected profile or format');
  }

  return context.graphql_media.flatMap((entry) => {
    const media = entry?.shortcode_media;
    if (!media || typeof media.shortcode !== 'string' || !/^[\w-]+$/.test(media.shortcode)) return [];
    const image = URL.parse(media.display_url);
    if (image?.protocol !== 'https:' || !image.hostname.endsWith('.cdninstagram.com')) return [];
    if (!Number.isFinite(media.taken_at_timestamp) || media.taken_at_timestamp <= 0) return [];
    const published = new Date(media.taken_at_timestamp * 1000);
    if (!Number.isFinite(published.getTime())) return [];
    const type = media.is_video ? 'reel' : 'p';
    return [{
      id: media.shortcode,
      image: image.href,
      permalink: `https://www.instagram.com/${type}/${media.shortcode}/`,
      alt: POST_ALT,
      timestamp: published.toISOString()
    }];
  });
}

async function fetchProfilePosts() {
  const response = await fetch(`https://www.instagram.com/${PROFILE}/embed/`, {
    signal: AbortSignal.timeout(5000)
  });
  if (!response.ok) throw new Error('Instagram profile embed request failed: ' + response.status);
  const posts = normalizeProfilePosts(await response.text());
  if (!posts.length) throw new Error('Instagram profile embed returned no usable posts');
  return posts;
}

function mergePosts(owned, profile) {
  const posts = new Map();
  for (const post of [...owned, ...profile]) {
    // The same post may use /p/ and /reel/ links in the two sources.
    const shortcode = URL.parse(post.permalink)?.pathname.split('/').filter(Boolean).at(-1);
    if (shortcode && !posts.has(shortcode)) posts.set(shortcode, post);
  }
  return [...posts.values()]
    .sort((a, b) => (Date.parse(b.timestamp) || 0) - (Date.parse(a.timestamp) || 0))
    .slice(0, 12);
}

async function updateFeed(env) {
  const results = await Promise.allSettled([fetchOwnedPosts(env), fetchProfilePosts()]);
  const [owned, profile] = results.map((result) => {
    if (result.status === 'fulfilled') return result.value;
    console.error(String(result.reason));
    return [];
  });
  const posts = mergePosts(owned, profile);
  if (posts.length < 2) throw new Error('Instagram returned fewer than two usable posts');
  const feed = {
    posts,
    updatedAt: new Date().toISOString(),
    partial: results.some((result) => result.status === 'rejected')
  };
  await env.INSTAGRAM_KV.put(FEED_KEY, JSON.stringify(feed));
  return feed;
}

function isFresh(feed, now) {
  return feed && now - Date.parse(feed.updatedAt) < (feed.partial ? RETRY_DELAY_MS : FEED_MAX_AGE_MS);
}

async function maybeUpdateFeed(env, cached) {
  const now = Date.now();
  if (isFresh(cached, now)) return cached;
  const attempt = Number(await env.INSTAGRAM_KV.get(ATTEMPT_KEY)) || 0;
  if (now - attempt < RETRY_DELAY_MS) return cached;
  await env.INSTAGRAM_KV.put(ATTEMPT_KEY, String(now));
  try {
    return await updateFeed(env);
  } catch (error) {
    console.error(String(error));
    return cached;
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname !== '/feed' || request.method !== 'GET') {
      return json({ error: 'Not found' }, 404);
    }
    const cached = await env.INSTAGRAM_KV.get(FEED_KEY, { type: 'json' });
    const now = Date.now();
    if (cached?.posts?.length && now - Date.parse(cached.updatedAt) < FEED_MAX_STALE_MS) {
      if (!isFresh(cached, now)) {
        ctx.waitUntil(maybeUpdateFeed(env, cached));
      }
      return json(cached);
    }
    const feed = await maybeUpdateFeed(env, null);
    if (feed) return json(feed);
    const previous = await env.INSTAGRAM_KV.get(PREVIOUS_FEED_KEY, { type: 'json' });
    if (previous?.posts?.length && Date.now() - Date.parse(previous.updatedAt) < FEED_MAX_STALE_MS) {
      return json(previous);
    }
    return json({ error: 'Feed temporarily unavailable' }, 503);
  },
  async scheduled(_event, env, ctx) {
    ctx.waitUntil((async () => {
      try {
        await refreshToken(env);
      } catch (error) {
        console.error(String(error));
      }
      const cached = await env.INSTAGRAM_KV.get(FEED_KEY, { type: 'json' });
      await maybeUpdateFeed(env, cached);
    })());
  }
};
