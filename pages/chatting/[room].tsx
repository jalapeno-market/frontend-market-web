import React, { ReactElement, useEffect, useState } from "react";
import ChattingRoom from "../../components/chatting/room/ChattingRoom";
import Container from "../../components/common/Container";
import ChattingInputBar from "../../components/layout/bottom/ChattingInputBar";
import ChattingRoomLayout from "../../components/layout/ChattingRoomLayout";

const Room = () => {
  useEffect(() => {}, []);
  return (
    <Container>
      <ChattingRoom />
      <ChattingInputBar />
    </Container>
  );
};

Room.getLayout = function getLayout(Room: ReactElement) {
  return <ChattingRoomLayout>{Room}</ChattingRoomLayout>;
};

export default Room;
