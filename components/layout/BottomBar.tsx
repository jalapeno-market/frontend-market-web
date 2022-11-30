import React from "react";
import { useRouter } from "next/router";
import ChattingInputBar from "./bottom/ChattingInputBar";
import Navigation from "./bottom/Navigation";

const BottomBar = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      {router.pathname === "/home" && <Navigation />}
      {router.pathname === "/chatting" && <Navigation />}
      {router.pathname === `/chatting/[room]` && <ChattingInputBar />}
    </React.Fragment>
  );
};

export default BottomBar;
