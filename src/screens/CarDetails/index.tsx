import React from "react";
import { StatusBar } from "react-native";
import {
  ParamListBase,
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { getAccessoryIcon } from "../../utils/getAccessoriesIcon";

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
import { CarDTO } from "../../dtos/carDTOS";

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const route = useRoute();

  const { car } = route.params as Params;

  function handleOpenScheduling() {
    navigation.navigate("Scheduling", { car });
  }
  function handleBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Model>{car.name}</Model>
          </Description>

          <Price>
            <Period>{car.rent.period}</Period>
            <Amount>{`R$ ${car.rent.price}`}</Amount>
          </Price>
        </Details>

        <Specifications>
          {car.accessories.map((accessory) => (
            <SpecificationsCard
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Specifications>

        <About>{car.about}</About>
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
