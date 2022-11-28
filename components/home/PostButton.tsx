import React from "react";
import plusIcon from "../../public/image/plus.svg";
import Image from "next/image";
import styles from "./PostButton.module.scss";

const PostButton = () => {
  return (
    <Image
      src={plusIcon}
      alt="게시물 추가"
      width={80}
      height={120}
      className={styles.icon}
    />
  );
};

export default PostButton;
