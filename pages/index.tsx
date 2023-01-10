import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import Logo from "../components/common/Logo";
import Form from "../components/login/Form";

export default function LoginPage() {
  const router = useRouter();

  useLayoutEffect(() => {
    if (sessionStorage.getItem("id")) {
      router.push("/home");
    }
  }, [router]);

  return (
    <>
      <Logo />
      <Form />
    </>
  );
}
