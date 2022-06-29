import React from "react";

import BrandSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { ConfirmButton } from "../../components/ConfirmButton";

import { Container, Content, Message, Title, Footer } from "./styles";
import { StatusBar, useWindowDimensions } from "react-native";
import { useTheme } from "styled-components";

export function Confirmation() {
  const { width } = useWindowDimensions();
  const theme = useTheme();
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
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir{`\n`}até a concessionária da RENTX{`\n`}pegar
          o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="Ok" />
      </Footer>
    </Container>
  );
}
