import React, { useContext, useEffect, useRef } from "react";
import AuthContext from "../../../store/AuthContext";
import styles from "./ChattingInputBar.module.scss";

type ChattingInputBarProps = {
  roomId: number;
  ws: WebSocket | null;
  sendMessage: (message: string) => void;
};

const ChattingInputBar = ({
  ws,
  roomId,
  sendMessage,
}: ChattingInputBarProps) => {
  const ctx = useContext(AuthContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const clickSendButtonHandler = () => {
    if (!inputRef.current || !inputRef.current.value) {
      return;
    }
    sendMessage(inputRef.current?.value);
    inputRef.current.value = "";
  };

  useEffect(() => {
    return () => {
      if (!ws) {
        return;
      }
      ws.close();
    };
  }, [ws]);

  return (
    <div className={styles.box}>
      <button className={styles["plus-btn"]}></button>
      <input type="text" className={styles.input} ref={inputRef} />
      <button
        className={styles["send-btn"]}
        onClick={clickSendButtonHandler}
      ></button>
    </div>
  );
};

export default ChattingInputBar;
