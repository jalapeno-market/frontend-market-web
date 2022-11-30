import React from 'react';
import styles from './NewPostHeader.module.scss';

const NewPostHeader = () => {
  const clickCancelHandler = () => {};
  const clickCompleteHandler = () => {};
  return (
    <header className={styles['header-box']}>
      <button onClick={clickCancelHandler} className={styles['cancel-btn']}>
        X
      </button>
      중고거래 글쓰기
      <button onClick={clickCompleteHandler} className={styles['complete-btn']}>
        완료
      </button>
    </header>
  );
};

export default NewPostHeader;
