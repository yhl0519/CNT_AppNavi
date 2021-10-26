import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Menu1 from "../Screen/Menu/Menu1";
import Menu2 from "../Screen/Menu/Menu2";
import Menu3 from "../Screen/Menu/Menu3";
import Menu4 from "../Screen/Menu/Menu4";

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu1" component={Menu1} />
      <Stack.Screen name="Menu2" component={Menu2} />
      <Stack.Screen name="Menu3" component={Menu3} />
      <Stack.Screen name="Menu4" component={Menu4} />
    </Stack.Navigator>
  );
};

export default MenuStack;
