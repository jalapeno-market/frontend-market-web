import React from "react";
import PostButton from "../../components/home/PostButton";
import PostItem from "../../components/home/PostItem";

export default function Home() {
  const posts = [
    {
      id: "1",
      title: "아이패드",
      img: "/../public/image/jalapeno.jpg",
      createdAt: "5초 전",
      price: "100000",
      status: "판매중",
    },
    {
      id: "2",
      title: "아이패드",
      img: "/../public/image/jalapeno.jpg",
      createdAt: "5초 전",
      price: "100000",
      status: "판매중",
    },
  ].map((item) => (
    <PostItem
      key={item.id}
      id={item.id}
      title={item.title}
      img={item.img}
      createdAt={item.createdAt}
      price={item.price}
      status={item.status}
    />
  ));

  return (
    <React.Fragment>
      <div>{posts}</div>
      <PostButton />
    </React.Fragment>
  );
}
