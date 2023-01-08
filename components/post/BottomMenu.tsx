import styles from "./BottomMenu.module.scss";
import { makeChattingRoom } from "../../api/chatting";
import { useRouter } from "next/router";

type BottomMenuProps = {
  postId: number;
  nickname: string;
  price: string;
};

function BottomMenu({ postId, nickname, price }: BottomMenuProps) {
  const router = useRouter();

  const buttonClickHandler = async () => {
    try {
      const data = await makeChattingRoom(router.query.post as string);
      router.push({
        pathname: `/chatting/${data.id}`,
        query: { postId: postId, chatOp: nickname },
      });
    } catch (err: any) {
      console.log(err);
      alert(err.message);
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.price}>{price}원</div>
      <button onClick={buttonClickHandler} className={styles.button}>
        채팅하기
      </button>
    </div>
  );
}

export default BottomMenu;
