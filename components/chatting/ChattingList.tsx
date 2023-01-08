import React, { useContext } from "react";
import ChattingListItem from "./ChattingListItem";
import { getTimeDiff } from "../../utils/getTimeDiff";
import AuthContext from "../../store/AuthContext";
import { chattingRoomDto } from "../../types/dto/chatting";

type ChattingListProps = {
  ChattingListItems: Array<chattingRoomDto>;
};

const ChattingList = ({ ChattingListItems }: ChattingListProps) => {
  const ctx = useContext(AuthContext);

  const items = ChattingListItems.map((item) => (
    <ChattingListItem
      key={item.id}
      id={item.id}
      postId={item.post.id}
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
