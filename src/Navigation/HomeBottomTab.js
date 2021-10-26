import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import PageAStack from "./PageAStack";
import PageBStack from "./PageBStack";
import PageCStack from "./PageCStack";
import Menu from "./MenuModal";

const Tab = createBottomTabNavigator();

const HomeBottomTab = ({ navigation }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Tab.Navigator initialRouteName="HomeTab">
        <Tab.Screen
          name="MenuTab"
          component={Menu}
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault();
              setMenuOpen(!isMenuOpen);
            },
          })}
        />
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="PageATab"
          component={PageAStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="PageBTab"
          component={PageBStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="PageCTab"
          component={PageCStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
      <Menu
        navigation={navigation}
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
};

export default HomeBottomTab;
