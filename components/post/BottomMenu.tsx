import styles from "./BottomMenu.module.scss";
import { makeChattingRoom } from "../../api/chatting";
import { useRouter } from "next/router";

type BottomMenuProps = {
  price: string;
};

function BottomMenu({ price }: BottomMenuProps) {
  const router = useRouter();

  const buttonClickHandler = async () => {
    try {
      const data = await makeChattingRoom(router.query.post as string);
      router.push(`/chatting/${data.id}`);
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
