import React from "react";

import BrandSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { ConfirmButton } from "../../components/ConfirmButton";

import { Container, Content, Message, Title, Footer } from "./styles";
import { StatusBar, useWindowDimensions } from "react-native";
import { useTheme } from "styled-components";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
  useRoute,
} from "@react-navigation/native";

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const theme = useTheme();
  const route = useRoute();
  const { title, message, nextScreenRoute } = route.params as Params;
  function handleBackToHome() {
    navigation.navigate(nextScreenRoute);
  }
  return (
    <Container>
      <StatusBar
        translucent
        barStyle={"light-content"}
        backgroundColor={theme.colors.header}
      />
      <BrandSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>

        <Message>{message}</Message>
      </Content>

      <Footer>
        <ConfirmButton title="Ok" onPress={handleBackToHome} />
      </Footer>
    </Container>
  );
}
