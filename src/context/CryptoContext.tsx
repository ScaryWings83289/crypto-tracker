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
import { CoinsPath, SearchPath } from "@Utils/urls";
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

  //* Fetch crypto data
  const getCryptoData = async () => {
    try {
      const { data } = await axios.get(
        `${CoinsPath}?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
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

  useEffect(() => {
    if (cryptoData.length === 0 || coinSearch.length > 0 || currency || sortBy) {
      getCryptoData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cryptoData.length, coinSearch, currency, sortBy]);

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
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
