import React, { useContext } from "react";
import styles from "./PostDetail.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { getTimeDiff } from "../../utils/getTimeDiff";
import deleteIcon from "../../public/image/postDetail/delete.png";
import returnIcon from "../../public/image/postDetail/return.png";
import AuthContext from "../../store/AuthContext";
import { deletePost } from "../../api/post";
import { postDetailDto } from "../../types/dto/post";

type PostDetailProps = {
  postInfo: postDetailDto;
};

const PostDetail = ({ postInfo }: PostDetailProps) => {
  const router = useRouter();
  const ctx = useContext(AuthContext);

  const backButtonClickHandler = () => {
    router.back();
  };
  const deleteButtonHandler = async () => {
    await deletePost(postInfo.id.toString());
    alert("삭제되었습니다.");
    router.push("/home");
  };

  return (
    <div className={styles.container}>
      {ctx.userId === postInfo.userId && (
        <div className={styles["delete-btn"]} onClick={deleteButtonHandler}>
          <Image src={deleteIcon} alt="delete" fill={true} />
        </div>
      )}
      <div className={styles["back-btn"]} onClick={backButtonClickHandler}>
        <Image src={returnIcon} alt="back" fill={true} />
      </div>
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
