import React from 'react';
import styles from './ChattingRoomHeader.module.scss';
import { useRouter } from 'next/router';

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
    router.push('/chatting');
  };
  return (
    <header className={styles.box}>
      <div className={styles['back-btn-space']}></div>
      <div className={styles['title']}>
        <button className={styles['back-btn']} onClick={clickBackButtonHandler}>
          &lt;
        </button>
        {nickname}
        <button className={styles['menu-btn']}>menu</button>
      </div>

      <div className={styles['menu-btn-space']}></div>
    </header>
  );
};

export default ChattingRoomHeader;
