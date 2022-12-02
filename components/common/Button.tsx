import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  value: string;
  clickHandler?: React.MouseEventHandler;
};
const Button = ({ type, value, clickHandler }: ButtonProps) => {
  return (
    <button type={type} onClick={clickHandler} className={styles.btn}>
      {value}
    </button>
  );
};

export default Button;
