import React from 'react';
import styles from './ChattingInputBar.module.scss';

const ChattingInputBar = () => {
  return (
    <div className={styles.box}>
      <button className={styles['plus-btn']}></button>
      <input type="text" className={styles.input} />
      <button className={styles['send-btn']}></button>
    </div>
  );
};

export default ChattingInputBar;
