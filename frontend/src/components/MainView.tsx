import React from "react";
import Chart from "./Chart";

const MainView = () => {
  return (
    <div className="p-4 h-full">
      <div className="h-full flex flex-col gap-4">
        <h2 className="font-bold text-lg mt-10">
          AI Technical Analysis Dashboard
        </h2>
        <Chart />
      </div>
    </div>
  );
};

export default MainView;
