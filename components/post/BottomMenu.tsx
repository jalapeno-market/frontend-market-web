import styles from "./BottomMenu.module.scss";
import { getChattingRoomByPost, makeChattingRoom } from "../../api/chatting";
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "../../store/AuthContext";
import { chattingRoomDto } from "../../types/dto/chatting";

type BottomMenuProps = {
  ownerId: string;
  postId: number;
  nickname: string;
  price: string;
};

function BottomMenu({ ownerId, postId, nickname, price }: BottomMenuProps) {
  const router = useRouter();
  const ctx = useContext(AuthContext);

  const buttonClickHandler = async () => {
    try {
      const data = await makeChattingRoom(router.query.post as string);
      router.push({
        pathname: `/chatting/${data.id}`,
        query: { postId: postId, chatOp: nickname },
      });
    } catch (err: any) {
      if (err.name === "OVERLAPPING") {
        const roomInfo = await getChattingRoomByPost(postId.toString());
        const info = roomInfo.find(
          (room: chattingRoomDto) => room.buyer.userId === ctx.userId
        );

        if (!info.id) {
          return;
        }

        router.push({
          pathname: `/chatting/${info.id}`,
          query: { postId: postId, chatOp: nickname },
        });
      }
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.price}>{price}원</div>
      <button
        onClick={buttonClickHandler}
        className={ownerId === ctx.userId ? styles.disabled : styles.button}
        disabled={ownerId === ctx.userId}
      >
        채팅하기
      </button>
    </div>
  );
}

export default BottomMenu;
