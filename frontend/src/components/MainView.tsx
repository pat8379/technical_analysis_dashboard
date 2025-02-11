import { useAppContext } from "@src/hooks/useAppContext";
import React from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Divider, Button } from "rsuite";
import Chart from "./Chart";

const MainView = () => {
  const { setTakeImg } = useAppContext();
  return (
    <div className="p-4 h-full">
      <div className="h-full flex flex-col gap-4">
        <h2 className="font-bold text-lg mt-10">
          AI Technical Analysis Dashboard
        </h2>
        <PanelGroup direction="vertical">
          <Panel maxSize={100} defaultSize={90}>
            <Chart />
          </Panel>
          <PanelResizeHandle>
            <Divider />
          </PanelResizeHandle>
          <Panel maxSize={75}>
            <Button onClick={() => setTakeImg(true)}>Analyze Image</Button>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};

export default MainView;
