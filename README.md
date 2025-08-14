# Sasha Persholja — Official Site (Next.js + Tailwind, Vercel-ready)

A lightweight artist website. **Next.js App Router**, Tailwind, dynamic gallery, and Vercel-ready config.

## Quick start (Kali Linux)

```bash
# 1) Install deps
npm install

# 2) Run locally
npm run dev   # http://localhost:3000

# 3) Deploy with Vercel CLI
npm i -g vercel
vercel        # preview
vercel --prod # production
```

## Add photos (dynamic gallery)
- Put images into `public/gallery` (png, jpg, webp, gif, svg).
- Redeploy — the gallery reads the folder at build time and lists them automatically.

## Email (optional)
If you want the contact form to send emails, add env vars in Vercel:
- `RESEND_API_KEY`
- `CONTACT_TO`

Then implement the send in `app/api/contact/route.ts`.

## Pages
- `/` (Home with Spotify embed + socials)
- `/music`
- `/tour` (dates in `data/tour.json`)
- `/press` (with tiny placeholder PDFs)
- `/gallery` (auto-lists images in `public/gallery`)
- `/contact`