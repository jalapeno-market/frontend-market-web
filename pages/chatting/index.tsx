import React from "react";
import type { ReactElement } from "react";
import ChattingPageLayout from "../../components/layout/ChattingPageLayout";
import ChattingList from "../../components/chatting/ChattingList";
import Container from "../../components/common/Container";
import { getChattingRooms } from "../../api/chatting";

type ChattingPageProps = {
  rooms: Array<{
    id: number;
    buyer: {
      id: number;
      userId: string;
      password: string;
      nickname: string;
    };
    seller: {
      id: number;
      userId: string;
      password: string;
      nickname: string;
    };
    post: {
      id: number;
      title: string;
      contents: string;
      image: string | null;
      createdAt: string;
      updatedAt: string;
      member: {
        id: number;
        userId: string;
        password: string;
        nickname: string;
      };
      price: string | null;
      status: string | null;
    };
  }>;
};

function Chatting({ rooms }: ChattingPageProps) {
  return (
    <Container>
      <ChattingList ChattingListItems={rooms} />
    </Container>
  );
}

export async function getServerSideProps(context: any) {
  let { cookie } = context.req.headers;
  cookie = cookie ? cookie : "";
  const rooms = await getChattingRooms(cookie);

  return { props: { rooms } };
}

Chatting.getLayout = function getLayout(Chatting: ReactElement) {
  return <ChattingPageLayout>{Chatting}</ChattingPageLayout>;
};

export default Chatting;
