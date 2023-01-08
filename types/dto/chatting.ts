export interface chattingRoomDto {
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
}

export interface chatDto {
  id: number;
  contents: string;
  createdAt: string;
  updatedAt: string;
  chattingRoom: {
    id: number;
    buyer: {
      id: string;
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
      image: null;
      createdAt: string;
      updatedAt: string;
      member: {
        id: number;
        userId: string;
        password: string;
        nickname: string;
      };
      price: null;
      status: null;
    };
  };
  sender: {
    id: number;
    userId: string;
    password: string;
    nickname: string;
  };
  receiver: {
    id: number;
    userId: string;
    password: string;
    nickname: string;
  };
}
