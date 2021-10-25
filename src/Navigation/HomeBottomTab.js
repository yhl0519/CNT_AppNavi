import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import PageAStack from "./PageAStack";
import PageBStack from "./PageBStack";
import PageCStack from "./PageCStack";

import { Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Container, ScreenText } from "../Style";
import styled from "styled-components/native";

export const ModalContainer = styled(Modal)`
  background-color: white;
  margin: 300px 0 0 0;
`;

export const ModalText = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Menu = ({ navigation, isMenuOpen, setMenuOpen }) => {
  const press = (screen) => {
    setMenuOpen(false);
    navigation.navigate("MenuStack", { screen: screen });
  };
  return (
    <ModalContainer
      isVisible={isMenuOpen}
      onBackdropPress={() => setMenuOpen(false)}
    >
      <Container>
        <ScreenText style={{ marginBottom: 20 }}>Menu</ScreenText>
        <TouchableOpacity onPress={() => press("Menu1")}>
          <ModalText>Menu1</ModalText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => press("Menu2")}>
          <ModalText>Menu2</ModalText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => press("Menu3")}>
          <ModalText>Menu3</ModalText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => press("Menu4")}>
          <ModalText>Menu4</ModalText>
        </TouchableOpacity>
      </Container>
    </ModalContainer>
  );
};

const Tab = createBottomTabNavigator();

const HomeBottomTab = ({ navigation }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Tab.Navigator initialRouteName="HomeStack">
        <Tab.Screen
          name="MenuStack"
          component={Menu}
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault();
              setMenuOpen(!isMenuOpen);
            },
          })}
        />
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="PageAStack" component={PageAStack} />
        <Tab.Screen name="PageBStack" component={PageBStack} />
        <Tab.Screen name="PageCStack" component={PageCStack} />
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
