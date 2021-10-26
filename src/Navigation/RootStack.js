import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainStack from "./Main";
import LoginStack from "./Login";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginStack"
        component={LoginStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainStack"
        component={MainStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
