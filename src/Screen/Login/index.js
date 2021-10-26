import React from "react";
import { Container, ScreenText, GoDetailBtn } from "../../Style";

const Login = ({ navigation }) => {
  return (
    <Container>
      <ScreenText>Login</ScreenText>
      <GoDetailBtn
        title="Login"
        onPress={() => navigation.replace("MainStack")}
      />
    </Container>
  );
};

export default Login;
