import ChatView from "./components/Chat/ChatView";
import MainView from "./components/MainView";
import Sidebar from "./components/Sidebar";
import Indicator from "./components/Indicator";

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[60%]">
        <div className="overflow-y-auto h-full">
          <MainView />
          <Indicator/>
        </div>
      </div>
      <div className="w-[20%]">
        <ChatView />
      </div>
    </div>
  );
}

export default App;
