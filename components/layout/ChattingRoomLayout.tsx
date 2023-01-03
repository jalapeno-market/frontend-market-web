import React from "react";
import { PropsWithChildren } from "react";
import ChattingRoomHeader from "./header/ChattingRoomHeader";

function ChattingRoomLayout({ children }: PropsWithChildren) {
  return (
    <React.Fragment>
      <ChattingRoomHeader nickname="minji" scoville={33} />
      {children}
    </React.Fragment>
  );
}

export default ChattingRoomLayout;
