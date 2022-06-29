import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
}

export function ConfirmButton({ title, color, ...rest }: Props) {
  return (
    <Container activeOpacity={0.8} {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  );
}
