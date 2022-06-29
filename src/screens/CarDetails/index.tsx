import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import {
  ParamListBase,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";

import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import EnergySvg from "../../assets/energy.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { SpecificationsCard } from "../../components/SpecificationsCard";

import { Button } from "../../components/Button";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Price,
  Period,
  Amount,
  Description,
  Model,
  Brand,
  Specifications,
  About,
  Footer,
} from "./styles";

export function CarDetails() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const theme = useTheme();

  function handleOpenScheduling() {
    navigation.navigate("Scheduling");
  }
  function handleBackToHome() {
    navigation.navigate("Home");
  }
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={handleBackToHome} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={["https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png"]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>AUDI</Brand>
            <Model>RS 5 Coupé</Model>
          </Description>

          <Price>
            <Period>AO DIA</Period>
            <Amount>R$ 120</Amount>
          </Price>
        </Details>

        <Specifications>
          <SpecificationsCard name="250km/h" icon={SpeedSvg} />
          <SpecificationsCard name="3.9s" icon={AccelerationSvg} />
          <SpecificationsCard name="331 HP" icon={ForceSvg} />
          <SpecificationsCard name="Elétrico" icon={EnergySvg} />
          <SpecificationsCard name="Auto" icon={ExchangeSvg} />
          <SpecificationsCard name="5 pessoas" icon={PeopleSvg} />
        </Specifications>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleOpenScheduling}
        />
      </Footer>
    </Container>
  );
}
