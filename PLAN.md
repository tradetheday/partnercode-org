# PartnerCode.org - Multi-Language AvaTrade Partner Code Site

## Vision
Build a dedicated multi-language website to dominate "partner code" search rankings globally, driving AvaTrade affiliate revenue through partner code 128979. Target AI/SGE rankings with comprehensive schema markup and instant-answer content.

---

## Key Decisions
- **Design**: Fresh unique design (NOT reusing TradeTheDay - new brand identity)
- **Broker Focus**: AvaTrade only (can add others later)
- **Languages**: All 21 languages from day one for maximum hreflang coverage
- **Partner Code**: 128979

---

## AvaTrade Availability

**Operates in**: 150+ countries, regulated in 9 jurisdictions (Ireland, Australia, Japan, South Africa, Abu Dhabi, BVI, Israel, Poland, Canada)

**NOT Available**: USA, UK, Turkey, Russia, New Zealand, Belgium, Iran, North Korea, Syria, Belarus

**Language Strategy**: Turkish and Russian pages still valuable for speakers in other countries (e.g., Turkish speakers in Germany, Russian speakers in Israel). Each page will include availability notice.

---

## Strategic Insight

### Why This Works
"Partner code" is searched in dozens of languages with relatively low competition compared to generic "bonus code" or "promo code" terms. By owning partnercode.org and creating native-language content for each market, we can:

1. **Capture long-tail traffic** in underserved languages
2. **Build topical authority** - the domain IS the keyword
3. **Serve AI/SGE directly** with structured, multilingual FAQ content
4. **Compound rankings** - each language page strengthens domain authority
5. **Full hreflang network** - 21 languages interlinked = strong international SEO signal

### Target Languages (21 Markets)

| # | Language | Code | Market | AvaTrade Available | Keyword |
|---|----------|------|--------|-------------------|---------|
| 1 | English | en | Global | ✅ | partner code |
| 2 | Spanish | es | Spain/LATAM | ✅ | código partner |
| 3 | German | de | Germany/Austria | ✅ | Partnercode |
| 4 | French | fr | France/Belgium* | ✅ (France) | code partenaire |
| 5 | Italian | it | Italy | ✅ | codice partner |
| 6 | Portuguese | pt | Brazil/Portugal | ✅ | código de parceiro |
| 7 | Dutch | nl | Netherlands | ✅ | partnercode |
| 8 | Polish | pl | Poland | ✅ | kod partnerski |
| 9 | Arabic | ar | MENA/UAE | ✅ | كود الشريك |
| 10 | Turkish | tr | Turkey* | ⚠️ (diaspora) | partner kodu |
| 11 | Russian | ru | Russia* | ⚠️ (diaspora) | партнерский код |
| 12 | Chinese | zh | China/Taiwan | ✅ | 合作伙伴代码 |
| 13 | Japanese | ja | Japan | ✅ | パートナーコード |
| 14 | Korean | ko | Korea | ✅ | 파트너 코드 |
| 15 | Thai | th | Thailand | ✅ | รหัสพาร์ทเนอร์ |
| 16 | Vietnamese | vi | Vietnam | ✅ | mã đối tác |
| 17 | Indonesian | id | Indonesia | ✅ | kode partner |
| 18 | Hindi | hi | India | ✅ | पार्टनर कोड |
| 19 | Swedish | sv | Sweden | ✅ | partnerkod |
| 20 | Norwegian | no | Norway | ✅ | partnerkode |
| 21 | Danish | da | Denmark | ✅ | partnerkode |

*Belgium not available, Turkey/Russia restricted - pages target speakers in other countries

---

## Site Architecture

### URL Structure (Subdirectory i18n)
```
partnercode.org/                    → English (default)
partnercode.org/es/                 → Spanish
partnercode.org/de/                 → German
partnercode.org/fr/                 → French
partnercode.org/it/                 → Italian
partnercode.org/pt/                 → Portuguese
partnercode.org/nl/                 → Dutch
partnercode.org/pl/                 → Polish
partnercode.org/ar/                 → Arabic (RTL)
partnercode.org/tr/                 → Turkish
partnercode.org/ru/                 → Russian
partnercode.org/zh/                 → Chinese
partnercode.org/ja/                 → Japanese
partnercode.org/ko/                 → Korean
... etc
```

### Page Types Per Language
```
/{lang}/                            → Homepage: "What is a Partner Code?"
/{lang}/avatrade/                   → AvaTrade Partner Code 128979
/{lang}/avatrade/bonus-tiers/       → Deposit bonus breakdown
/{lang}/calculator/                 → Bonus calculator tool
```

