import { ReactNode, useEffect, useState } from "react";
import { AppContext } from "@hooks/useAppContext";
import { useMutation } from "@tanstack/react-query";
import { chartPrompt } from "./mutations/useChart";
import { useStockList } from "./queries/useStockList";

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [ticker, setTicker] = useState<string>("AAPL");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const [canFetch, setCanFetch] = useState(false);

  const [chartData, setChartData] = useState<any[]>([]);

  const { data: stockList, isPending: isPendingStockList } = useStockList();

  const chartPromptMutation = useMutation({
    mutationFn: chartPrompt,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const {
    mutate: chart,
    isPending: chartIsPending,
    error: chartError,
  } = chartPromptMutation;

  const fetchData = () => {
    chart({
      ticker,
      start_date: startDate,
      end_date: endDate,
    });
  };

  useEffect(() => {
    if (!ticker) {
      setCanFetch(false);
    } else {
      if (startDate && endDate) {
        if (endDate > startDate) {
          setCanFetch(true);
        } else {
          setCanFetch(false);
        }
      } else {
        setCanFetch(true);
      }
    }
  }, [ticker, startDate, endDate]);

  return (
    <AppContext.Provider
      value={{
        ticker,
        setTicker,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        canFetch,
        setCanFetch,
        stockList,
        isPendingStockList,
        chart,
        chartIsPending,
        chartError,
        chartData,
        setChartData,
        fetchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
