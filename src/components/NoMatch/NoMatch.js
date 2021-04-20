import React from "react";
import { Container, Header } from "./NoMatchStyle";

const NoMatch = () => (
  <Container>
    <p>OOPS! Page not found!</p>
    <Header>404</Header>
    <p>The page you are looking for doesn't exist!</p>
    <p>Please, navigate to another page!</p>
  </Container>
);

export default NoMatch;
