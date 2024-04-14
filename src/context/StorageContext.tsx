//* Packages Imports */
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import axios from "axios";
import { AxiosError } from "axios";

//* Utils Imports */
import { Storage } from "@Utils/storage";
import { CoinsPath } from "@Utils/urls";
import { DUMMY_SAVED_DATA } from "@Data/CryptoData";

//* Context Imports */
import { CryptoContext } from "@Context/CryptoContext";

//* Create context object
export const StorageContext = createContext<StorageContextType | null>(null);

//* Create the provider component
export const StorageProvider = ({ children }: { children: ReactElement }) => {
  const cryptoContextData = useContext(CryptoContext);
  const currency = cryptoContextData?.currency as string;
  const sortBy = cryptoContextData?.sortBy as string;

  const [savedCoins, setSavedCoins] = useState<string[]>([]);
  const [savedData, setSavedData] = useState<CoinsDataType[]>([]);

  //* Save coin to localstorage
  const handleSavedCoin = (coinId: string) => {
    const oldCoins = JSON.parse(Storage.getValueFromLS("coins") as string);

    if (oldCoins.includes(coinId)) return;

    const newCoin = [...oldCoins, coinId];
    setSavedCoins(newCoin);
    Storage.setValueToLS("coins", JSON.stringify(newCoin));
  };

  //* Remove coin from localstorage
  const handleRemoveCoin = (coinId: string) => {
    const oldCoins = JSON.parse(Storage.getValueFromLS("coins") as string);
    const newCoins = oldCoins.filter((coin: string) => coin !== coinId);
    setSavedCoins(newCoins);
    Storage.setValueToLS("coins", JSON.stringify(newCoins));
  };

  //* Fetch saved crypto data
  const getSavedData = async (totalCoins: string[] = savedCoins) => {
    try {
      const { data } = await axios.get(
        `${CoinsPath}?vs_currency=${currency}&ids=${totalCoins.join(
          ","
        )}&order=${sortBy}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      );
      setSavedData(data);
    } catch (error: AxiosError | unknown) {
      if ((error as AxiosError).message === "Network Error") {
        setSavedData(DUMMY_SAVED_DATA);
      }
      console.error(error);
    }
  };

  //* Reset saved result
  const handleSaveReset = () => {
    getSavedData();
  };

  useEffect(() => {
    if (savedCoins.length > 0) {
      getSavedData(savedCoins);
    } else {
      setSavedData([]);
    }
  }, [savedCoins]);

  //* Get saved coins from localstorage
  useLayoutEffect(() => {
    const coinsData = Storage.getValueFromLS("coins");
    if (!coinsData) {
      Storage.setValueToLS("coins", JSON.stringify([]));
    } else {
      const data = JSON.parse(coinsData);
      setSavedCoins(data);
    }
  }, []);

  return (
    <StorageContext.Provider
      value={{
        savedCoins,
        handleSavedCoin,
        handleRemoveCoin,
        savedData,
        handleSaveReset,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
