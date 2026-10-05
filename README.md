# Ideafresh blog

## Development

Use Node.js 22 and pnpm 11.15.1 (pinned in `package.json`).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Static production build

```sh
pnpm lint
pnpm build
pnpm serve
```

The build generates RSS feeds first, then exports the site to `out/`.
`pnpm serve` previews that directory using Cloudflare Pages' local runtime,
including the security headers from `public/_headers` (normally port 8788).
`next start` is not supported for this static export.

Images are served directly without Next.js server-side image optimization.
New posts or configuration changes require a rebuild and deployment.

## Cloudflare Pages deployment

Connect this repository under **Workers & Pages → Create application → Pages**.

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `pnpm build` |
| Build output directory | `out` |
| Root directory | Repository root |
| Production branch | Your production branch |

Set these build environment variables for production and preview:

- `NODE_VERSION=22`
- `PNPM_VERSION=11.15.1`
- The `NEXT_PUBLIC_GISCUS_*` values listed in `.env.example`, if using comments.

`NEXT_PUBLIC_*` variables are embedded at build time; changes require a new build.
The repository currently tracks `.env`; ensure it contains no private credentials
before pushing. Store any server-side secrets in Cloudflare, not in Git.
Keep `pnpm-lock.yaml`, `pnpm-workspace.yaml`, and `patches/` committed so the build
uses the same dependencies and citation fix. No Next.js Cloudflare adapter is needed.

Security headers are configured in `public/_headers`, not `next.config.js`.
Update its Content Security Policy when adding external scripts or styles.

Newsletter signup is disabled. Former API handlers are archived in
`server/newsletter/`; they are not part of the deployment. To enable signup,
implement a Pages Function or external backend first, and keep API keys server-side.

After deployment, check nested blog URLs, images, tags, pagination, Giscus,
`/feed.xml`, tag feeds, and the 404 page on the `*.pages.dev` preview before
adding your custom domain.
