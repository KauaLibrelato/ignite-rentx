import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { CarDTO } from "../../dtos/carDTOS";

import EnergySvg from "../../assets/energy.svg";
import {
  About,
  Amount,
  Brand,
  CarImage,
  Container,
  Details,
  Model,
  Period,
  Price,
  Type,
} from "./styles";
import { getAccessoryIcon } from "../../utils/getAccessoriesIcon";

interface Props extends TouchableOpacityProps {
  data: CarDTO;
  onPress: () => void;
}

export function CarCard({ data, onPress, ...rest }: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  return (
    <Container onPress={onPress} {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Model>{data.name}</Model>

        <About>
          <Price>
            <Period>{data.period}</Period>
            <Amount>{`R$ ${data.price}`}</Amount>
          </Price>

          <Type>
            <MotorIcon width={RFValue(20)} height={RFValue(20)} />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
}
