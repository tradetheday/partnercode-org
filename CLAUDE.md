# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (static output to /dist/)
npm run preview  # Preview production build locally
```

## Architecture Overview

**Framework:** Astro 5.x static site generator, deployed to Cloudflare Pages.

**Purpose:** Multi-language broker partner code affiliate site (AvaTrade, XM, AvaFutures, Exness) with 21 supported languages.

### i18n Structure

- **English pages:** Root level (`/avatrade/`, `/xm/`, `/about/`)
- **Localized pages:** Dynamic `[lang]` segment (`/es/avatrade/`, `/de/xm/`)
- **No `/en/` prefix** for English (prefixDefaultLocale: false)

Languages are defined in `src/data/languages.ts`. Arabic has RTL support via `src/styles/rtl.css`.

### Key Directories

```
src/
├── pages/
│   ├── index.astro              # English homepage
│   ├── [lang]/                  # All non-English language routes
│   │   ├── index.astro
│   │   ├── avatrade/
│   │   ├── xm/
│   │   ├── avafutures/
│   │   └── exness/
│   ├── avatrade/                # English broker pages
│   └── about/
├── components/                  # Astro components (scoped styles)
├── layouts/
│   └── BaseLayout.astro         # Handles hreflang, SEO, RTL detection
├── data/
│   ├── brokers.ts               # Single source of truth for broker data
│   ├── languages.ts             # 21 language configs (locale, dir, availability)
│   └── translations/            # 21 JSON translation files
└── styles/
    ├── global.css               # Design tokens, CSS variables
    └── rtl.css                  # RTL overrides for Arabic
```

### Data Layer

**Broker data** (`src/data/brokers.ts`): Partner codes, affiliate URLs, bonus tiers, regulators, country restrictions. This is the single source of truth - translations only contain display text.

**Translations** (`src/data/translations/*.json`): Each language file mirrors the same structure with keys for `meta`, `nav`, `home`, `avatrade`, `xm`, `avafutures`, `exness`, `footer`, FAQs, etc.

### Adding Translations

When adding new translatable content:
1. Add the key to `src/data/translations/en.json` first
2. Add the same key with translated values to all 21 language files
3. Use fallback pattern in templates: `{translations.section?.key || 'English fallback'}`

### Cloudflare Pages Middleware

`functions/_middleware.ts` handles geo-based redirects (e.g., Spain CFD restrictions redirect to AvaFutures).

### Affiliate Links

All affiliate URLs use `?tag=PARTNERCODE` format. Links must include `rel="noopener sponsored"`. The `CodeBox` component handles copy-to-clipboard and redirect functionality.

### Styling Conventions

- CSS variables defined in `global.css` (colors, spacing, typography)
- Components use scoped `<style>` blocks
- Test RTL layout with Arabic (`/ar/`) when modifying layouts
