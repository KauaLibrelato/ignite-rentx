import {
  ParamListBase,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/carDTOS";

import Logo from "../../assets/logo.svg";
import { CarCard } from "../../components/CarCard";
import { Load } from "../../components/Load";
import {
  Container,
  Header,
  HeaderContent,
  Title,
  CarList,
  MyCarsButton,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

export function Home() {
  const theme = useTheme();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  function handleMyCars() {
    navigation.navigate("MyCars");
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

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
          <Title>{`Total de ${cars.length} carros`}</Title>
        </HeaderContent>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CarCard data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
      <MyCarsButton onPress={handleMyCars}>
        <Ionicons
          size={32}
          color={theme.colors.background_secondary}
          name="ios-car-sport"
        />
      </MyCarsButton>
    </Container>
  );
}
