import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../components/common/Loading";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(function () {
      router.push("/home");
    }, 2000);
  });

  return (
    <div>
      <Loading />
    </div>
  );
}
