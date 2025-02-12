import { ReactNode, useEffect, useRef, useState } from "react";
import { AppContext } from "@hooks/useAppContext";
import { useMutation } from "@tanstack/react-query";
import { chartPrompt } from "./mutations/useChart";
import { useStockList } from "./queries/useStockList";
import { chatPrompt } from "./mutations/useChat";
import html2canvas from "html2canvas";

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [ticker, setTicker] = useState<string>("AAPL");
  const [tempTicker, setTempTicker] = useState<string>("AAPL");
  const [tickerName, setTickerName] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [answer, setAnswer] = useState<string>("");
  const [imageData, setImageData] = useState<string>();

  const printRef = useRef();

  const [canFetch, setCanFetch] = useState(false);

  const [chartData, setChartData] = useState<any[]>([]);
  const [takeImg, setTakeImg] = useState(false);

  const { data: stockList, isPending: isPendingStockList } = useStockList();

  const chartPromptMutation = useMutation({
    mutationFn: chartPrompt,
    onSuccess: (data) => {
      const convertedArray = data.map((item) => {
        return {
          ...item, // Spread existing properties
          date: new Date(item.date), // Create a new Date object
        };
      });

      setChartData(convertedArray);
    },
  });

  const {
    mutate: chart,
    isPending: chartIsPending,
    error: chartError,
  } = chartPromptMutation;

  const fetchData = () => {
    chart({
      ticker: tempTicker,
      start_date: startDate,
      end_date: endDate,
    });
    setTicker(tempTicker);
  };

  const findNameFromStockList = () => {
    if (stockList && ticker) {
      const item = stockList.find((obj) => obj.value === ticker);
      return item ? item.label : "";
    }
  };

  const chatPromptMutation = useMutation({
    mutationFn: chatPrompt,
    onSuccess: (data) => {
      if (data && data?.response) {
        setAnswer(data.response);
      }
    },
  });

  const {
    mutate: chat,
    isPending: chatIsPending,
    error: chatError,
  } = chatPromptMutation;

  const handleChat = (chatInput) => {
    handleDownloadImage(printRef);

    chat({ message: chatInput, file: imageData });
    // chat({ message: chatInput, file: data });
  };

  const handleDownloadImage = async (printRef) => {
    const element = printRef?.current;
    // @ts-ignore
    const canvas = await html2canvas(element);

    const canvasData = canvas.toDataURL("image/jpg");
    // console.log(data);
    setImageData(canvasData);
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
        tickerName,
        setTickerName,
        findNameFromStockList,
        tempTicker,
        setTempTicker,
        takeImg,
        setTakeImg,
        answer,
        setAnswer,
        chat,
        chatIsPending,
        chatError,
        handleDownloadImage,
        printRef,
        handleChat,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
