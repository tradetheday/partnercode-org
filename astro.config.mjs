import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://partnercode.org',
  output: 'static',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'always'
  },
  integrations: [
    sitemap({
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
        // Boost priority for main broker pages
        if (item.url.match(/\/(avatrade|xm|avafutures|exness)\/$/)) {
          item.priority = 0.9;
        }
        // Homepage gets highest priority
        if (item.url === 'https://partnercode.org/') {
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
