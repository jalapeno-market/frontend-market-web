import React from "react";
import styles from "./PostDetail.module.scss";
import Image from "next/image";
import { getTimeDiff } from "../../utils/getTimeDiff";

type PostDetailProps = {
  postInfo: {
    id: string;
    title: string;
    contents: string;
    image: {
      img1: string;
      img2: string | null;
      img3: string | null;
    };
    createdAt: string;
    updatedAt: string | null;
    userId: string;
    nickname: string;
    price: string;
    status: string;
  };
};

const PostDetail = ({ postInfo }: PostDetailProps) => {
  return (
    <div className={styles.container}>
      <div className={styles["image"]}>
        <Image fill={true} alt="제품사진" src={`${postInfo.image.img1}`} />
      </div>
      <div className={styles["user-box"]}>
        <Image
          className={styles["user-profile"]}
          src="/../public/image/profile.png"
          alt="프로필"
          width="60"
          height="60"
        />

        <div className={styles["user-nickname"]}>{postInfo.nickname}</div>
      </div>
      <div className={styles["content-box"]}>
        <div className={styles["content-title"]}>{postInfo.title}</div>
        <div className={styles["content-updatedAt"]}>
          {getTimeDiff(postInfo.createdAt)}
        </div>
        <div className={styles["content-content"]}>{postInfo.contents}</div>
      </div>
    </div>
  );
};

export default PostDetail;
