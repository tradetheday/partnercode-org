import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Verification dates for sitemap lastmod
const verificationDates = {
  avatrade: '2026-01-15',
  xm: '2026-01-15',
  avafutures: '2026-01-15',
  exness: '2026-01-15',
  site: '2026-01-15'
};

export default defineConfig({
  site: 'https://partnercode.org',
  output: 'static',
  compressHTML: true,
  prefetch: false,
  build: {
    format: 'directory',
    inlineStylesheets: 'always'
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/about/') && !page.includes('/privacy/') && !page.includes('/risk-warning/'),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          de: 'de',
          fr: 'fr',
          it: 'it',
          pt: 'pt',
          nl: 'nl',
          pl: 'pl',
          ar: 'ar',
          tr: 'tr',
          ru: 'ru',
          zh: 'zh-Hans',
          ja: 'ja',
          ko: 'ko',
          th: 'th',
          vi: 'vi',
          id: 'id',
          hi: 'hi',
          sv: 'sv',
          no: 'nb',
          da: 'da'
        }
      },
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        // Determine lastmod based on URL
        let lastmod = verificationDates.site;
        if (item.url.includes('/avatrade')) lastmod = verificationDates.avatrade;
        else if (item.url.includes('/xm')) lastmod = verificationDates.xm;
        else if (item.url.includes('/avafutures')) lastmod = verificationDates.avafutures;
        else if (item.url.includes('/exness')) lastmod = verificationDates.exness;
        item.lastmod = lastmod;

        // Boost priority for main broker pages
        if (item.url.match(/\/(avatrade|xm|avafutures|exness)\/$/)) {
          item.priority = 0.9;
        }
        // Homepage gets highest priority
        if (item.url === 'https://partnercode.org/' || item.url.match(/\/[a-z]{2}(-[A-Z]{2})?\/$/)) {
          item.priority = 1.0;
        }
        return item;
      }
    })
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'de', 'fr', 'it', 'pt', 'nl', 'pl', 'ar', 'tr', 'ru', 'zh', 'ja', 'ko', 'th', 'vi', 'id', 'hi', 'sv', 'no', 'da'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
