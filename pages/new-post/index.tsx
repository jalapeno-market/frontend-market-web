import React, { ReactElement } from "react";
import Container from "../../components/common/Container";
import NewPagePostLayout from "../../components/layout/NewPostPageLayout";
import Form from "../../components/post/Form";

export default function PostPage() {
  return (
    <Container>
      <Form />
    </Container>
  );
}
PostPage.getLayout = function getLayout(PostPage: ReactElement) {
  return <NewPagePostLayout>{PostPage}</NewPagePostLayout>;
};
