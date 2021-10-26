import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeBottomTab from "./HomeBottomTab";
import MenuStack from "./MenuStack";
import HomeStack from "./HomeStack";
import PageAStack from "./PageAStack";
import PageBStack from "./PageBStack";
import PageCStack from "./PageCStack";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeBottomTab"
        component={HomeBottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MenuStack"
        component={MenuStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PageAStack"
        component={PageAStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PageBStack"
        component={PageBStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PageCStack"
        component={PageCStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
