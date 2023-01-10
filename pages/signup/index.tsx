import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import Logo from "../../components/common/Logo";
import Form from "../../components/signup/Form";

export default function SignUp() {
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
