import { useAppContext } from "@src/hooks/useAppContext";
import React, { useEffect, useRef } from "react";
import { Loader } from "rsuite";

const ChatBox = () => {
  const { chatIsPending, chatHistory } = useAppContext();
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);
  return (
    <div className="w-full h-full bg-white overflow-y-auto flex-col-reverse p-2 rounded-md">
      <div className=" flex mb-2">
        <div className="flex flex-col gap-0 items-start">
          <p className="text-[12px] mb-[-5px]">Assistant</p>
          <p
            className="rounded-md p-2"
            style={{
              background: "rgb(229 231 235)",
            }}
          >
            Hi User, Let me know how I can help you by creating your own prompt
            or starting with a scenario template
          </p>
        </div>
      </div>
      {chatHistory.map((messageBox, index) => (
        <div
          className=" flex mb-2"
          style={{
            justifyContent: messageBox.role === "assistant" ? "" : "end",
          }}
        >
          <div className="flex flex-col gap-0 items-start">
            <p className="text-[12px] mb-[-5px]">
              {messageBox.role === "assistant" ? "Assistant" : "User"}
            </p>
            <p
              className="rounded-md p-2"
              style={{
                background:
                  messageBox.role === "assistant"
                    ? "rgb(229 231 235)"
                    : "rgb(139 194 255)",
              }}
            >
              {messageBox.content}
            </p>
          </div>
        </div>
      ))}
      {chatIsPending && <Loader color="success" />}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatBox;
