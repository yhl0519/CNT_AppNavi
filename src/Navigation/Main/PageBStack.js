import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PageB from "../../Screen/Main/PageB";
import PageBDetail from "../../Screen/Main/PageB/PageBDetail";

const Stack = createStackNavigator();

const PageBStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PageB" component={PageB} />
      <Stack.Screen name="PageBDetail" component={PageBDetail} />
    </Stack.Navigator>
  );
};

export default PageBStack;
