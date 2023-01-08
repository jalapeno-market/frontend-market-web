import React from "react";
import type { ReactElement } from "react";
import ChattingPageLayout from "../../components/layout/ChattingPageLayout";
import ChattingList from "../../components/chatting/ChattingList";
import Container from "../../components/common/Container";
import { getChattingRooms } from "../../api/chatting";
import { chattingRoomDto } from "../../types/dto/chatting";

type ChattingPageProps = {
  rooms: Array<chattingRoomDto>;
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

  try {
    const rooms = await getChattingRooms(cookie);
    if (!rooms) {
      return { notFound: true };
    }
    return { props: { rooms } };
  } catch (e) {
    return { notFound: true };
  }
}

Chatting.getLayout = function getLayout(Chatting: ReactElement) {
  return <ChattingPageLayout>{Chatting}</ChattingPageLayout>;
};

export default Chatting;
