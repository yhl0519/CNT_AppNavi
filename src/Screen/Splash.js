import React from "react";
import { Container } from "../Style";
import styled from "styled-components/native";

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

const Splash = () => {
  return (
    <Container>
      <Logo source={require("../assets/cnt_logo.jpg")} />
    </Container>
  );
};

export default Splash;
