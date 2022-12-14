import React, { ReactElement } from "react";
import PostButton from "../../components/home/PostButton";
import PostItem from "../../components/home/PostItem";
import Container from "../../components/common/Container";
import HomePageLayout from "../../components/layout/HomePageLayout";
import { getAllPost } from "../../api/post";
import { postDto } from "../../types/dto/post";

type HomeProps = {
  postData: Array<postDto>;
};

export default function Home({ postData }: HomeProps) {
  return (
    <Container>
      {postData.map((item) => (
        <PostItem
          key={item.id}
          id={item.id.toString()}
          title={item.title}
          img={item.img1}
          createdAt={item.createdAt}
          price={item.price}
          status={item.status}
        />
      ))}
      <PostButton />
    </Container>
  );
}

export async function getServerSideProps(context: any) {
  let { cookie } = context.req.headers;
  if (!cookie) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  try {
    const postData = await getAllPost(cookie);
    if (!postData) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        postData,
      },
    };
  } catch (e) {
    return { notFound: true };
  }
}

Home.getLayout = function getLayout(Home: ReactElement) {
  return <HomePageLayout>{Home}</HomePageLayout>;
};
