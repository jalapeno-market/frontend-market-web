import PostDetail from "../../components/home/PostDetail";
import { getPostDetail } from "../../api/post";
import BottomMenu from "../../components/post/BottomMenu";
import { postDetailDto } from "../../types/dto/post";

type PostProps = {
  postInfo: postDetailDto;
};

const Post = ({ postInfo }: PostProps) => {
  return (
    <>
      <PostDetail postInfo={postInfo} />
      <BottomMenu
        postId={postInfo.id}
        nickname={postInfo.nickname}
        price={postInfo.price}
      />
    </>
  );
};

export async function getServerSideProps(context: any) {
  let { cookie } = context.req.headers;
  cookie = cookie ? cookie : "";

  try {
    const postInfo = await getPostDetail(context.query.post, cookie);
    if (!postInfo) {
      return { notFound: true };
    }
    return {
      props: {
        postInfo,
      },
    };
  } catch (e) {
    return { notFound: true };
  }
}

export default Post;
