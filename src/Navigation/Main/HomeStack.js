import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../Screen/Main/Home";
import HomeDetail from "../../Screen/Main/Home/HomeDetail";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeDetail" component={HomeDetail} />
    </Stack.Navigator>
  );
};

export default HomeStack;
