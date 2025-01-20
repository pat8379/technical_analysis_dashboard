import { useAppContext } from "@src/hooks/useAppContext";
import React from "react";
import { DatePicker, AutoComplete, Button, InputPicker } from "rsuite";

const Sidebar = () => {
  const { setStartDate, setEndDate, canFetch, ticker, setTicker, fetchData } =
    useAppContext();

  return (
    <div className="bg-gray-200 h-full">
      <div className="p-4 h-full flex flex-col gap-4">
        <h2 className="font-bold text-lg mt-10">Configuration</h2>
        <div className="flex flex-col gap-4 mb-4">
          <div>
            <p className="mb-1">Stock Ticker</p>
            <InputPicker
              data={[{ label: "ed", value: "ed" }]}
              value={ticker}
              onChange={(value) => setTicker(value)}
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <p className="mb-1">Start Date</p>
            <DatePicker
              oneTap
              onChange={(e) => setStartDate(e)}
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <p className="mb-1">End Date</p>
            <DatePicker
              oneTap
              onChange={(e) => setEndDate(e)}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <Button appearance="ghost" disabled={!canFetch} onClick={fetchData}>
          Fetch
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
