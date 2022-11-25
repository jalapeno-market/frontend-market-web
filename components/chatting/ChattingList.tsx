import React, { useEffect } from "react";
import ChattingListItem from "./ChattingListItem";

const rooms = [
  {
    id: 1,
    buyer: {
      id: 2,
      userId: "ss",
      password: "22",
      nickname: "song",
    },
    seller: {
      id: 1,
      userId: "kk",
      password: "11",
      nickname: "kim",
    },
    post: {
      id: 1,
      title: "qq",
      contents: "qqqq",
      image: null,
      createdAt: "2022-11-12T06:01:50",
      updatedAt: "2022-11-12T06:01:50",
      member: {
        id: 1,
        userId: "kk",
        password: "11",
        nickname: "kim",
      },
      price: null,
      status: null,
    },
  },
  {
    id: 3,
    buyer: {
      id: 4,
      userId: "hh",
      password: "44",
      nickname: "han",
    },
    seller: {
      id: 1,
      userId: "kk",
      password: "11",
      nickname: "kim",
    },
    post: {
      id: 1,
      title: "qq",
      contents: "qqqq",
      image: null,
      createdAt: "2022-11-12T06:01:50",
      updatedAt: "2022-11-12T06:01:50",
      member: {
        id: 1,
        userId: "kk",
        password: "11",
        nickname: "kim",
      },
      price: null,
      status: null,
    },
  },
  {
    id: 18,
    buyer: {
      id: 5,
      userId: "mm",
      password: "55",
      nickname: "mun",
    },
    seller: {
      id: 1,
      userId: "kk",
      password: "11",
      nickname: "kim",
    },
    post: {
      id: 1,
      title: "qq",
      contents: "qqqq",
      image: null,
      createdAt: "2022-11-12T06:01:50",
      updatedAt: "2022-11-12T06:01:50",
      member: {
        id: 1,
        userId: "kk",
        password: "11",
        nickname: "kim",
      },
      price: null,
      status: null,
    },
  },
];

const ChattingList = () => {
  const items = rooms.map((x) => (
    <ChattingListItem
      id={x.id}
      nickname={x.buyer.nickname}
      profile={"url"}
      lastMessage="last message"
      lastUpdate="last update date"
    />
  ));

  return <div>{items}</div>;
};

export default ChattingList;
