import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PageC from "../Screen/PageC";
import PageCDetail from "../Screen/PageC/PageCDetail";

const Stack = createStackNavigator();

const PageCStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PageC" component={PageC} />
      <Stack.Screen name="PageCDetail" component={PageCDetail} />
    </Stack.Navigator>
  );
};

export default PageCStack;
