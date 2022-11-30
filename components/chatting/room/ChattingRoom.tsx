import MessageBox from "./MessageBox";
import styles from "./ChattingRoom.module.scss";

const ChattingRoom = () => {
  const messages = [
    <MessageBox content="안녕하세용용" type="receive" />,
    <MessageBox content="ㅎㅇㅎㅇ" type="send" />,
    <MessageBox content="내이름은 김민지김민지김민지김민지" type="send" />,
    <MessageBox content="안녕하세용용" type="receive" />,
  ];
  return <div className={styles.room}>{messages}</div>;
};

export default ChattingRoom;
