import React, { ReactElement } from "react";
import Container from "../../components/common/Container";

import Form from "../../components/post/Form";

export const PostContext = React.createContext({
  title: "",
  contents: "",
  images: "",
  price: "",
});

export default function PostPage() {
  return (
    <Container>
      <Form />
    </Container>
  );
}
