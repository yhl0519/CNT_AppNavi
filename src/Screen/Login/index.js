import React from "react";
import { Button } from "react-native";
import { Container, ScreenText } from "../../Style";

const Login = ({ navigation }) => {
  return (
    <Container>
      <ScreenText>Login</ScreenText>
      <Button
        title="Login"
        onPress={() => navigation.replace("MainStack")}
      />
    </Container>
  );
};

export default Login;
