//* Packages Imports */
import { createContext, ReactElement, useEffect, useState } from "react";
import axios from "axios";
import { AxiosError } from "axios";

//* Utils Imports */
import { TrendingPath } from "@Utils/urls";
import { DUMMY_TRENDING_DATA } from "@Data/CryptoData";

type TrendingContextType = {
  trendData: TrendingCoinDataType[];
  handleResetTrending: () => void;
};

//* Create context object
export const TrendingContext = createContext<TrendingContextType | null>(null);

//* Create the provider component
export const TrendingProvider = ({ children }: { children: ReactElement }) => {
  const [trendData, setTrendData] = useState<TrendingCoinDataType[]>([]);

  //* Fetch trending coins data
  const getTrendData = async () => {
    try {
      const { data } = await axios.get(TrendingPath);
      setTrendData(data.coins)
    } catch (error: AxiosError | unknown) {
      if ((error as AxiosError).message === "Network Error") {
        setTrendData(DUMMY_TRENDING_DATA);
      }
      console.error(error);
    }
  };

  //* Reset Function
  const handleResetTrending = () => {
    getTrendData();
  };

  useEffect(() => {
    getTrendData();
  }, []);

  return (
    <TrendingContext.Provider value={{ trendData, handleResetTrending }}>
      {children}
    </TrendingContext.Provider>
  );
};
