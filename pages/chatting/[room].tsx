import { useRouter } from "next/router";
import React, { useRef, useContext, useEffect, useState } from "react";
import { getChats } from "../../api/chatting";
import { makeWebSocket } from "../../api/websocket";
import ChattingRoom from "../../components/chatting/room/ChattingRoom";
import Container from "../../components/common/Container";
import ChattingInputBar from "../../components/layout/bottom/ChattingInputBar";
import ChattingRoomHeader from "../../components/layout/header/ChattingRoomHeader";
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
  const router = useRouter();
  const ws = useRef<WebSocket | null>(null);
  const [chatList, setChatList] = useState(chats);

  useEffect(() => {
    if (ws.current) {
      return;
    }

    ws.current = makeWebSocket(roomId, ctx.userId);

    ws.current.onmessage = async (e: any) => {
      console.log(e);
      const newchats = await getChats(roomId.toString());
      setChatList(newchats);
    };
  }, [ctx.userId, roomId]);

  const sendMessage = (message: string) => {
    if (!ws.current) {
      return;
    }

    ws.current.send(
      JSON.stringify({
        type: "TALK",
        roomId: roomId,
        senderUserId: ctx.userId,
        message: message,
      })
    );
  };

  return (
    <Container>
      <ChattingRoomHeader
        nickname={router.query.chatOp ? (router.query.chatOp as string) : ""}
      />
      <ChattingRoom roomId={roomId} chats={chatList} />
      <ChattingInputBar
        roomId={roomId}
        sendMessage={sendMessage}
        ws={ws.current}
      />
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

export default Room;
