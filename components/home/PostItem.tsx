import React from "react";
import styles from "./PostItem.module.scss";
import Image from "next/image";

type PostItemProps = {
  id: string;
  title: string;
  img: string;
  createdAt: string;
  price: string;
  status: string;
};

const PostItem = ({ title, img, createdAt, price, status }: PostItemProps) => {
  return (
    <div className={styles.box}>
      <div className={styles.left}>
        <Image
          className={styles.image}
          src={img}
          alt="사진"
          width="80"
          height="80"
        />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>{title}</div>
        <div className={styles.created}>{createdAt}</div>
        <div className={styles.price}>{price}원</div>
      </div>
    </div>
  );
};

export default PostItem;
