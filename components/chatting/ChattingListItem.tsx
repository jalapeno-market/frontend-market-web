import Router from "next/router";
import React from "react";
import styles from "./ChattingListItem.module.scss";
import Image from "next/image";

type ChattingListItemProps = {
  id: number;
  nickname: string;
  profile: string;
  lastMessage: string;
  lastUpdate: string;
};

const ChattingListItem = ({
  id,
  nickname,
  profile,
  lastMessage,
  lastUpdate,
}: ChattingListItemProps) => {
  const clickHandler = () => {
    Router.push(`/chatting/${id}`);
  };

  return (
    <div className={styles.box} onClick={clickHandler}>
      <Image
        src="/../public/image/profile.png"
        width="30"
        height="30"
        className={styles.profile}
        alt="프로필"
      />
      <div className={styles.right}>
        <div className={styles.up}>
          <div className={styles.nickname}>{nickname}</div>
          <div className={styles["last-update"]}>{lastUpdate}</div>
        </div>
        <div className={styles["last-message"]}>{lastMessage}</div>
      </div>
    </div>
  );
};

export default ChattingListItem;
