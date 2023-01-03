import React, { useRef, useState } from "react";
import Button from "../common/Button";
import styles from "./Form.module.scss";
import Link from "next/link";
import { signUp } from "../../api/member";
import { useRouter } from "next/router";

const Form = () => {
  const router = useRouter();
  const nicknameRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !idRef.current?.value ||
      !passwordRef.current?.value ||
      !nicknameRef.current?.value
    ) {
      setMessage("모두 입력해주세요");
      return;
    }

    try {
      const res = await signUp(
        idRef.current?.value,
        passwordRef.current?.value,
        nicknameRef.current?.value
      );
      alert("회원가입 성공! 로그인페이지로 이동합니다.");
      router.push("/");
    } catch (error) {
      if (error === "BAD") {
        setMessage("이미 존재하는 ID 입니다.");
        return;
      }
      alert(error);
    }
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
      <div className={styles.message}>{message}</div>
      <Button value="회원가입" type="submit" />
      <Link href="/" className={styles["signup-link"]}>
        로그인하러 가기
      </Link>
    </form>
  );
};

export default Form;
