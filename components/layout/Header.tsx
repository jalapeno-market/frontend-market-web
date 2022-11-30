import React from "react";
import { useRouter } from "next/router";
import ChattingRoomHeader from "./header/ChattingRoomHeader";
import MainHeader from "./header/MainHeader";
import NewPostPageHeader from "./header/NewPostHeader";

const Header = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      {router.pathname === `/chatting/[room]` && (
        <ChattingRoomHeader nickname="minji" scoville={33} />
      )}
      {router.pathname === "/chatting" && <MainHeader title="채팅 목록" />}
      {router.pathname === "/home" && <MainHeader title="게시물 목록" />}
      {router.pathname === "/new-post" && <NewPostPageHeader />}
    </React.Fragment>
  );
};

export default Header;
