import React from "react";
import { PropsWithChildren } from "react";
import ChattingRoomHeader from "./header/ChattingRoomHeader";
import ChattingInputBar from "./bottom/ChattingInputBar";

function ChattingRoomLayout({ children }: PropsWithChildren) {
  return (
    <React.Fragment>
      <ChattingRoomHeader nickname="minji" scoville={33} />
      {children}
      <ChattingInputBar />
    </React.Fragment>
  );
}

export default ChattingRoomLayout;
