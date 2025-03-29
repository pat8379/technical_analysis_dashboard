import React from "react";
import { Button, InputPicker, Loader } from "rsuite";
import { useAppContext } from "@src/hooks/useAppContext";
import { indicatorList } from "@src/utils/enums";
import { IndicatorTable } from "./IndicatorTable";
import ReactMarkdown from "react-markdown";

const Indicator = () => {
  const {
    indicator,
    setIndicator,
    indicatorResponse,
    fetchStockIndicatorData,
    stockIndicatorIsPending,
    indicatorTableData,
  } = useAppContext();

  return (
    <div className="p-4">
      <h2 className="font-bold text-lg mt-6">Stock Indicator Analysis</h2>
      <div className="h-[50vh]">
        <p className="mb-1">Indicator</p>
        <div className="flex gap-4">
          <InputPicker
            data={indicatorList || [{ label: "", value: "" }]}
            value={indicator}
            onChange={(value) => setIndicator(value)}
            style={{ width: "100%" }}
          />
          <Button
            appearance="ghost"
            disabled={!indicator}
            onClick={fetchStockIndicatorData}
          >
            Summarize
          </Button>
        </div>

        {stockIndicatorIsPending ? (
          <Loader style={{ marginTop: 10 }} color="success" />
        ) : indicatorResponse ? (
          <div>
            {indicatorTableData && (
              <IndicatorTable data={indicatorTableData} />
            )}
            <div className="mt-3 whitespace-pre-line pb-3">
            <ReactMarkdown>{indicatorResponse}</ReactMarkdown>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Indicator;
