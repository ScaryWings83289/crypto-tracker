//* Packages Imports */
import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { AxiosError } from "axios";

//* Utils Imports */
import { CoinsPath, CoinsListPath, SearchPath } from "@Utils/urls";
import { CryptoCoinData, CryptoSearchData } from "@Data/CryptoData";

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
};

//* Create context object
export const CryptoContext = createContext<CryptoContextType | null>(null);

//* Create the provider component
export const CryptoProvider = ({ children }: { children: ReactElement }) => {
  const [cryptoData, setCryptoData] = useState<CoinsDataType[]>([]);
  const [searchData, setSearchData] = useState<CoinSearchDataType[]>([]);
  const [coinSearch, setCoinSearch] = useState<string>("");
  const [currency, setCurrency] = useState<string>("usd");
  const [sortBy, setSortBy] = useState<string>("market_cap_desc");
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(250);

  //* Fetch crypto data
  const getCryptoData = async () => {
    try {
      const { data } = await axios.get(
        `${CoinsPath}?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      );
      setCryptoData(data);
    } catch (error: AxiosError | unknown) {
      if ((error as AxiosError).message === "Network Error") {
        setCryptoData(CryptoCoinData);
      }
      console.error(error);
    }
  };

  //* Fetch search data
  const getSearchData = async (search: string) => {
    try {
      const { data } = await axios.get(`${SearchPath}?query=${search}`);
      setSearchData(data.coins);
    } catch (error: AxiosError | unknown) {
      if ((error as AxiosError).message === "Network Error") {
        setSearchData(CryptoSearchData);
      }
      console.error(error);
    }
  };

  //* Fetch coins list data
  const getCoinsList = async () => {
    try {
      const { data } = await axios.get(CoinsListPath);
      setTotalPages(Math.ceil(data.length / perPage));
    } catch (error: AxiosError | unknown) {
      if ((error as AxiosError).message === "Network Error") {
        setTotalPages(250);
      }
      console.error(error);
    }
  };

  //* Reset Function
  const handleReset = () => {
    setPage(1);
    setCoinSearch("");
    setCurrency("usd");
  }

  useEffect(() => {
    if (
      cryptoData.length === 0 ||
      coinSearch.length > 0 ||
      currency ||
      sortBy ||
      page ||
      perPage
    ) {
      getCryptoData();
      getCoinsList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cryptoData.length, coinSearch, currency, sortBy, page, perPage]);

  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        searchData,
        getSearchData,
        setCoinSearch,
        setSearchData,
        currency,
        setCurrency,
        sortBy,
        setSortBy,
        page,
        setPage,
        totalPages,
        handleReset,
        perPage,
        setPerPage,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
