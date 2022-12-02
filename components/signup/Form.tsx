import React, { useRef } from "react";
import Button from "../common/Button";
import styles from "./Form.module.scss";
import Link from "next/link";

const Form = () => {
  const nicknameRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    console.log(process.env.HOST);
    e.preventDefault();
    fetch(`${process.env.HOST}/members/join`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "test_id",
        password: "test_password",
        nickname: "test_nickname",
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
          type="text"
          ref={nicknameRef}
          placeholder="닉네임"
          className={styles["no-border-input"]}
        />
      </div>
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

      <Button value="회원가입" type="submit" />
      <Link href="/" className={styles["signup-link"]}>
        로그인하러 가기
      </Link>
    </form>
  );
};

export default Form;
