import MessageBox from "./MessageBox";
import styles from "./ChattingRoom.module.scss";
import { getChats } from "../../../api/chatting";
import { useContext } from "react";
import AuthContext from "../../../store/AuthContext";

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

type ChattingRoomProps = {
  roomId: string;
  chats: Array<Chatting>;
};

const ChattingRoom = ({ roomId, chats }: ChattingRoomProps) => {
  const ctx = useContext(AuthContext);

  const messages = chats.map((chat: Chatting) => (
    <MessageBox
      key={chat.id}
      content={chat.contents}
      type={chat.sender.userId === ctx.userId ? "send" : ""}
    />
  ));
  // const messages = <MessageBox content="dx" type="send" />;

  return <div className={styles.room}>{messages}</div>;
};

export default ChattingRoom;
