import React from "react";
import { PropsWithChildren } from "react";
import MainHeader from "./header/MainHeader";
import Navigation from "./bottom/Navigation";

function HomePageLayout({ children }: PropsWithChildren) {
  return (
    <React.Fragment>
      <MainHeader title={"게시물 목록"} />
      {children}
      <Navigation />
    </React.Fragment>
  );
}
export default HomePageLayout;
