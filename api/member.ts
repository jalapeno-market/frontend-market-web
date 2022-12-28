import { fetchGet, fetchPost } from "./api";

export const signIn = async (id: string, pwd: string) => {
  const res = await fetchPost(`${process.env.SERVER}/login`, {
    loginId: id,
    password: pwd,
  });

  if (!res.data) {
    throw "";
  }
  if (res.code === "BAD") {
    throw res.message;
  }

  return res;
};

export const signUp = async (id: string, pwd: string, nickname: string) => {
  const res = await fetchPost(`${process.env.SERVER}/members/join`, {
    userId: id,
    password: pwd,
    nickname: nickname,
  });

  if (!res.data) {
    throw "error";
  }

  if (res.code === "BAD") {
    alert(res.message);
    return;
  }

  return res;
};
