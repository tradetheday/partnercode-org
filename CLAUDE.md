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

### Build Optimizations

- `inlineStylesheets: 'always'` - All CSS inlined for performance
- `prefetch: false` - Disabled to eliminate critical request chain
- `compressHTML: true` - Minified HTML output

### i18n Structure

- **English pages:** Root level (`/avatrade/`, `/xm/`, `/about/`)
- **Localized pages:** Dynamic `[lang]` segment (`/es/avatrade/`, `/de/xm/`)
- **No `/en/` prefix** for English (prefixDefaultLocale: false)

Languages defined in `src/data/languages.ts`. Arabic has RTL support via `src/styles/rtl.css`.

### Key Directories

```
src/
├── pages/
│   ├── index.astro              # English homepage
│   ├── [lang]/                  # All non-English language routes
│   ├── avatrade/                # English broker pages
│   └── about/
├── components/                  # Astro components (scoped styles)
├── layouts/
│   └── BaseLayout.astro         # Handles hreflang, SEO, RTL, schemas
├── data/
│   ├── brokers.ts               # Single source of truth for broker data
│   ├── languages.ts             # 21 language configs
│   └── translations/            # 21 JSON translation files
├── utils/
│   └── date.ts                  # Localized date formatting (21 languages)
└── styles/
    ├── global.css               # Design tokens, CSS variables
    └── rtl.css                  # RTL overrides for Arabic
```

### Data Layer

**Broker data** (`src/data/brokers.ts`): Partner codes, affiliate URLs, bonus tiers, regulators, country restrictions. Single source of truth - translations only contain display text.

**Translations** (`src/data/translations/*.json`): Each file mirrors the same structure with keys for `meta`, `nav`, `home`, `avatrade`, `xm`, `avafutures`, `exness`, `footer`, FAQs, etc.

### Adding Translations

1. Add key to `src/data/translations/en.json` first
2. Add same key to all 21 language files
3. Use fallback pattern: `{translations.section?.key || 'English fallback'}`

### Key Components

- **SEOSchema.astro** - Generates JSON-LD structured data (HowTo, FAQPage, BreadcrumbList, WebPage, PartnerCode)
- **CodeBox.astro** - Copy-to-clipboard partner code with redirect
- **SpainDetector.astro** / **SpainNotice.astro** - Spain CFD restriction handling (redirects to AvaFutures)
- **FAQ.astro** - Accordion FAQ with optional schema generation (`generateSchema` prop)

### Cloudflare Configuration

- `functions/_middleware.ts` - Geo-based redirects (Spain CFD restrictions)
- `public/_headers` - Security headers (CSP, HSTS), cache rules, Early Hints
- `public/_redirects` - www to non-www redirects

### Affiliate Links

All affiliate URLs use `?tag=PARTNERCODE` format. Links must include `rel="noopener sponsored"`.

### TypeScript Path Aliases

```typescript
@/*           → src/*
@components/* → src/components/*
@layouts/*    → src/layouts/*
@data/*       → src/data/*
@styles/*     → src/styles/*
```

### Styling Conventions

- CSS variables in `global.css` (colors, spacing, typography)
- Components use scoped `<style>` blocks
- Button colors must meet WCAG AA contrast (4.5:1 with white text)
- Test RTL layout with Arabic (`/ar/`) when modifying layouts
