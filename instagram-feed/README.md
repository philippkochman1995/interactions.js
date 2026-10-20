# Instagram feed for the Webflow home page

The home page already contains the slider markup and four static fallback images.
The Worker reads the foundation's latest Instagram media server-side, caches a
public list in Cloudflare KV, and refreshes the Instagram token every 30 days.
Only image URLs and post links are sent to the browser.

## Accounts

- Use a Meta Developer app with **Instagram API with Instagram Login**.
- The Instagram account must be a Business or Creator account. Grant the app
  `instagram_business_basic` for `@franzwestprivatstiftung`.
- Generate a **new long-lived Instagram User access token** for that account.
  Do not paste it into Webflow, Git, a ticket, or chat.
- Use a Cloudflare account on Workers Free.

## Deploy

From this directory:

```sh
npx wrangler login
npx wrangler kv namespace create INSTAGRAM_KV
```

The namespace ID is already recorded in `wrangler.jsonc`. Then:

```sh
npx wrangler deploy
npx wrangler secret put IG_ACCESS_TOKEN
```

Wrangler prompts for the token. The public feed URL is the deployed
`https://franz-west-instagram-feed.<account>.workers.dev/feed`. Open it once
and confirm that it returns at least two posts. The token is stored only as a
Cloudflare secret and in the private KV namespace; the public response contains
no token.

## Connect Webflow

On the Home page, add `data-insta-api` to the existing element marked
`data-insta-feed`. Set its value to the Worker feed URL. Publish the site to
the Webflow subdomain. The local slider source is
`../snippets/home-instagram.js`; the matching styles are in
`../snippets/home-instagram.css`. These sources have already been inserted
into the Home page's freeform code.

If the API is unavailable, the four Webflow images stay visible. The Worker
refreshes posts every six hours and keeps the most recent successful response
for up to 24 hours if Meta temporarily fails. After that, Webflow shows the
four static fallback images again.
