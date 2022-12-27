import type { ReactElement } from "react";
import ChattingPageLayout from "../../components/layout/ChattingPageLayout";
import type { NextPageWithLayout } from "../_app";
import ChattingList from "../../components/chatting/ChattingList";
import Container from "../../components/common/Container";
import React from "react";

const Chatting: NextPageWithLayout = () => {
  return (
    <Container>
      <ChattingList />
    </Container>
  );
};

Chatting.getLayout = function getLayout(Chatting: ReactElement) {
  return <ChattingPageLayout>{Chatting}</ChattingPageLayout>;
};

export default Chatting;
