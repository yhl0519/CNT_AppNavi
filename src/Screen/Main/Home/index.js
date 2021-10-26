import React from "react";
import { Container, ScreenText, GoDetailBtn } from "../../../Style";

const Home = ({ navigation }) => {
  return (
    <Container>
      <ScreenText>Home</ScreenText>
      <GoDetailBtn
        title="Go Home Detail"
        onPress={() =>
          navigation.navigate("HomeStack", { screen: "HomeDetail" })
        }
      />
    </Container>
  );
};

export default Home;
