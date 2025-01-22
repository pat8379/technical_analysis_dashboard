import { useAppContext } from "@src/hooks/useAppContext";
import { IgrFinancialChart } from "igniteui-react-charts";
import { IgrFinancialChartModule } from "igniteui-react-charts";
// import { useEffect, useState } from "react";
// import StocksHistory from "./data";
IgrFinancialChartModule.register();

const Chart = () => {
  const { ticker, chartData } = useAppContext();
  
  return (
    <div className="">
      <div className="" style={{ height: "calc(100% - 25px)" }}>
        <IgrFinancialChart
          width="100%"
          height="400px"
          chartType="Line"
          thickness={2}
          chartTitle={ticker || "empty"}
          // subtitle="Between 2013 and 2017"
          yAxisMode="Numeric"
          yAxisTitle="Price"
          dataSource={chartData}
        />
      </div>
    </div>
  );
};

export default Chart;
