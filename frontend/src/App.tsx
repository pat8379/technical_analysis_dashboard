import { useState } from "react";
import MainView from "./components/MainView";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="flex-grow">
        <MainView />
      </div>
    </div>
  );
}

export default App;
