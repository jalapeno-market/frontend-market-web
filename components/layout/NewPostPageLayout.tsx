import React, { PropsWithChildren } from "react";
import NewPostHeader from "./header/NewPostHeader";

function NewPagePostLayout({ children }: PropsWithChildren) {
  return (
    <React.Fragment>
      <NewPostHeader />
      {children}
    </React.Fragment>
  );
}

export default NewPagePostLayout;
