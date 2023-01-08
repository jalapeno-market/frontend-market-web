import { fetchDelete, fetchGet, fetchPost } from "./api";

export const makePost = async (formData: FormData) => {
  const res = await fetch(`${process.env.SERVER}/post`, {
    method: "POST",
    body: formData,
    redirect: "follow",
    credentials: "include",
  });
  const jsonRes = await res.json();

  if (jsonRes.code === "BAD") {
    throw new Error(jsonRes.message);
  }
  if (jsonRes.code === "UNAUTHORIZED") {
    throw new Error(jsonRes.message);
  }

  return jsonRes.data;
};

export const getAllPost = async (cookie?: string) => {
  const res = await fetchGet(
    `${process.env.SERVER}/posts?offset=0&limit=10`,
    cookie
  );
  if (res.code === "UNAUTHORIZED") {
    throw new Error(res.message);
  }

  return res.data;
};

export const getPostDetail = async (id: string, cookie?: string) => {
  const res = await fetchGet(`${process.env.SERVER}/post/${id}`, cookie);
  if (res.code === "UNAUTHORIEZED") {
    throw new Error(res.message);
  }

  return res.data;
};

export const deletePost = async (postId: string) => {
  const res = await fetchDelete(`${process.env.SERVER}/post/${postId}`);

  return res;
};
