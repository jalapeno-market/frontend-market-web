import React, { useRef, useState } from "react";
import Button from "../common/Button";
import styles from "./Form.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "../../api/member";

const Form = () => {
  const router = useRouter();
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idRef.current?.value || !passwordRef.current?.value) {
      setMessage("아이디와 비밀번호를 모두 입력해주세요!");
      return;
    }
    setMessage("");

    try {
      const res = await signIn(
        idRef.current?.value,
        passwordRef.current?.value
      );
      alert(`${res.data.nickname}님 환영합니다`);
      router.push("/home");
    } catch (err) {
      alert(err);
    }
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
      <div className={styles.message}>{message}</div>
      <Button value="로그인" type="submit" />
      <Link href="/signup" className={styles["signup-link"]}>
        회원가입하러가기
      </Link>
    </form>
  );
};

export default Form;
