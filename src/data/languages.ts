export interface Language {
  code: string;
  name: string;
  nativeName: string;
  locale: string;
  dir: 'ltr' | 'rtl';
  available: boolean; // Whether AvaTrade is available in primary market
  availabilityNote?: string;
  keyword: string; // "partner code" in the language
  flag: string; // Emoji flag
}

export const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    locale: 'en_US',
    dir: 'ltr',
    available: true,
    keyword: 'partner code',
    flag: '🇬🇧'
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    locale: 'es_ES',
    dir: 'ltr',
    available: true,
    keyword: 'código partner',
    flag: '🇪🇸'
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    locale: 'de_DE',
    dir: 'ltr',
    available: true,
    keyword: 'Partnercode',
    flag: '🇩🇪'
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    locale: 'fr_FR',
    dir: 'ltr',
    available: true,
    keyword: 'code partenaire',
    flag: '🇫🇷'
  },
  {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    locale: 'it_IT',
    dir: 'ltr',
    available: true,
    keyword: 'codice partner',
    flag: '🇮🇹'
  },
  {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    locale: 'pt_BR',
    dir: 'ltr',
    available: true,
    keyword: 'código de parceiro',
    flag: '🇧🇷'
  },
  {
    code: 'nl',
    name: 'Dutch',
    nativeName: 'Nederlands',
    locale: 'nl_NL',
    dir: 'ltr',
    available: true,
    keyword: 'partnercode',
    flag: '🇳🇱'
  },
  {
    code: 'pl',
    name: 'Polish',
    nativeName: 'Polski',
    locale: 'pl_PL',
    dir: 'ltr',
    available: true,
    keyword: 'kod partnerski',
    flag: '🇵🇱'
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    locale: 'ar_AE',
    dir: 'rtl',
    available: true,
    keyword: 'كود الشريك',
    flag: '🇸🇦'
  },
  {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    locale: 'tr_TR',
    dir: 'ltr',
    available: false,
    availabilityNote: 'AvaTrade is not available in Turkey. This page is for Turkish speakers in other countries.',
    keyword: 'partner kodu',
    flag: '🇹🇷'
  },
  {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    locale: 'ru_RU',
    dir: 'ltr',
    available: false,
    availabilityNote: 'AvaTrade is not available in Russia. This page is for Russian speakers in other countries.',
    keyword: 'партнерский код',
    flag: '🇷🇺'
  },
  {
    code: 'zh-CN',
    name: 'Chinese (Simplified)',
    nativeName: '简体中文',
    locale: 'zh_CN',
    dir: 'ltr',
    available: true,
    keyword: '合作伙伴代码',
    flag: '🇨🇳'
  },
  {
    code: 'zh-TW',
    name: 'Chinese (Traditional)',
    nativeName: '繁體中文',
    locale: 'zh_TW',
    dir: 'ltr',
    available: true,
    keyword: '合作夥伴代碼',
    flag: '🇹🇼'
  },
  {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    locale: 'ja_JP',
    dir: 'ltr',
    available: true,
    keyword: 'パートナーコード',
    flag: '🇯🇵'
  },
  {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    locale: 'ko_KR',
    dir: 'ltr',
    available: true,
    keyword: '파트너 코드',
    flag: '🇰🇷'
  },
  {
    code: 'th',
    name: 'Thai',
    nativeName: 'ไทย',
    locale: 'th_TH',
    dir: 'ltr',
    available: true,
    keyword: 'รหัสพาร์ทเนอร์',
    flag: '🇹🇭'
  },
  {
    code: 'vi',
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
    locale: 'vi_VN',
    dir: 'ltr',
    available: true,
    keyword: 'mã đối tác',
    flag: '🇻🇳'
  },
  {
    code: 'id',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    locale: 'id_ID',
    dir: 'ltr',
    available: true,
    keyword: 'kode partner',
    flag: '🇮🇩'
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    locale: 'hi_IN',
    dir: 'ltr',
    available: true,
    keyword: 'पार्टनर कोड',
    flag: '🇮🇳'
  },
  {
    code: 'sv',
    name: 'Swedish',
    nativeName: 'Svenska',
    locale: 'sv_SE',
    dir: 'ltr',
    available: true,
    keyword: 'partnerkod',
    flag: '🇸🇪'
  },
  {
    code: 'no',
    name: 'Norwegian',
    nativeName: 'Norsk',
    locale: 'no_NO',
    dir: 'ltr',
    available: true,
    keyword: 'partnerkode',
    flag: '🇳🇴'
  },
  {
    code: 'da',
    name: 'Danish',
    nativeName: 'Dansk',
    locale: 'da_DK',
    dir: 'ltr',
    available: true,
    keyword: 'partnerkode',
    flag: '🇩🇰'
  }
];

export function getLanguageByCode(code: string): Language | undefined {
  return languages.find(l => l.code === code);
}

export function getAllLanguageCodes(): string[] {
  return languages.map(l => l.code);
}

export function getNonEnglishLanguageCodes(): string[] {
  return languages.filter(l => l.code !== 'en').map(l => l.code);
}
