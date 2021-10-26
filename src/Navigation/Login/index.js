import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../Screen/Login";

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
