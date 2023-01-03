import React, { PropsWithChildren, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  userId: "",
  nickname: "",
  onLogin: (id: string, nickname: string) => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [nickname, setNickName] = useState("");

  const onLogin = (id: string, nickname: string) => {
    setIsLoggedIn(true);
    setUserId(id);
    setNickName(nickname);
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    setUserId("");
    setNickName("");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        nickname: nickname,
        onLogin: onLogin,
        onLogout: onLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
