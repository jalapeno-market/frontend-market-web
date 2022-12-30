import PostDetail from "../../components/home/PostDetail";
import { getPostDetail } from "../../api/post";

type PostProps = {
  postInfo: {
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

const Post = ({ postInfo }: PostProps) => {
  return <PostDetail postInfo={postInfo} />;
};

export async function getServerSideProps(context: any) {
  let { cookie } = context.req.headers;
  cookie = cookie ? cookie : "";
  const postInfo = await getPostDetail(context.query.post, cookie);

  return {
    props: {
      postInfo,
    },
  };
}

export default Post;
