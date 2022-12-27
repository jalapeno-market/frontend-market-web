import React from "react";
import { PropsWithChildren } from "react";
import MainHeader from "./header/MainHeader";
import Navigation from "./bottom/Navigation";

function ChattingPageLayout({ children }: PropsWithChildren) {
  return (
    <React.Fragment>
      <MainHeader title={"채팅 목록"} />
      {children}
      <Navigation />
    </React.Fragment>
  );
}

export default ChattingPageLayout;
