import Link from "next/link";
import styles from "./Navigation.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";

import homeImg from "../../public/image/navigation/home.png";
import homeImg_active from "../../public/image/navigation/home_active.png";
import chattingImg from "../../public/image/navigation/chat.png";
import chattingImg_active from "../../public/image/navigation/chat_active.png";

export default function Navigation() {
  const router = useRouter();

  return (
    <div className={styles.navbox}>
      <Link href="/home" className={styles["nav-item"]}>
        {router.pathname === "/home" ? (
          <Image src={homeImg_active} alt="home" width={30} height={30} />
        ) : (
          <Image src={homeImg} alt="home" width={30} height={30} />
        )}
      </Link>

      <Link href="/chatting" className={styles["nav-item"]}>
        {router.pathname === "/chatting" ? (
          <Image
            src={chattingImg_active}
            alt="chatting"
            width={30}
            height={30}
          />
        ) : (
          <Image src={chattingImg} alt="chatting" width={30} height={30} />
        )}
      </Link>
    </div>
  );
}
