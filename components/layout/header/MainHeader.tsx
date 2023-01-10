import styles from "./MainHeader.module.scss";
import React from "react";
import Image from "next/image";
import { useContext, useState } from "react";
import exitIcon from "../../../public/image/mainHeader/logout.svg";
import AuthContext from "../../../store/AuthContext";
import { useRouter } from "next/router";

type MainHeaderProps = {
  title: string;
};
export default function MainHeader({ title }: MainHeaderProps) {
  const ctx = useContext(AuthContext);
  const router = useRouter();
  const [menuVisibility, setMenuVisibility] = useState(false);
  const clickExitButtonHandler = () => {
    setMenuVisibility(true);
  };

  const logoutHandler = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("nickname");
    ctx.onLogout();
    router.push("/");
  };

  return (
    <React.Fragment>
      <header className={styles["header-box"]}>
        <div className={styles["title"]}>{title}</div>
        <Image
          className={styles["log-out"]}
          src={exitIcon}
          width={"20"}
          height={"20"}
          alt={"logout"}
          onClick={clickExitButtonHandler}
        />
      </header>
      {menuVisibility && <div className={styles.layer}></div>}
      {menuVisibility && (
        <div className={styles.menu}>
          <div className={styles["menu-item"]} onClick={logoutHandler}>
            로그아웃
          </div>
          <div
            className={styles["menu-item"]}
            onClick={() => {
              setMenuVisibility(false);
            }}
          >
            취소
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
