import React, { useRef } from "react";
import Button from "../common/Button";
import styles from "./Form.module.scss";
import Link from "next/link";
import { fetchPost } from "../../api/api";
import { useRouter } from "next/router";

const Form = () => {
  const router = useRouter();
  const nicknameRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      fetchPost(`${process.env.SERVER}/members/join`, {
        userId: idRef.current?.value,
        password: passwordRef.current?.value,
        nickname: nicknameRef.current?.value,
      }).then((res) => {
        if (res.data) {
          alert("회원가입 성공! 로그인페이지로 이동합니다.");
          router.push("/");
          return;
        }
        if (res.code === "BAD") {
          alert(res.message);
          return;
        }
        alert("회원가입 실패.. 나중에 다시 시도해보세요.");
      });
    } catch (error) {
      console.log("Signup Error");
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
