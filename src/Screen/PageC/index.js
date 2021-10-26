import React from "react";
import { Container, ScreenText, GoDetailBtn } from "../../Style";

const PageC = ({ navigation }) => {
  return (
    <Container>
      <ScreenText>PageC</ScreenText>
      <GoDetailBtn
        title="Go PageC Detail"
        onPress={() =>
          navigation.navigate("PageCStack", { screen: "PageCDetail" })
        }
      />
    </Container>
  );
};

export default PageC;
