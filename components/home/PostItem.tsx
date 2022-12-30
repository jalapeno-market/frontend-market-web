import React from "react";
import styles from "./PostItem.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { getTimeDiff } from "../../utils/getTimeDiff";

type PostItemProps = {
  id: string;
  title: string;
  img: string;
  createdAt: string;
  price: string;
  status: string;
};

const PostItem = ({
  id,
  title,
  img,
  createdAt,
  price,
  status,
}: PostItemProps) => {
  const router = useRouter();
  const clickHandler = () => {
    router.push(`/home/${id}`);
  };
  return (
    <div className={styles.box} onClick={clickHandler}>
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
        <div className={styles.created}>{getTimeDiff(createdAt)}</div>
        <div className={styles.price}>{price}원</div>
      </div>
    </div>
  );
};

export default PostItem;
