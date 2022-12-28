import React, { useRef } from "react";
import Button from "../common/Button";
import styles from "./Form.module.scss";
import Link from "next/link";
import { fetchPost } from "../../api/api";
import { signUp } from "../../api/member";
import { useRouter } from "next/router";

const Form = () => {
  const router = useRouter();
  const nicknameRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !idRef.current?.value ||
      !passwordRef.current?.value ||
      !nicknameRef.current?.value
    ) {
      alert("모두 입력해주세요");
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
      alert("회원가입 실패");
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

      <Button value="회원가입" type="submit" />
      <Link href="/" className={styles["signup-link"]}>
        로그인하러 가기
      </Link>
    </form>
  );
};

export default Form;
