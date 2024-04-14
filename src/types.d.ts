type CoinReturnType = {
  times: number;
  currency: string;
  percentage: number;
};

type CoinsDataType = {
  id: string;
  symbol: srting;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: CoinReturnType | null;
  last_updated: string;
  price_change_percentage_1h_in_currency: number | null;
  price_change_percentage_24h_in_currency: number | null;
  price_change_percentage_7d_in_currency: number | null;
};

type CoinSearchDataType = {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number | null;
  thumb: string;
  large: string;
};

type CoinLinksType = {
  homepage: string[];
  whitepaper: string;
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier: string | null;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: {
    github: string[];
    bitbucket: string[];
  };
};

type CoinImageType = {
  thumb: string;
  small: string;
  large: string;
};

type CoinMarketDataType = {
  current_price: Record<string, number>;
  total_value_locked: number | null;
  mcap_to_tvl_ratio: number | null;
  fdv_to_tvl_ratio: number | null;
  roi: number | null;
  ath: Record<string, number>;
  ath_change_percentage: Record<string, number>;
  ath_date: Record<string, string>;
  atl: Record<string, number>;
  atl_change_percentage: Record<string, number>;
  atl_date: Record<string, string>;
  market_cap: Record<string, number>;
  market_cap_rank: number;
  fully_diluted_valuation: Record<string, number>;
  market_cap_fdv_ratio: number;
  total_volume: Record<string, number>;
  high_24h: Record<string, number>;
  low_24h: Record<string, number>;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  price_change_24h_in_currency: Record<string, number>;
  price_change_percentage_1h_in_currency: Record<string, number>;
  price_change_percentage_24h_in_currency: Record<string, number>;
  price_change_percentage_7d_in_currency: Record<string, number>;
  price_change_percentage_14d_in_currency: Record<string, number>;
  price_change_percentage_30d_in_currency: Record<string, number>;
  price_change_percentage_60d_in_currency: Record<string, number>;
  price_change_percentage_200d_in_currency: Record<string, number>;
  price_change_percentage_1y_in_currency: Record<string, number>;
  market_cap_change_24h_in_currency: Record<string, number>;
  market_cap_change_percentage_24h_in_currency: Record<string, number>;
  total_supply: number;
  max_supply: number;
  circulating_supply: number;
  last_updated: string;
};

type CoinDeveloperDataType = {
  forks: number;
  stars: number;
  subscribers: number;
  total_issues: number;
  closed_issues: number;
  pull_requests_merged: number;
  pull_request_contributors: number;
  code_additions_deletions_4_weeks: Record<string, number>;
  commit_count_4_weeks: number;
  last_4_weeks_commit_activity_series: number[];
};

type CoinDataType = {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: string | null;
  platforms: Record<string, string>;
  detail_platforms: Record<string, Record<string, string | null>>;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: Array<string>;
  preview_listing: boolean;
  public_notice: string[] | null;
  additional_notices: string[];
  description: {
    en: string;
  };
  links: CoinLinksType;
  image: CoinImageType;
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;
  market_cap_rank: number;
  market_data: CoinMarketDataType;
  developer_data: CoinDeveloperDataType;
  status_updates: number[];
  last_updated: string;
};

type HighLowIndicatorPropsType = {
  currentPrice: number;
  high: number;
  low: number;
};

type PricesDataType = {
  prices: Array<Array<number>>;
  market_caps: Array<Array<number>>;
  total_volumes: Array<Array<number>>;
};

type ChartFilterType = "prices" | "market_caps" | "total_volumes";

type ChartData = {
  date: string;
  [x: ChartFilterType]: number;
};

type ChartComponentPropsType = {
  data: ChartData[];
  currency: string;
  type: ChartFilterType;
};

type CustomTooltipPropsType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any[];
  label: string;
  active: boolean;
  currency: string;
};

type TrendingCoinDataType = {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
    data: {
      price: number;
      price_btc: string;
      price_change_percentage_24h: Record<string, number>;
      market_cap: string;
      market_cap_btc: string;
      total_volume: string;
      total_volume_btc: string;
      sparkline: string;
      content: {
        title: string;
        description: string;
      } | null;
    };
  };
};

type TrendingNftDataType = {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
  nft_contract_id: number;
  native_currency_symbol: string;
  floor_price_in_native_currency: number;
  floor_price_24h_percentage_change: number;
  data: {
    floor_price: string;
    floor_price_in_usd_24h_percentage_change: string;
    h24_volume: string;
    h24_average_sale_price: string;
    sparkline: string;
    content: string | null;
  };
};

type TrendingCategoriesType = {
  id: number;
  name: string;
  market_cap_1h_change: number;
  slug: string;
  coins_count: number;
  data: {
    market_cap: number;
    market_cap_btc: number;
    total_volume: number;
    total_volume_btc: number;
    market_cap_change_percentage_24h: Record<string, number>;
    sparkline: string;
  };
};

type CryptoContextType = {
  cryptoData: CoinsDataType[];
  searchData: CoinSearchDataType[];
  getSearchData: (search: string) => void;
  setCoinSearch: Dispatch<SetStateAction<string>>;
  setSearchData: Dispatch<SetStateAction<CoinSearchDataType[]>>;
  currency: string;
  setCurrency: Dispatch<SetStateAction<string>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  handleReset: () => void;
  perPage: number;
  setPerPage: Dispatch<SetStateAction<number>>;
  coinData: CoinDataType | null;
  getCoinData: (coinId: string) => void;
};

type TrendingContextType = {
  trendData: TrendingCoinDataType[];
  handleResetTrending: () => void;
};

type StorageContextType = {
  savedCoins: string[];
  handleSavedCoin: (coinId: string) => void;
  handleRemoveCoin: (coinId: string) => void;
  savedData: CoinsDataType[];
  handleSaveReset: () => void;
};
