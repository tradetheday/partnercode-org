export interface BonusTier {
  minDeposit: number;
  maxDeposit: number | null;
  bonusPercent: number;
  maxBonus: number;
}

export interface Broker {
  id: string;
  name: string;
  partnerCode: string;
  affiliateUrl: string;
  futuresUrl?: string;
  maxBonus: string;
  minDeposit: string;
  founded: number;
  regulators: string[];
  headquarters: string;
  tradingPlatforms: string[];
  instruments: string[];
  bonusTiers: BonusTier[];
  notAvailableIn: string[];
}

export const avatrade: Broker = {
  id: 'avatrade',
  name: 'AvaTrade',
  partnerCode: '128979',
  affiliateUrl: 'https://www.avatrade.com/trading-account?tag=128979',
  futuresUrl: 'https://www.avafutures.com/trading-platforms/tradingview?tag=128979',
  maxBonus: '$14,000',
  minDeposit: '$100',
  founded: 2006,
  regulators: [
    'Central Bank of Ireland',
    'ASIC (Australia)',
    'FSCA (South Africa)',
    'FSA (Japan)',
    'ADGM (Abu Dhabi)',
    'BVI FSC',
    'ISA (Israel)',
    'KNF (Poland)',
    'IIROC (Canada)'
  ],
  headquarters: 'Dublin, Ireland',
  tradingPlatforms: [
    'MetaTrader 4',
    'MetaTrader 5',
    'AvaTradeGO',
    'WebTrader',
    'AvaOptions',
    'DupliTrade',
    'ZuluTrade'
  ],
  instruments: [
    'Forex (55+ pairs)',
    'CFD Stocks (600+)',
    'Indices',
    'Commodities',
    'Cryptocurrencies',
    'ETFs',
    'Bonds',
    'Options'
  ],
  bonusTiers: [
    { minDeposit: 1000, maxDeposit: 4999, bonusPercent: 20, maxBonus: 1000 },
    { minDeposit: 5000, maxDeposit: 9999, bonusPercent: 30, maxBonus: 3000 },
    { minDeposit: 10000, maxDeposit: null, bonusPercent: 40, maxBonus: 14000 }
  ],
  notAvailableIn: [
    'United States',
    'United Kingdom',
    'Turkey',
    'Russia',
    'New Zealand',
    'Belgium',
    'Iran',
    'North Korea',
    'Syria',
    'Belarus'
  ],
  // CFDs restricted in Spain (CNMV regulations) - use AvaFutures instead
  cfdRestrictedIn: ['Spain']
};

// AvaFutures - For regions where CFDs are restricted (Spain, etc.)
export const avafutures: Broker = {
  id: 'avafutures',
  name: 'AvaFutures',
  partnerCode: '128979',
  affiliateUrl: 'https://www.avafutures.com/trading-platforms/tradingview?tag=128979',
  maxBonus: '$10,000',
  minDeposit: '$100',
  founded: 2006,
  regulators: [
    'NFA (USA)',
    'CFTC (USA)'
  ],
  headquarters: 'Dublin, Ireland',
  tradingPlatforms: [
    'TradingView',
    'AvaFutures Platform'
  ],
  instruments: [
    'Futures (Indices)',
    'Futures (Commodities)',
    'Futures (Currencies)',
    'Futures (Interest Rates)',
    'Micro Futures'
  ],
  bonusTiers: [
    { minDeposit: 1000, maxDeposit: 1999, bonusPercent: 0, maxBonus: 200 },
    { minDeposit: 2000, maxDeposit: 2999, bonusPercent: 0, maxBonus: 400 },
    { minDeposit: 3000, maxDeposit: 4999, bonusPercent: 0, maxBonus: 600 },
    { minDeposit: 5000, maxDeposit: 9999, bonusPercent: 0, maxBonus: 1000 },
    { minDeposit: 10000, maxDeposit: 19999, bonusPercent: 0, maxBonus: 2000 },
    { minDeposit: 20000, maxDeposit: 49999, bonusPercent: 0, maxBonus: 4000 },
    { minDeposit: 50000, maxDeposit: 99999, bonusPercent: 0, maxBonus: 10000 },
    { minDeposit: 100000, maxDeposit: null, bonusPercent: 0, maxBonus: 0 }
  ],
  notAvailableIn: []
};

// XM - Global forex broker
export const xm: Broker = {
  id: 'xm',
  name: 'XM',
  partnerCode: 'QK44F',
  affiliateUrl: 'https://affs.click/w5kdj',
  maxBonus: '$10,600',
  minDeposit: '$5',
  founded: 2009,
  regulators: [
    'CySEC (Cyprus)',
    'ASIC (Australia)',
    'IFSC (Belize)',
    'DFSA (Dubai)'
  ],
  headquarters: 'Limassol, Cyprus',
  tradingPlatforms: [
    'MetaTrader 4',
    'MetaTrader 5',
    'XM App'
  ],
  instruments: [
    'Forex (55+ pairs)',
    'CFD Stocks (1,000+)',
    'Indices',
    'Commodities',
    'Precious Metals',
    'Energies',
    'Cryptocurrencies'
  ],
  bonusTiers: [
    { minDeposit: 5, maxDeposit: 500, bonusPercent: 100, maxBonus: 500 },
    { minDeposit: 501, maxDeposit: 5000, bonusPercent: 50, maxBonus: 2500 },
    { minDeposit: 5001, maxDeposit: null, bonusPercent: 20, maxBonus: 10600 }
  ],
  notAvailableIn: [
    'United States',
    'Canada',
    'Israel',
    'Iran',
    'North Korea',
    'Syria'
  ]
};

// Exness - Tight spreads, no traditional bonuses
export const exness: Broker = {
  id: 'exness',
  name: 'Exness',
  partnerCode: 'xxv8puyog3',
  affiliateUrl: 'https://one.exnessonelink.com/a/xxv8puyog3',
  maxBonus: 'No Bonus',
  minDeposit: '$10',
  founded: 2008,
  regulators: [
    'FCA (UK)',
    'CySEC (Cyprus)',
    'FSCA (South Africa)',
    'FSA (Seychelles)',
    'CBCS (Curacao)',
    'FSC (BVI)',
    'FSC (Mauritius)'
  ],
  headquarters: 'Limassol, Cyprus',
  tradingPlatforms: [
    'MetaTrader 4',
    'MetaTrader 5',
    'Exness Terminal',
    'Exness Trade App'
  ],
  instruments: [
    'Forex (100+ pairs)',
    'Metals',
    'Cryptocurrencies',
    'Energies',
    'Stocks',
    'Indices'
  ],
  bonusTiers: [],
  notAvailableIn: [
    'United States',
    'Iran',
    'North Korea',
    'Syria'
  ]
};

export const brokers: Broker[] = [avatrade, avafutures, xm, exness];

export function getBrokerById(id: string): Broker | undefined {
  return brokers.find(b => b.id === id);
}

export function formatBonus(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatDepositRange(min: number, max: number | null): string {
  if (max === null) {
    return `$${min.toLocaleString()}+`;
  }
  return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
}
