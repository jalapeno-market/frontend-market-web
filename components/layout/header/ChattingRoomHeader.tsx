import React, { useState } from "react";
import styles from "./ChattingRoomHeader.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";

import arrowIcon from "../../../public/image/chatting/iconmonstr-angel-left-thin.svg";
import hamburgerIcon from "../../../public/image/chatting/iconmonstr-menu-dot-vertical-lined.svg";
import { deleteChattingRoom } from "../../../api/chatting";

type ChattingRoomHeaderProps = {
  nickname: string;
};

const ChattingRoomHeader = ({ nickname }: ChattingRoomHeaderProps) => {
  const router = useRouter();
  const [menuVisibility, setMenuVisibility] = useState(false);
  const clickBackButtonHandler = () => {
    router.push("/chatting");
  };
  const clickMenuButtonHandler = () => {
    setMenuVisibility(true);
  };
  const clickDeleteMenu = async () => {
    await deleteChattingRoom(router.query.room as string);
    setMenuVisibility(false);
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
        onClick={clickMenuButtonHandler}
      />
      {menuVisibility && <div className={styles["layer"]}></div>}
      {menuVisibility && (
        <div className={styles["menu"]}>
          <div className={styles["menu-item"]} onClick={clickDeleteMenu}>
            채팅방 나가기
          </div>
          <div
            className={styles["menu-item"]}
            onClick={() => {
              setMenuVisibility(false);
            }}
          >
            취소
          </div>
        </div>
      )}
    </header>
  );
};

export default ChattingRoomHeader;
