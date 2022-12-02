import React, { useRef } from "react";
import Button from "../common/Button";
import styles from "./Form.module.scss";
import Link from "next/link";

const Form = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    console.log("submit");
    e.preventDefault();
    fetch(`${process.env.HOST}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loginId: idRef.current?.value,
        password: idRef.current?.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div>
        <input
          type="id"
          ref={idRef}
          placeholder="아이디"
          className={styles["no-border-input"]}
        />
      </div>
      <div>
        <input
          type="password"
          ref={passwordRef}
          placeholder="비밀번호"
          className={styles["no-border-input"]}
        />
      </div>
      <Button value="로그인" type="submit" />
      <Link href="/signup" className={styles["signup-link"]}>
        회원가입하러가기
      </Link>
    </form>
  );
};

export default Form;
