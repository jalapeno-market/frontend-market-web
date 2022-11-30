import React from "react";
import plusIcon from "../../public/image/plus.svg";
import Image from "next/image";
import styles from "./PostButton.module.scss";
import { useRouter } from "next/router";

const PostButton = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/new-post");
  };

  return (
    <div onClick={clickHandler}>
      <Image
        src={plusIcon}
        alt="게시물 추가"
        width={80}
        height={120}
        className={styles.icon}
      />
    </div>
  );
};

export default PostButton;
