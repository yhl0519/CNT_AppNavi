import React from "react";
import { Button } from "react-native";
import { Container, ScreenText } from "../../../Style";

const PageC = ({ navigation }) => {
  return (
    <Container>
      <ScreenText>PageC</ScreenText>
      <Button
        title="Go PageC Detail"
        onPress={() =>
          navigation.navigate("PageCStack", { screen: "PageCDetail" })
        }
      />
    </Container>
  );
};

export default PageC;
