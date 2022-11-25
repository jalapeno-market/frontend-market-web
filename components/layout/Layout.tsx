import React, { PropsWithChildren } from "react";
import BottomBar from "./BottomBar";
import Header from "./Header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <BottomBar />
    </React.Fragment>
  );
}
