import MessageBox from './MessageBox';
import styles from './ChattingRoom.module.scss';

const ChattingRoom = () => {
  const messages = [
    <MessageBox content="안녕하세용용" type="receive" key={0} />,
    <MessageBox content="ㅎㅇㅎㅇ" type="send" key={1} />,
    <MessageBox
      content="내이름은 김민지김민지김민지김민지"
      type="send"
      key={2}
    />,
    <MessageBox content="안녕하세용용" type="receive" key={3} />,
  ];
  return <div className={styles.room}>{messages}</div>;
};

export default ChattingRoom;
