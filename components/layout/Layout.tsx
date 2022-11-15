import React, { Children, PropsWithChildren } from "react";
import Navigation from "./Navigation";
import Header from "./Header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Navigation />
    </React.Fragment>
  );
}
