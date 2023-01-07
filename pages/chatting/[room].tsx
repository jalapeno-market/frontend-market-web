import React, { ReactElement, useContext, useEffect, useState } from "react";
import { getChats } from "../../api/chatting";
import ChattingRoom from "../../components/chatting/room/ChattingRoom";
import Container from "../../components/common/Container";
import ChattingInputBar from "../../components/layout/bottom/ChattingInputBar";
import ChattingRoomLayout from "../../components/layout/ChattingRoomLayout";
import AuthContext from "../../store/AuthContext";

type Chatting = {
  id: number;
  contents: string;
  createdAt: string;
  updatedAt: string;
  chattingRoom: {
    id: number;
    buyer: {
      id: string;
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
      image: null;
      createdAt: string;
      updatedAt: string;
      member: {
        id: number;
        userId: string;
        password: string;
        nickname: string;
      };
      price: null;
      status: null;
    };
  };
  sender: {
    id: number;
    userId: string;
    password: string;
    nickname: string;
  };
  receiver: {
    id: number;
    userId: string;
    password: string;
    nickname: string;
  };
};
type RoomProps = {
  roomId: number;
  chats: Array<Chatting>;
};

const Room = ({ roomId, chats }: RoomProps) => {
  const ctx = useContext(AuthContext);
  const ws = new WebSocket(`${process.env.WEBSOCKET}`);
  const [chatList, setChatList] = useState(chats);

  ws.onopen = () => {
    ws.send(
      JSON.stringify({
        type: "ENTER",
        roomId: roomId,
        senderUserId: ctx.userId,
        message: "",
      })
    );
  };

  ws.onmessage = async (e) => {
    console.log(e);
    const newchats = await getChats(roomId.toString());
    setChatList(newchats);
  };

  return (
    <Container>
      <ChattingRoom roomId={roomId} chats={chatList} />
      <ChattingInputBar roomId={roomId} ws={ws} />
    </Container>
  );
};

export const getServerSideProps = async (context: any) => {
  let { cookie } = context.req.headers;
  cookie = cookie ? cookie : "";
  const roomId = context.query.room;
  const chats = await getChats(roomId, cookie);

  return {
    props: { roomId, chats },
  };
};

Room.getLayout = function getLayout(Room: ReactElement) {
  return <ChattingRoomLayout>{Room}</ChattingRoomLayout>;
};

export default Room;
