# Cash Academy — SCALR Live Demo

Visual demo platform for Cash Academy Monday presentation.

**Stack:** Vite · React · Tailwind · React Router · static (no backend)

## Live demo

After deploy: `https://eagleaibot.github.io/cash-academy/`

## Local dev

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

Or push to GitHub with Actions (see `.github/workflows/deploy.yml`).

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing — hero, impact, mission, Money Town CTA |
| `/dashboard` | Teacher dashboard |
| `/curriculum/y3` | Year 3–6 curriculum grid |
| `/curriculum/y3/y3-l1` | Lesson detail (real Y3 content) |
| `/money-town` | Money Town™ workshop + enquiry form |
| `/admin` | Admin panel for Becky |
| `/stages/1` | Stage roadmap (1–5) |

## Brand

- Blue: `#90B1DC`
- Yellow: `#FAD60E`
- Slogan: **SMART MONEY. START YOUNG.**

## DNS (when ready)

Point custom domain CNAME to `eagleaibot.github.io` and set in repo Settings → Pages → Custom domain.
