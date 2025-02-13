import React from "react";
import ChatBox from "./ChatBox";
import InputBox from "./InputBox";

const ChatView = () => {
  return (
    <div className="bg-gray-200 h-full p-4">
      <div className="flex flex-col gap-4 h-full overflow-y-auto">
        <h2 className="font-bold text-lg mt-10">AI Assistant</h2>
        <div className="h-[calc(100%-150px)] rounded-md">
          <ChatBox />
        </div>
        <InputBox />
      </div>
    </div>
  );
};

export default ChatView;
