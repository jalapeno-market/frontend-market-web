import React, { useEffect } from "react";
import styles from "./ChattingInputBar.module.scss";

const ChattingInputBar = () => {
  const sendMessage = () => {};

  return (
    <div className={styles.box}>
      <button className={styles["plus-btn"]}></button>
      <input type="text" className={styles.input} />
      <button className={styles["send-btn"]} onClick={sendMessage}></button>
    </div>
  );
};

export default ChattingInputBar;
