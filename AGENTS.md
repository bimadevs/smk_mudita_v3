# PROJECT KNOWLEDGE BASE

**Generated:** 2026-02-05
**Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript

## OVERVIEW
School website for SMK Mudita Singkawang.
Transitioning from HTML prototypes (`templates/`) to Next.js App Router (`app/`).

## STRUCTURE
```
.
├── templates/    # HTML/Tailwind design prototypes (UI Source of Truth)
├── app/          # Next.js App Router implementation
├── components/   # Shared React components (Navbar, Footer, etc.)
└── public/       # Static assets (SVGs, images)
```

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| UI Design Reference | `templates/{page}/code.html` | Raw HTML/Tailwind prototypes |
| Page Logic | `app/{route}/page.tsx` | Next.js implementation |
| Layout/Global | `app/layout.tsx` | Fonts, metadata, global styles |
| Styles | `app/globals.css` | Tailwind v4 imports, CSS variables |

## CONVENTIONS
- **Workflow:** Port HTML from `templates/` → React components in `app/`.
- **Images:** Convert `<img>` or `bg-image` styles to `next/image` where possible.
- **Links:** Use `next/link` instead of `<a>`.
- **Styling:** Tailwind CSS v4. No `tailwind.config.js` (configured in CSS).
- **Components:** Extract reusable sections (Hero, Features) to `components/`.

## ANTI-PATTERNS (THIS PROJECT)
- **Direct HTML Copy:** Do not just copy HTML. Convert to React (fix `class` → `className`, `img` tags).
- **Monolithic Pages:** Avoid huge `page.tsx` files. Break down into components.
- **External Images:** Avoid hotlinking googleusercontent images in production code; download to `public/` or configure remote patterns.

## COMMANDS
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint
```

## NOTES
- `templates/` contains the "approved" design.
- Project uses strict TypeScript.
