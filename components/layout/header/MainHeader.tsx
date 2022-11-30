import styles from "./MainHeader.module.scss";
import React from "react";

type MainHeaderProps = {
  title: string;
};
export default function MainHeader({ title }: MainHeaderProps) {
  return (
    <React.Fragment>
      <header className={styles["header-box"]}>
        <div>{title}</div>
      </header>
    </React.Fragment>
  );
}
