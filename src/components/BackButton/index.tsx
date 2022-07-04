import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import {
  ParamListBase,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";

import { useTheme } from "styled-components";

import { Container } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  color?: string;
  disabled?: boolean;
}

export function BackButton({ color, disabled, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}
