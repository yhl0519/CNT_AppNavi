import React from "react";
import { Container, ScreenText, GoDetailBtn } from "../../../Style";

const PageA = ({ navigation }) => {
  return (
    <Container>
      <ScreenText>PageA</ScreenText>
      <GoDetailBtn
        title="Go PageA Detail"
        onPress={() =>
          navigation.navigate("PageAStack", { screen: "PageADetail" })
        }
      />
    </Container>
  );
};

export default PageA;
