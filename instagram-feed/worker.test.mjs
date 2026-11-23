import assert from 'node:assert/strict';
import test from 'node:test';
import worker, { normalizePosts } from './worker.js';

function kv() {
  const values = new Map();
  return {
    async get(key, options) {
      const value = values.get(key) ?? null;
      return options?.type === 'json' && value ? JSON.parse(value) : value;
    },
    async put(key, value) { values.set(key, value); }
  };
}

test('normalizes image, video and carousel posts', () => {
  const posts = normalizePosts({ data: [
    { id: '1', media_type: 'IMAGE', media_url: 'https://img/1', permalink: 'https://ig/1' },
    { id: '2', media_type: 'VIDEO', thumbnail_url: 'https://img/2', permalink: 'https://ig/2' },
    { id: '3', media_type: 'CAROUSEL_ALBUM', children: { data: [
      { media_type: 'IMAGE', media_url: 'https://img/3' }
    ] }, permalink: 'https://ig/3' }
  ] });
  assert.deepEqual(posts.map((post) => post.image), ['https://img/1', 'https://img/2', 'https://img/3']);
});

test('serves cached public media without exposing the access token', async () => {
  const originalFetch = globalThis.fetch;
  const calls = [];
  globalThis.fetch = async (url, options) => {
    calls.push({ url: String(url), options });
    if (new URL(url).hostname === 'www.instagram.com') {
      const contextJSON = JSON.stringify({ context: {
        username: 'franzwestprivatstiftung',
        graphql_media: [
          { shortcode_media: {
            shortcode: '3', is_video: false, taken_at_timestamp: 1795075224,
            display_url: 'https://scontent.cdninstagram.com/3.jpg'
          } },
          { shortcode_media: {
            shortcode: '2', is_video: true, taken_at_timestamp: 1794495165,
            display_url: 'https://scontent.cdninstagram.com/2.jpg'
          } }
        ]
      } });
      return new Response(`<script>{"isProfileEmbed":true,"contextJSON":${JSON.stringify(contextJSON)}}</script>`);
    }
    return Response.json({ data: [
      { id: '1', media_type: 'IMAGE', media_url: 'https://img/1',
        permalink: 'https://www.instagram.com/p/1/', timestamp: '2026-08-27T07:09:47+0000' },
      { id: '2', media_type: 'IMAGE', media_url: 'https://img/2',
        permalink: 'https://www.instagram.com/p/2/', timestamp: '2026-11-12T14:52:45+0000' }
    ] });
  };
  try {
    const env = { INSTAGRAM_KV: kv(), IG_ACCESS_TOKEN: 'test-secret' };
    const ctx = { waitUntil() {} };
    const request = new Request('https://feed.example/feed');
    const first = await worker.fetch(request, env, ctx);
    const second = await worker.fetch(request, env, ctx);
    assert.equal(first.status, 200);
    assert.equal(second.status, 200);
    assert.equal(calls.length, 2);
    assert.equal(calls.find(({ url }) => url.includes('graph.instagram.com')).options.headers.authorization, 'Bearer test-secret');
    assert.equal(calls.find(({ url }) => url.includes('/embed/')).options.headers, undefined);
    assert.equal((await first.text()).includes('test-secret'), false);
    assert.deepEqual((await second.json()).posts.map(({ id, image }) => [id, image]), [
      ['3', 'https://scontent.cdninstagram.com/3.jpg'], ['2', 'https://img/2'], ['1', 'https://img/1']
    ]);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
