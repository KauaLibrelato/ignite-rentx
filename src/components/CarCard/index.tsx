import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

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

interface CarProps {
  brand: string;
  model: string;
  price: {
    period: string;
    amount: number;
  };
  thumbnail: string;
}

interface Props {
  data: CarProps;
}

export function CarCard({ data }: Props) {
  return (
    <Container>
      <Details>
        <Brand>{data.brand}</Brand>
        <Model>{data.model}</Model>

        <About>
          <Price>
            <Period>{data.price.period}</Period>
            <Amount>{`R$ ${data.price.amount}`}</Amount>
          </Price>

          <Type>
            <EnergySvg width={RFValue(20)} height={RFValue(20)} />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
}
