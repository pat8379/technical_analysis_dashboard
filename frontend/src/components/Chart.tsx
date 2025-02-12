import { useAppContext } from "@src/hooks/useAppContext";
import React, { useEffect } from "react";
import { IgrFinancialChart } from "igniteui-react-charts";
import { IgrFinancialChartModule } from "igniteui-react-charts";
// import { useEffect, useState } from "react";
// import StocksHistory from "./data";
IgrFinancialChartModule.register();

const Chart = () => {
  const { ticker, chartData, findNameFromStockList, printRef } =
    useAppContext();

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
