import React from "react";
import PostDetail from "../../components/home/PostDetail";
import { fetchGet } from "../../api/api";

type PostProps = {
  data: {
    id: string;
    title: string;
    contents: string;
    image: {
      img1: string;
      img2: string | null;
      img3: string | null;
    };
    createdAt: string;
    updatedAt: string | null;
    userId: string;
    nickname: string;
    price: string;
    status: string;
  };
};

const Post = ({ data }: PostProps) => {
  return <PostDetail postInfo={data} />;
};

export async function getServerSideProps() {
  // const router = useRouter();
  // try {
  //   const data = await fetchGet(
  //     `${process.env.SERVER}/post/${router.query.post}`
  //   );
  //   if (data.code === "UNAUTHORIZED") {
  //     return undefined;
  //   }
  //   return data;
  // } catch (error) {
  //   return undefined;
  // }

  return {
    props: {
      data: {
        id: 1,
        title: "아이폰12미니 ",
        contents: "블랙색상 A급",
        image: {
          img1: "https://myawsbucketset.s3.ap-northeast-2.amazonaws.com/static/7d5c625e-e90f-4929-abd5-ed00cdfba18cd361eb29-29e7-477d-b3e3-fe72f515b382.jpg",
          img2: null,
          img3: null,
        },
        createdAt: "2022-11-21T16:54:37.761896",
        updatedAt: null,
        userId: "test",
        nickname: "test",
        price: "400,000",
        status: "SALE",
      },
    },
  };
}

export default Post;
