import { useAppContext } from "@src/hooks/useAppContext";
import React from "react";
import { Toggle } from "rsuite";
import ChatBox from "./ChatBox";
import InputBox from "./InputBox";

const ChatView = () => {
  const { setChatMode } = useAppContext();
  return (
    <div className="bg-gray-200 h-full p-4">
      <div className="flex flex-col gap-4 h-full overflow-y-auto">
        <div className="flex justify-between mt-10 items-center">
          <h2 className="font-bold text-lg">AI Assistant</h2>
          <Toggle
            size="md"
            checkedChildren="Chat"
            unCheckedChildren="Image"
            defaultChecked
            onChange={setChatMode}
          />
        </div>
        <div className="h-[calc(100%-150px)] rounded-md">
          <ChatBox />
        </div>
        <InputBox />
      </div>
    </div>
  );
};

export default ChatView;
