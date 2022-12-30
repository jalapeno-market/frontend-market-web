import React from "react";
import styles from "./NewPostHeader.module.scss";
import { useRouter } from "next/router";

type NewPostHeaderProps = {
  addPost: React.FormEventHandler;
};
const NewPostHeader = ({ addPost }: NewPostHeaderProps) => {
  const router = useRouter();
  const clickCancelHandler = () => {
    router.push("/home");
  };

  const clickCompleteHandler = (e: React.MouseEvent) => {
    addPost(e);
  };

  return (
    <header className={styles["header-box"]}>
      <button onClick={clickCancelHandler} className={styles["cancel-btn"]}>
        X
      </button>
      중고거래 글쓰기
      <button onClick={clickCompleteHandler} className={styles["complete-btn"]}>
        완료
      </button>
    </header>
  );
};

export default NewPostHeader;
