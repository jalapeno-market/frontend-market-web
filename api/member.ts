import { fetchGet, fetchPost } from "./api";

export const signIn = async (id: string, pwd: string) => {
  const res = await fetchPost(`${process.env.SERVER}/login`, {
    loginId: id,
    password: pwd,
  });

  if (res.code === "BAD") {
    throw res.code;
  }
  if (!res.data) {
    throw "";
  }

  return res;
};

export const signUp = async (id: string, pwd: string, nickname: string) => {
  const res = await fetchPost(`${process.env.SERVER}/members/join`, {
    userId: id,
    password: pwd,
    nickname: nickname,
  });

  if (res.code === "BAD") {
    throw res.code;
  }

  if (!res.data) {
    throw "error";
  }

  return res;
};
