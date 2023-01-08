import styles from "./ChattingRoomInfo.module.scss";
import Image from "next/image";

type ChattingRoomInfoProps = {
  info: {
    id: number;
    title: string;
    contents: string;
    image: {
      img1: string;
      img2: null;
      img3: null;
    };
    createdAt: string;
    updatedAt: null;
    userId: string;
    nickname: string;
    price: string;
    status: string;
  };
};

function ChattingRoomInfo({ info }: ChattingRoomInfoProps) {
  console.log(info);

  return (
    <div className={styles["box"]}>
      <div className={styles["info-left"]}>
        <Image src={info.image.img1} width={50} height={50} alt={"이미지"} />
      </div>
      <div className={styles["info-right"]}>
        <div className={styles["right-top"]}>
          <div className={styles["state"]}>
            {info.status === "SALE" ? "판매중" : "판매 완료"}
          </div>
          <div className={styles["title"]}>{info.title}</div>
        </div>
        <div className={styles["price"]}>{info.price}원</div>
      </div>
    </div>
  );
}

export default ChattingRoomInfo;
