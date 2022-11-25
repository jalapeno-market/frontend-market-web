import React from "react";
import styles from "./Checkbox.module.scss";

type checkboxProps = {
  id: string;
  label: string;
  inputRef?: React.LegacyRef<HTMLInputElement>;
  onClick?: React.MouseEventHandler;
};

const Checkbox = ({ id, label, inputRef, onClick }: checkboxProps) => {
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        className={styles.checkbox}
        id={id}
        ref={inputRef}
        onClick={onClick}
      ></input>
      <label htmlFor={id} className={styles.label}>
        <div className={styles["my-checkbox"]}></div>
      </label>
      <span>{label}</span>
    </div>
  );
};

export default Checkbox;
