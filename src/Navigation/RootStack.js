import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeBottomTab from "./HomeBottomTab";
import MenuStack from "./MenuStack";
import PageAStack from "./PageAStack";
import PageBStack from "./PageBStack";
import PageCStack from "./PageCStack";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeBottomTab" component={HomeBottomTab} />
      <Stack.Screen name="MenuStack" component={MenuStack} />
      <Stack.Screen name="PageAStack" component={PageAStack} />
      <Stack.Screen name="PageBStack" component={PageBStack} />
      <Stack.Screen name="PageCStack" component={PageCStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
