import React from "react";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Container, ScreenText } from "../../Style";
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
    //   animationIn="slideInLeft" // 모달 왼쪽에서 슬라이드 할 때 사용
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

export default Menu;
