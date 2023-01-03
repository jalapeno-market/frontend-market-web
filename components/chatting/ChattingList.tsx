import React, { useContext } from "react";
import ChattingListItem from "./ChattingListItem";
import { getTimeDiff } from "../../utils/getTimeDiff";
import AuthContext from "../../store/AuthContext";

type ChattingListProps = {
  ChattingListItems: Array<{
    id: number;
    buyer: {
      id: number;
      userId: string;
      password: string;
      nickname: string;
    };
    seller: {
      id: number;
      userId: string;
      password: string;
      nickname: string;
    };
    post: {
      id: number;
      title: string;
      contents: string;
      image: string | null;
      createdAt: string;
      updatedAt: string;
      member: {
        id: number;
        userId: string;
        password: string;
        nickname: string;
      };
      price: string | null;
      status: string | null;
    };
  }>;
};

const ChattingList = ({ ChattingListItems }: ChattingListProps) => {
  const ctx = useContext(AuthContext);
  const items = ChattingListItems.map((item) => (
    <ChattingListItem
      key={item.id}
      id={item.id}
      nickname={
        ctx.userId === item.seller.userId
          ? item.buyer.nickname
          : item.seller.nickname
      }
      profile={"url"}
      lastMessage={"100원에 주시면 안되나요"}
      lastUpdate={getTimeDiff(item.post.createdAt)}
    />
  ));

  return <div>{items}</div>;
};

export default ChattingList;
