import React, { useContext, createContext, Context } from "react";

interface AppContextData {
  ticker;
  setTicker: React.Dispatch<React.SetStateAction<string>>;
  tempTicker;
  setTempTicker: React.Dispatch<React.SetStateAction<string>>;
  startDate;
  setStartDate: React.Dispatch<React.SetStateAction<any>>;
  endDate;
  setEndDate: React.Dispatch<React.SetStateAction<any>>;
  canFetch: boolean;
  setCanFetch: React.Dispatch<React.SetStateAction<boolean>>;
  stockList: any[];
  isPendingStockList: boolean;
  chart;
  chartIsPending: boolean;
  chartError;
  chartData: any[];
  setChartData: React.Dispatch<React.SetStateAction<any[]>>;
  fetchData: () => unknown;
  tickerName: string;
  setTickerName: React.Dispatch<React.SetStateAction<string>>;
  findNameFromStockList: () => string;
}

export const AppContext: Context<AppContextData | undefined> = createContext<
  AppContextData | undefined
>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};
