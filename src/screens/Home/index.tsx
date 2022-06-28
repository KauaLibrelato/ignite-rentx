import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { CarCard } from "../../components/CarCard";
import { Container, Header, HeaderContent, Title, CarList } from "./styles";

export function Home() {
  const carData: any = {
    brand: "AUDI",
    model: "RS 5 Coupé",
    price: {
      period: "AO DIA",
      amount: "120",
    },
    thumbnail: "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={"#1B1B1F"}
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <Title>Total de 12 Carros</Title>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <CarCard data={carData} />}
      ></CarList>
    </Container>
  );
}
