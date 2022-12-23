import React, { useRef } from "react";
import Button from "../common/Button";
import styles from "./Form.module.scss";
import Link from "next/link";
import { fetchPost } from "../../api/api";
import { useRouter } from "next/router";

const Form = () => {
  const router = useRouter();
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      fetchPost(`${process.env.SERVER}/login`, {
        loginId: idRef.current?.value,
        password: passwordRef.current?.value,
      }).then((res) => {
        if (res.data) {
          router.push("/home");
          return;
        }
        if (res.code === "BAD") {
          alert(res.message);
          return;
        }
        alert("로그인 실패.. 나중에 다시 시도해보세요.");
      });
    } catch (error) {
      console.log("Login Error");
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
      <Button value="로그인" type="submit" />
      <Link href="/signup" className={styles["signup-link"]}>
        회원가입하러가기
      </Link>
    </form>
  );
};

export default Form;
