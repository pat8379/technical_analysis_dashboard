import { useAppContext } from "@src/hooks/useAppContext";
import React, { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

const InputBox = () => {
  const [chatInput, setChatInput] = useState<string>("");
  const { handleChat } = useAppContext();

  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      handleChat(chatInput);
    }
  };

  return (
    <div>
      <div className="flex-grow flex py-1 pr-1 pl-[20px] items-center justify-center text-[14px]">
        <ReactTextareaAutosize
          value={chatInput}
          maxRows={4}
          onKeyDown={onEnterPress}
          className="w-full p-2 border border-gray-400 rounded-md"
          placeholder="Enter your prompt here"
          onChange={(e) => setChatInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputBox;
