import React from "react";
import styles from "./ChattingRoomHeader.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";

import arrowIcon from "../../../public/image/chatting/iconmonstr-angel-left-thin.svg";
import hamburgerIcon from "../../../public/image/chatting/iconmonstr-menu-dot-vertical-lined.svg";

type ChattingRoomHeaderProps = {
  nickname: string;
  scoville: number;
};

const ChattingRoomHeader = ({
  nickname,
  scoville,
}: ChattingRoomHeaderProps) => {
  const router = useRouter();
  const clickBackButtonHandler = () => {
    router.push("/chatting");
  };
  return (
    <header className={styles.box}>
      <Image
        src={arrowIcon}
        width="15"
        height="15"
        alt="back"
        className={styles["back-btn"]}
        onClick={clickBackButtonHandler}
      />
      <div className={styles["title"]}>{nickname}</div>
      <Image
        src={hamburgerIcon}
        width="20"
        height="20"
        alt="menu"
        className={styles["menu-btn"]}
      />
    </header>
  );
};

export default ChattingRoomHeader;
