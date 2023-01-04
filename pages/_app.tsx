import React from "react";
import { AppProps } from "next/app";
import { ReactElement, ReactNode, useState } from "react";
import type { NextPage } from "next";
import "../styles/global.scss";
import AuthContext from "../store/AuthContext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  const [userId, setUserId] = useState("");
  const [userNickname, setUserNickname] = useState("");

  return getLayout(
    <AuthContext.Provider
      value={{
        userId: userId,
        nickname: userNickname,
        onLogin: (id, nickname) => {
          setUserId(id);
          setUserNickname(nickname);
        },
        onLogout: () => {
          setUserId("");
          setUserNickname("");
        },
      }}
    >
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
