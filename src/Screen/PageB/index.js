import React from "react";
import { Container, ScreenText, GoDetailBtn } from "../../Style";

const PageB = ({ navigation }) => {
  return (
    <Container>
      <ScreenText>PageB</ScreenText>
      <GoDetailBtn
        title="Go PageB Detail"
        onPress={() =>
          navigation.navigate("PageBStack", { screen: "PageBDetail" })
        }
      />
    </Container>
  );
};

export default PageB;
