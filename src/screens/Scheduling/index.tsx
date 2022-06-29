import React from "react";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import ArrowSvg from "../../assets/arrow.svg";

import {
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  Header,
  Informative,
  RentalPeriod,
} from "./styles";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

export function Scheduling() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const theme = useTheme();

  function handleOpenSchedulingDetails() {
    navigation.navigate("SchedulingDetails");
  }

  function handleBackToCarDetails() {
    navigation.navigate("CarDetails");
  }

  return (
    <Container>
      <Header>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor={theme.colors.header}
        />
        <BackButton
          onPress={handleBackToCarDetails}
          color={theme.colors.shape}
        />
        <Informative>
          Escolha uma {`\n`}data de início e {`\n`}fim do aluguel
        </Informative>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleOpenSchedulingDetails} />
      </Footer>
    </Container>
  );
}
