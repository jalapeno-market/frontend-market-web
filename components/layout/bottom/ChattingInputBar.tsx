import React, { useContext, useEffect, useRef } from "react";
import AuthContext from "../../../store/AuthContext";
import styles from "./ChattingInputBar.module.scss";

type ChattingInputBarProps = {
  roomId: number;
  ws: WebSocket;
};

const ChattingInputBar = ({ roomId, ws }: ChattingInputBarProps) => {
  const ctx = useContext(AuthContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = () => {
    if (!inputRef.current || !inputRef.current.value) {
      return;
    }

    ws.send(
      JSON.stringify({
        type: "TALK",
        roomId: roomId,
        senderUserId: ctx.userId,
        message: inputRef.current?.value,
      })
    );
  };

  useEffect(() => {
    return () => {
      ws.close();
    };
  }, [ws]);

  return (
    <div className={styles.box}>
      <button className={styles["plus-btn"]}></button>
      <input type="text" className={styles.input} ref={inputRef} />
      <button className={styles["send-btn"]} onClick={sendMessage}></button>
    </div>
  );
};

export default ChattingInputBar;
