import { fetchDelete, fetchGet, fetchPost } from "./api";

export const getChattingRooms = async (cookie?: string) => {
  const res = await fetchGet(`${process.env.SERVER}/chatting-rooms`, cookie);

  return res;
};

export const getChattingRoomByPost = async (
  postId: string,
  cookie?: string
) => {
  const res = await fetchGet(
    `${process.env.SERVER}/posts/${postId}/chatting-rooms`,
    cookie
  );

  return res;
};

export const makeChattingRoom = async (postId: string) => {
  const res = await fetchPost(
    `${process.env.SERVER}/posts/${postId}/chatting-rooms`,
    {}
  );
  if (res.status === 400) {
    const error = new Error();
    error.message = "이미 존재하는 채팅방";
    error.name = "OVERLAPPING";
    throw error;
  }
  // if (res.status !== 200) {
  //   throw new Error(res.message);
  // }

  return res;
};

export const getChats = async (roomId: string, cookie?: string) => {
  const res = await fetchGet(
    `${process.env.SERVER}/chatting-rooms/${roomId}/chats`,
    cookie
  );

  if (res.code) {
    throw new Error(res.code);
  }

  return res;
};

export const deleteChattingRoom = async (roomId: number | string) => {
  const res = await fetchDelete(
    `${process.env.SERVER}/chatting-rooms/${roomId}`
  );
};
