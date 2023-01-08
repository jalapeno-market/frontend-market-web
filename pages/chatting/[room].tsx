import { useRouter } from "next/router";
import React, { useRef, useContext, useEffect, useState } from "react";
import { getChats } from "../../api/chatting";
import { getPostDetail } from "../../api/post";
import { makeWebSocket } from "../../api/websocket";
import ChattingRoom from "../../components/chatting/room/ChattingRoom";
import ChattingRoomInfo from "../../components/chatting/room/ChattingRoomInfo";
import ChattingInputBar from "../../components/layout/bottom/ChattingInputBar";
import ChattingRoomHeader from "../../components/layout/header/ChattingRoomHeader";
import AuthContext from "../../store/AuthContext";
import { chatDto } from "../../types/dto/chatting";
import { postDetailDto } from "../../types/dto/post";

type RoomProps = {
  roomId: number;
  chats: Array<chatDto>;
  postInfo: postDetailDto;
};

const Room = ({ roomId, chats, postInfo }: RoomProps) => {
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
    <>
      <ChattingRoomHeader
        nickname={router.query.chatOp ? (router.query.chatOp as string) : ""}
      />
      <ChattingRoomInfo info={postInfo} />
      <ChattingRoom roomId={roomId} chats={chatList} />
      <ChattingInputBar
        roomId={roomId}
        sendMessage={sendMessage}
        ws={ws.current}
      />
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  let { cookie } = context.req.headers;
  cookie = cookie ? cookie : "";
  const roomId = context.query.room;
  const chats = await getChats(roomId, cookie);

  const postId = context.query.postId;
  const postInfo = await getPostDetail(postId, cookie);

  return {
    props: { roomId, chats, postInfo },
  };
};

export default Room;
