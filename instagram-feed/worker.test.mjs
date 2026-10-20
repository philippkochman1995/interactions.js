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
    return Response.json({ data: [
      { id: '1', media_type: 'IMAGE', media_url: 'https://img/1', permalink: 'https://ig/1' },
      { id: '2', media_type: 'IMAGE', media_url: 'https://img/2', permalink: 'https://ig/2' }
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
    assert.equal(calls.length, 1);
    assert.equal(calls[0].options.headers.authorization, 'Bearer test-secret');
    assert.equal((await first.text()).includes('test-secret'), false);
    assert.equal((await second.json()).posts.length, 2);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
