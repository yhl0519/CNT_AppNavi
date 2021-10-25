import React from "react";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/Navigation/RootStack";

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
