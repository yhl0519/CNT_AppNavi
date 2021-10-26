import React from "react";
import { Button } from "react-native";
import { Container, ScreenText } from "../../../Style";

const Home = ({ navigation }) => {
  return (
    <Container>
      <ScreenText>Home</ScreenText>
      <Button
        title="Go Home Detail"
        onPress={() =>
          navigation.navigate("HomeStack", { screen: "HomeDetail" })
        }
      />
    </Container>
  );
};

export default Home;
