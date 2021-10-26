import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/Navigation/RootStack";
import Splash from "./src/Screen/Splash";

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <RecoilRoot>
      <NavigationContainer>
        {isLoading ? <Splash /> : <RootStack />}
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
