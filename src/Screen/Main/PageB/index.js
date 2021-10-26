import React from "react";
import { Button } from "react-native";
import { Container, ScreenText } from "../../../Style";

const PageB = ({ navigation }) => {
  return (
    <Container>
      <ScreenText>PageB</ScreenText>
      <Button
        title="Go PageB Detail"
        onPress={() =>
          navigation.navigate("PageBStack", { screen: "PageBDetail" })
        }
      />
    </Container>
  );
};

export default PageB;
