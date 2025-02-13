import { useAppContext } from "@src/hooks/useAppContext";
import React, { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import TrashIcon from "@rsuite/icons/Trash";

const InputBox = () => {
  const [chatInput, setChatInput] = useState<string>("");
  const { handleChat, setChatHistory } = useAppContext();

  const onEnterPress = async (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      await handleChat(chatInput);
      setChatInput("");
    }
  };

  return (
    <div>
      <div className="flex-grow flex py-1 justify-center text-[14px] ">
        <ReactTextareaAutosize
          value={chatInput}
          maxRows={4}
          onKeyDown={onEnterPress}
          className="w-full p-2 border border-gray-400 rounded-md max-h-[150px] min-h-[40px]"
          placeholder="Enter your prompt here"
          onChange={(e) => setChatInput(e.target.value)}
          draggable={false}
        />
        <button
          className="h-[40px] w-[40px] items-center justify-center flex ml-1"
          onClick={() => setChatHistory([])}
        >
          <TrashIcon
            style={{
              fontSize: 20,
              fontWeight: "lighter",
              color: "rgb(124 130 141)",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default InputBox;
