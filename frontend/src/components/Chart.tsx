import { useAppContext } from "@src/hooks/useAppContext";
import React, { useEffect } from "react";
import { IgrFinancialChart } from "igniteui-react-charts";
import { IgrFinancialChartModule } from "igniteui-react-charts";
import html2canvas from "html2canvas";
// import { useEffect, useState } from "react";
// import StocksHistory from "./data";
IgrFinancialChartModule.register();

const Chart = () => {
  const { ticker, chartData, findNameFromStockList, takeImg } = useAppContext();

  const printRef = React.useRef();

  const handleDownloadImage = async (printRef) => {
    const element = printRef?.current;
    console.log(element);
    // @ts-ignore
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
  useEffect(() => {
    if (takeImg) {
      handleDownloadImage(printRef);
    }
  }, [takeImg]);

  return (
    <div className=" h-[100%]" ref={printRef}>
      <IgrFinancialChart
        width="100%"
        height="100%"
        chartType="Line"
        thickness={2}
        chartTitle={ticker || "empty"}
        subtitle={findNameFromStockList()}
        yAxisMode="Numeric"
        yAxisTitle="Price"
        dataSource={chartData}
      />
    </div>
  );
};

export default Chart;
