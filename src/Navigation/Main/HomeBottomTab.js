import React, { useState } from "react";
import { Image } from "react-native";
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
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconSrc;
            if (route.name === "MenuTab") {
              iconSrc = require("../../assets/tab/menu.png");
            } else if (route.name === "HomeTab") {
              iconSrc = focused
                ? require("../../assets/tab/home_on.png")
                : require("../../assets/tab/home_off.png");
            } else if (route.name === "PageATab") {
              iconSrc = focused
                ? require("../../assets/tab/a_on.png")
                : require("../../assets/tab/a_off.png");
            } else if (route.name === "PageBTab") {
              iconSrc = focused
                ? require("../../assets/tab/b_on.png")
                : require("../../assets/tab/b_off.png");
            } else if (route.name === "PageCTab") {
              iconSrc = focused
                ? require("../../assets/tab/c_on.png")
                : require("../../assets/tab/c_off.png");
            }
            return (
              <Image
                source={iconSrc}
                style={{
                  height: 20,
                  resizeMode: "contain",
                  alignSelf: "center",
                  marginBottom: -5,
                }}
              />
            );
          },
        })}
      >
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
