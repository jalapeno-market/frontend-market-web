import styles from "./Header.module.scss";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className={styles["header-box"]}>
      {router.pathname === "/home" && <div>게시물 목록</div>}
      {router.pathname === "/chatting" && <div>채팅 목록</div>}
    </header>
  );
}
