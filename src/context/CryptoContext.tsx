//* Packages Imports */
import { createContext, ReactElement, useEffect, useState } from "react";
import axios from "axios";

//* Utils Imports */
import { CoinsPath } from "@Utils/urls";
import { CryptoCoinData } from "@Src/Data/CryptoData";

//* Create context object
export const CryptoContext = createContext<CoinsDataType[]>([]);

//* Create the provider component
export const CryptoProvider = ({ children }: { children: ReactElement }) => {
  const [cryptoData, setCryptoData] = useState<CoinsDataType[]>([]);

  //* Fetch crypto data
  const getCryptoData = async () => {
    try {
      const { data } = await axios.get(
        `${CoinsPath}?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      );
      setCryptoData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if(cryptoData.length === 0) {
        setCryptoData(CryptoCoinData);
    }
    // getCryptoData();
  }, [cryptoData.length]);

  return (
    <CryptoContext.Provider value={cryptoData}>
      {children}
    </CryptoContext.Provider>
  );
};
