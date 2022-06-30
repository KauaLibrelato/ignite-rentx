import React from "react";
import { useTheme } from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { Container } from "./styles";

export function MyCarsButton() {
  const theme = useTheme();
  return (
    <Container>
      <Ionicons
        size={32}
        color={theme.colors.background_secondary}
        name="car-sport"
      />
    </Container>
  );
}
