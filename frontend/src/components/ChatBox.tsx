import { useAppContext } from "@src/hooks/useAppContext";
import React from "react";
import { Loader } from "rsuite";

const ChatBox = () => {
  const { answer, chatIsPending, chatError } = useAppContext();
  return (
    <div className="w-full max-w-[800px] px-5 max-h-[350px] overflow-y-auto mt-2">
      {chatIsPending ? <Loader /> : answer}
    </div>
  );
};

export default ChatBox;