---

## Design Direction

### Fresh Brand Identity (NOT TradeTheDay)
- **Primary Color**: TBD (suggestion: deep blue #1a365d or teal #0d9488 for trust)
- **Accent Color**: Gold/amber for CTAs (#f59e0b) - conveys value/bonuses
- **Typography**: Clean, modern - Inter or similar
- **Style**: Minimal, professional, financial-sector appropriate
- **Inspiration**: Think Wise, Revolut, modern fintech - not loud affiliate site

### Design Principles
1. **Trust-first** - Clean, no clutter, professional
2. **Code prominent** - 128979 is the hero element
3. **Fast** - Minimal assets, no bloat
4. **Accessible** - Works in all languages including RTL

---

## Tech Stack

### Framework: Astro 5.x
- **Why**: Proven technology, static output, component reuse
- **i18n**: Manual routing with `[lang]` dynamic segments
- **Output**: Static HTML for maximum performance
- **No JS frameworks**: Pure Astro components (minimal client JS)

### Project Structure
```
partnercode.org/
├── astro.config.mjs
├── package.json
├── public/
│   └── images/
│       └── avatrade-logo.svg
├── src/
│   ├── components/
│   │   ├── BonusCalculator.astro
│   │   ├── BonusTiers.astro
│   │   ├── CodeBox.astro
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HowToSteps.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── SEOHead.astro
│   │   └── TrustBadges.astro
│   ├── data/
│   │   ├── brokers.ts              → Partner code data
│   │   └── translations/
│   │       ├── en.json
│   │       ├── es.json
│   │       ├── de.json
│   │       └── ... (21 files)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro             → English homepage
│   │   ├── avatrade/
│   │   │   └── index.astro         → English AvaTrade page
│   │   ├── calculator/
│   │   │   └── index.astro
│   │   ├── [lang]/
│   │   │   ├── index.astro         → Translated homepage
│   │   │   ├── avatrade/
│   │   │   │   └── index.astro     → Translated AvaTrade page
│   │   │   └── calculator/
│   │   │       └── index.astro
│   └── styles/
│       ├── global.css
│       └── rtl.css                 → Arabic/Hebrew support
└── tsconfig.json
```

---

## Content Strategy

### Homepage (Each Language)
**Purpose**: Explain what partner codes are, build trust, link to AvaTrade

**Sections**:
1. Hero: "What is a Partner Code?" + CTA to AvaTrade
2. Quick explanation (AI snippet optimized)
3. Benefits of using partner codes
4. Featured broker: AvaTrade with code 128979
5. How partner codes work (3 steps)
6. FAQ (5+ questions)
7. Trust badges (regulations, security)

### AvaTrade Partner Code Page (Each Language)
**Purpose**: Convert visitors → AvaTrade signups with code 128979

**Sections**:
1. Hero with code box (128979 prominent)
2. Verification status + last updated date
3. Bonus tiers table (USD + local currency)
4. How to use the code (HowTo schema)
5. Bonus calculator (interactive)
6. FAQ (10+ questions including local regulation)
7. About AvaTrade (credibility)
8. Multiple CTAs throughout

### Schema Markup (Every Page)
```json
{
  "@type": "FAQPage",
  "@type": "HowTo",
  "@type": "Offer",
  "@type": "Organization",
  "@type": "BreadcrumbList"
}
```

---

## Translation Data Structure

### `/src/data/translations/en.json`
```json
{
  "meta": {
    "title": "AvaTrade Partner Code 128979 - Official Welcome Bonus 2026",
    "description": "Get up to $14,000 bonus with AvaTrade partner code 128979..."
  },
  "hero": {
    "badge": "Official Partner",
    "title": "AvaTrade Partner Code",
    "subtitle": "Use code 128979 to unlock exclusive welcome bonuses",
    "cta": "Claim Your Bonus Now"
  },
  "code": {
    "label": "Partner Code",
    "value": "128979",
    "copy": "Copy",
    "copied": "Copied!"
  },
  "bonusTiers": {
    "title": "Welcome Bonus Tiers",
    "deposit": "Deposit",
    "bonus": "Bonus",
    "tiers": [
      { "min": "$1,000", "max": "$4,999", "bonus": "20%", "maxBonus": "$1,000" },
      { "min": "$5,000", "max": "$9,999", "bonus": "30%", "maxBonus": "$3,000" },
      { "min": "$10,000+", "bonus": "40%", "maxBonus": "$14,000" }
    ]
  },
  "faq": [
    {
      "q": "What is the AvaTrade partner code?",
      "a": "The AvaTrade partner code is 128979..."
    }
    // ... more FAQs
  ],
  "howTo": {
    "title": "How to Use the Partner Code",
    "steps": [
      { "title": "Visit AvaTrade", "desc": "Click our link to go to AvaTrade" },
      { "title": "Enter Code", "desc": "Enter 128979 in the partner code field" },
      { "title": "Get Bonus", "desc": "Your bonus is automatically applied" }
    ]
  }
}
```

### `/src/data/translations/es.json`
```json
{
  "meta": {
    "title": "Código Partner AvaTrade 128979 - Bono de Bienvenida 2026",
    "description": "Obtén hasta $14,000 de bono con el código partner AvaTrade 128979..."
  },
  "hero": {
    "badge": "Socio Oficial",
    "title": "Código Partner AvaTrade",
    "subtitle": "Usa el código 128979 para desbloquear bonos exclusivos",
    "cta": "Reclama Tu Bono Ahora"
  }
  // ... etc
}
```

---

## SEO Strategy

### Hreflang Implementation
Every page includes hreflang tags for all language versions:
```html
<link rel="alternate" hreflang="en" href="https://partnercode.org/avatrade/" />
<link rel="alternate" hreflang="es" href="https://partnercode.org/es/avatrade/" />
<link rel="alternate" hreflang="de" href="https://partnercode.org/de/avatrade/" />
<link rel="alternate" hreflang="x-default" href="https://partnercode.org/avatrade/" />
```

### Target Keywords by Language
| Language | Primary | Secondary |
|----------|---------|-----------|
| English | avatrade partner code | avatrade referral code, avatrade bonus code |
| Spanish | código partner avatrade | código de socio avatrade |
| German | avatrade partnercode | avatrade partner-code |
| French | code partenaire avatrade | code promo avatrade |

### AI/SGE Optimization
1. **Direct answers at top** - First paragraph answers the query completely
2. **FAQ schema** - 10+ questions per language
3. **HowTo schema** - Step-by-step with numbered steps
4. **Tables** - Structured bonus tier data
5. **Freshness signals** - Current year/month in content

---

## Affiliate Integration

### Partner Code Data (`/src/data/brokers.ts`)
```typescript
export const avatrade = {
  name: 'AvaTrade',
  partnerCode: '128979',
  affiliateUrl: 'https://www.avatrade.com/trading-account?tag=128979',
  futuresUrl: 'https://futures.avatrade.com/trading-platforms/tradingview?tag=128979',
  maxBonus: '$14,000',
  minDeposit: '$100',
  regulators: ['ASIC', 'CySEC', 'FCA', 'Central Bank of Ireland'],
  founded: 2006
};
```

### CTA Links
All CTAs use `rel="noopener sponsored"` and go to:
- Main: `https://www.avatrade.com/trading-account?tag=128979`
- Futures: `https://futures.avatrade.com/trading-platforms/tradingview?tag=128979`

---

## Implementation Phases

### Phase 1: Foundation + All 21 Languages
1. **Project Setup**
   - Initialize Astro project in `/websites/partnercode.org`
   - Configure astro.config.mjs with static output
   - Set up project structure

2. **Design System**
   - Create fresh color palette and typography
   - Build global.css with CSS variables
   - Add rtl.css for Arabic support

3. **Core Components**
   - BaseLayout.astro (with SEO, hreflang)
   - Header.astro (with language switcher)
   - Footer.astro
   - CodeBox.astro (partner code with copy)
   - BonusTiers.astro (deposit bonus table)
   - HowToSteps.astro (3-step guide)
   - FAQ.astro (expandable)
   - TrustBadges.astro (regulation logos)

4. **Data Layer**
   - brokers.ts (AvaTrade partner code data)
   - languages.ts (21 language configs)
   - translations/*.json (21 translation files)

5. **Pages**
   - English homepage + AvaTrade page (template)
   - Dynamic `[lang]/` routing for all 21 languages
   - Full hreflang implementation

6. **Launch All 21 Languages**

### Phase 2: Enhancement
7. Bonus calculator component (interactive)
8. Add availability notices per language
9. Add local currency bonus amounts
10. Testimonials section (translated)

### Phase 3: Optimization
11. Monitor rankings per language
12. A/B test CTAs
13. Build backlinks per language market
14. Add more FAQ questions based on search data

---

## Files to Create

### Core Setup (4 files)
```
astro.config.mjs          - Astro config with static output
package.json              - Dependencies (just astro)
tsconfig.json             - TypeScript config
public/favicon.svg        - Site favicon
```

### Styles (2 files)
```
src/styles/global.css     - Design system + variables
src/styles/rtl.css        - Right-to-left support (Arabic)
```

### Layout (1 file)
```
src/layouts/BaseLayout.astro - Page wrapper with SEO + hreflang
```

### Components (10 files)
```
src/components/Header.astro           - Site header + logo
src/components/Footer.astro           - Site footer + disclaimer
src/components/LanguageSwitcher.astro - Dropdown with 21 languages
src/components/CodeBox.astro          - Partner code 128979 with copy button
src/components/BonusTiers.astro       - Deposit bonus table
src/components/HowToSteps.astro       - 3-step guide with schema
src/components/FAQ.astro              - Expandable FAQ with schema
src/components/TrustBadges.astro      - Regulation badges (ASIC, CBI, etc.)
src/components/AvailabilityNotice.astro - Country availability warning
src/components/SEOSchema.astro        - JSON-LD schema generator
```

### Pages (4 files - dynamic routing generates 42+ pages)
```
src/pages/index.astro                 - English homepage
src/pages/avatrade/index.astro        - English AvaTrade partner code page
src/pages/[lang]/index.astro          - Dynamic homepage (20 languages)
src/pages/[lang]/avatrade/index.astro - Dynamic AvaTrade page (20 languages)
```

### Data Layer (24 files)
```
src/data/brokers.ts       - AvaTrade partner code data
src/data/languages.ts     - 21 language configs with metadata
src/data/translations/
├── en.json               - English
├── es.json               - Spanish
├── de.json               - German
├── fr.json               - French
├── it.json               - Italian
├── pt.json               - Portuguese
├── nl.json               - Dutch
├── pl.json               - Polish
├── ar.json               - Arabic
├── tr.json               - Turkish
├── ru.json               - Russian
├── zh.json               - Chinese
├── ja.json               - Japanese
├── ko.json               - Korean
├── th.json               - Thai
├── vi.json               - Vietnamese
├── id.json               - Indonesian
├── hi.json               - Hindi
├── sv.json               - Swedish
├── no.json               - Norwegian
└── da.json               - Danish
```

### Total: ~45 files → 42+ generated pages

---

## Translation Workflow

### Approach
1. Build complete English version first (template)
2. Create en.json with ALL translatable strings
3. Use Claude/AI to generate initial translations for all 20 languages
4. Review machine translations for key markets (ES, DE, FR)
5. Native speaker review for high-value content if budget allows

### Translation File Structure
Each JSON file contains:
- `meta` - title, description for SEO
- `hero` - headline, subtitle, CTA text
- `code` - label, copy button text
- `bonusTiers` - table headers, tier labels
- `howTo` - step titles and descriptions
- `faq` - 10+ questions and answers
- `footer` - disclaimer, copyright
- `availability` - country restriction notice

### Quality Priority
1. **High** (manual review): EN, ES, DE, FR, IT, PT
2. **Medium** (AI + spot check): NL, PL, AR, TR, RU
3. **Standard** (AI generated): ZH, JA, KO, TH, VI, ID, HI, SV, NO, DA

---

## Verification

### Pre-Launch Checklist
- [ ] All 21 language pages render without errors
- [ ] Hreflang tags validate (technicalseo.com/tools/hreflang/)
- [ ] Schema validates on all pages (Google Rich Results Test)
- [ ] Partner code 128979 copies correctly in all languages
- [ ] All affiliate links contain `?tag=128979`
- [ ] RTL layout correct for Arabic (/ar/)
- [ ] Mobile responsive on all pages
- [ ] Page speed 90+ on Lighthouse
- [ ] Favicon and meta images work
- [ ] Language switcher functions correctly

### Post-Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Monitor indexing for all 42+ pages
- [ ] Set up rank tracking for key terms per language

---

## Hosting

**Recommended**: Vercel or Netlify (free tier)
- Automatic deploys from Git
- Global CDN
- Free SSL

**Domain**: partnercode.org (already owned)

---

## Success Metrics

**Target (6 months)**:
- Top 10 ranking for "avatrade partner code" in 10+ languages
- AI/SGE featured answers in 5+ languages
- 2,000+ monthly organic visits
- 100+ AvaTrade signups/month via code 128979
- $X,XXX monthly affiliate revenue
