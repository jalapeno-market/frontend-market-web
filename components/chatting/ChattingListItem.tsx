import Router from "next/router";
import React, { useLayoutEffect, useState } from "react";
import styles from "./ChattingListItem.module.scss";
import Image from "next/image";
import { getChats } from "../../api/chatting";
import { getTimeDiff } from "../../utils/getTimeDiff";

type ChattingListItemProps = {
  id: number;
  postId: number;
  nickname: string;
  profile: string;
};

const ChattingListItem = ({
  id,
  postId,
  nickname,
  profile,
}: ChattingListItemProps) => {
  const [lastMessage, setLastMessage] = useState("");
  const [lastUpdate, setLastUpdate] = useState("");
  const clickHandler = () => {
    Router.push({
      pathname: `/chatting/${id}`,
      query: { postId: postId, chatOp: nickname },
    });
  };

  useLayoutEffect(() => {
    getChats(id.toString()).then((data) => {
      if (data[data.length - 1].contents) {
        setLastMessage(data[data.length - 1].contents);
        setLastUpdate(getTimeDiff(data[data.length - 1].updatedAt));
      }
    });
  }, [id]);

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
