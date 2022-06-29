import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";

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
  DateInfo,
  DateValue,
  DateTitle,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfoTo,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

export function SchedulingDetails() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const theme = useTheme();

  function handleOpenConfirmation() {
    navigation.navigate("Confirmation");
  }

  function handleBackScheduling() {
    navigation.navigate("Scheduling");
  }
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={handleBackScheduling} />
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

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>29/06/2022</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(18)}
            color={theme.colors.text}
          />

          <DateInfoTo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>29/06/2022</DateValue>
          </DateInfoTo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 120 X 3 DIÁRIAS</RentalPriceQuota>
            <RentalPriceTotal>R$ 360</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar Agora"
          color={theme.colors.success}
          onPress={handleOpenConfirmation}
        />
      </Footer>
    </Container>
  );
}
