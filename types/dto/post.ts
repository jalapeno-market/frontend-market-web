export interface postDto {
  id: number;
  title: string;
  img1: string;
  createdAt: string;
  price: string;
  status: string;
}

export interface postDetailDto {
  id: number;
  title: string;
  contents: string;
  image: {
    img1: string;
    img2: null;
    img3: null;
  };
  createdAt: string;
  updatedAt: null;
  userId: string;
  nickname: string;
  price: string;
  status: string;
}
