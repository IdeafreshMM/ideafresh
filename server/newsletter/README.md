# Archived newsletter handlers

These former Next.js API routes are preserved for reference but are not deployed.
The blog uses static export on Cloudflare Pages, and newsletter signup is disabled
in `data/siteMetadata.js`.

Before enabling signup, port the selected handler to Cloudflare Pages Functions
or another backend and update the form endpoint. These handlers use Next.js
request/response objects and cannot be copied into a Pages Function unchanged.
Keep provider API keys server-side, never in `NEXT_PUBLIC_*` variables.
