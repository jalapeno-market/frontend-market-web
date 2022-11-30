import Router from 'next/router';
import React from 'react';
import styles from './ChattingListItem.module.scss';

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
      <img
        className={styles.profile}
        src="https://w.namu.la/s/095dabcb5eb0e001d72d93293d13bdec974e813dd8426af3b8f1ef40aafd18bf3c12ada7e6da70829df7aa438d7854ce663ba64c14b81f4d991e317207340192f4433455dcaa20fd6aa508344a65be3ec8f06b2448a59912fcbf6fcd75275199"
        alt="profile image"
      />
      <div className={styles.right}>
        <div className={styles.up}>
          <div className={styles.nickname}>{nickname}</div>
          <div className={styles['last-update']}>{lastUpdate}</div>
        </div>
        <div className={styles['last-message']}>{lastMessage}</div>
      </div>
    </div>
  );
};

export default ChattingListItem;
