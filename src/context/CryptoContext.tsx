//* Packages Imports */
import { createContext, ReactElement, useEffect, useState } from "react";
import axios from "axios";
import { AxiosError } from "axios";

//* Utils Imports */
import { CoinsPath, SearchPath } from "@Utils/urls";
import { CryptoCoinData, CryptoSearchData } from "@Src/Data/CryptoData";

type CryptoContextType = {
  cryptoData: CoinsDataType[];
  searchData: CoinSearchDataType[];
  getSearchData: (search: string) => void;
};

//* Create context object
export const CryptoContext = createContext<CryptoContextType | null>(null);

//* Create the provider component
export const CryptoProvider = ({ children }: { children: ReactElement }) => {
  const [cryptoData, setCryptoData] = useState<CoinsDataType[]>([]);
  const [searchData, setSearchData] = useState<CoinSearchDataType[]>([]);

  //* Fetch crypto data
  const getCryptoData = async () => {
    try {
      const { data } = await axios.get(
        `${CoinsPath}?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
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
    if (cryptoData.length === 0) {
      getCryptoData();
    }
  }, [cryptoData.length]);

  return (
    <CryptoContext.Provider value={{ cryptoData, searchData, getSearchData }}>
      {children}
    </CryptoContext.Provider>
  );
};
