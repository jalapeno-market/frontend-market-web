import MessageBox from "./MessageBox";
import styles from "./ChattingRoom.module.scss";
import { useContext } from "react";
import AuthContext from "../../../store/AuthContext";
import { chatDto } from "../../../types/dto/chatting";

type ChattingRoomProps = {
  roomId: number;
  chats: Array<chatDto>;
};

const ChattingRoom = ({ roomId, chats }: ChattingRoomProps) => {
  const ctx = useContext(AuthContext);

  const messages = chats.map((chat: chatDto) => (
    <MessageBox
      key={chat.id}
      content={chat.contents}
      type={chat.sender.userId === ctx.userId ? "send" : ""}
    />
  ));

  return <div className={styles.room}>{messages}</div>;
};

export default ChattingRoom;
