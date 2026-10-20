const FEED_KEY = 'feed:v1';
const TOKEN_KEY = 'token:v1';
const ATTEMPT_KEY = 'feed-attempt:v1';
const FEED_MAX_AGE_MS = 6 * 60 * 60 * 1000;
const FEED_MAX_STALE_MS = 24 * 60 * 60 * 1000;
const RETRY_DELAY_MS = 10 * 60 * 1000;
const TOKEN_REFRESH_AGE_MS = 30 * 24 * 60 * 60 * 1000;

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
    alt: 'Beitrag der Franz West Privatstiftung auf Instagram',
    timestamp: item.timestamp
  })).filter((item) =>
    typeof item.id === 'string' &&
    typeof item.image === 'string' && item.image.startsWith('https://') &&
    typeof item.permalink === 'string' && item.permalink.startsWith('https://')
  ).slice(0, 12);
}

async function updateFeed(env) {
  const token = await currentToken(env);
  const url = new URL('https://graph.instagram.com/me/media');
  url.searchParams.set('fields',
    'id,media_type,media_url,thumbnail_url,permalink,timestamp,children{media_type,media_url,thumbnail_url}');
  url.searchParams.set('limit', '18');
  const response = await fetch(url, {
    headers: { authorization: 'Bearer ' + token.value }
  });
  if (!response.ok) throw new Error('Instagram media request failed: ' + response.status);
  const posts = normalizePosts(await response.json());
  if (posts.length < 2) throw new Error('Instagram returned fewer than two usable posts');
  const feed = { posts, updatedAt: new Date().toISOString() };
  await env.INSTAGRAM_KV.put(FEED_KEY, JSON.stringify(feed));
  return feed;
}

async function maybeUpdateFeed(env, cached) {
  const now = Date.now();
  if (cached && now - Date.parse(cached.updatedAt) < FEED_MAX_AGE_MS) return cached;
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
    if (cached?.posts?.length && Date.now() - Date.parse(cached.updatedAt) < FEED_MAX_STALE_MS) {
      if (Date.now() - Date.parse(cached.updatedAt) >= FEED_MAX_AGE_MS) {
        ctx.waitUntil(maybeUpdateFeed(env, cached));
      }
      return json(cached);
    }
    const feed = await maybeUpdateFeed(env, null);
    return feed ? json(feed) : json({ error: 'Feed temporarily unavailable' }, 503);
  },
  async scheduled(_event, env, ctx) {
    ctx.waitUntil((async () => {
      try {
        await refreshToken(env);
        const cached = await env.INSTAGRAM_KV.get(FEED_KEY, { type: 'json' });
        await maybeUpdateFeed(env, cached);
      } catch (error) {
        console.error(String(error));
      }
    })());
  }
};
