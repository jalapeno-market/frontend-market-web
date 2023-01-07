export const makeWebSocket = (roomId: number, userId: string) => {
  const ws = new WebSocket(`${process.env.WEBSOCKET}`);
  ws.onopen = () => {
    ws.send(
      JSON.stringify({
        type: "ENTER",
        roomId: roomId,
        senderUserId: userId,
        message: "",
      })
    );
  };
  return ws;
};
