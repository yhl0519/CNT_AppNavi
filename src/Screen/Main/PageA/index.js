import React from "react";
import { Button } from "react-native";
import { Container, ScreenText } from "../../../Style";

const PageA = ({ navigation }) => {
  return (
    <Container>
      <ScreenText>PageA</ScreenText>
      <Button
        title="Go PageA Detail"
        onPress={() =>
          navigation.navigate("PageAStack", { screen: "PageADetail" })
        }
      />
    </Container>
  );
};

export default PageA;
