import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PageA from "../Screen/PageA";
import PageADetail from "../Screen/PageA/PageADetail";

const Stack = createStackNavigator();

const PageAStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PageA" component={PageA} />
      <Stack.Screen name="PageADetail" component={PageADetail} />
    </Stack.Navigator>
  );
};

export default PageAStack;
