import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Divider } from "rsuite";
import Chart from "./Chart";

const MainView = () => {
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
        </PanelGroup>
      </div>
    </div>
  );
};

export default MainView;
