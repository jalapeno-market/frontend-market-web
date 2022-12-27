import React, { ReactElement } from "react";
import ChattingRoom from "../../components/chatting/room/ChattingRoom";
import Container from "../../components/common/Container";
import ChattingRoomLayout from "../../components/layout/ChattingRoomLayout";

const Room = () => {
  return (
    <Container>
      <ChattingRoom />
    </Container>
  );
};

Room.getLayout = function getLayout(Room: ReactElement) {
  return <ChattingRoomLayout>{Room}</ChattingRoomLayout>;
};

export default Room;
