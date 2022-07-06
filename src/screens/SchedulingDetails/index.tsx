import React, { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";

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
  useRoute,
} from "@react-navigation/native";
import { CarDTO } from "../../dtos/carDTOS";
import { format } from "date-fns/esm";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { parseISO } from "date-fns";
import { api } from "../../services/api";

interface Params {
  car: CarDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails() {
  const [loading, setLoading] = useState(false);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const theme = useTheme();
  const route = useRoute();
  const { car, dates } = route.params as Params;

  const rentTotal = Number(dates.length * car.price);

  async function handleConfirmRental() {
    setLoading(true);

    await api
      .post("/rentals", {
        user_id: 1,
        car_id: car.id,
        start_date: new Date(),
        end_date: new Date(),
        total: rentTotal,
      })
      .then(() => {
        navigation.navigate("Confirmation", {
          nextScreenRoute: "Home",
          title: "Carro alugado!",
          message: `Agora você só precisa ir\naté a concessionária da RENTX\npegar o seu automóvel.`,
        });
      })
      .catch((erro) => {
        setLoading(false);
        Alert.alert("Não foi possível confirmar o agendamento.");
      });
  }

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(parseISO(dates[0])), "dd/MM/yyyy"),
      end: format(
        getPlatformDate(parseISO(dates[dates.length - 1])),
        "dd/MM/yyyy"
      ),
    });
  }, []);

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
            <Period>{car.period}</Period>
            <Amount>{`R$ ${car.price}`}</Amount>
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
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(18)}
            color={theme.colors.text}
          />

          <DateInfoTo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfoTo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.price} x ${dates.length} DIÁRIAS`}</RentalPriceQuota>
            <RentalPriceTotal>{`R$ ${rentTotal}`}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmRental}
          disabled={loading ? true : false}
          loading={loading}
        />
      </Footer>
    </Container>
  );
}
