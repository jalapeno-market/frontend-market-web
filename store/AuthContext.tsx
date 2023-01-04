import React from "react";

const AuthContext = React.createContext({
  userId: "",
  nickname: "",
  onLogin: (id: string, nickname: string) => {},
  onLogout: () => {},
});

export default AuthContext;
