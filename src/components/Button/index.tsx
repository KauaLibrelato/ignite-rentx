import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";

import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  onPress: () => void;
  enabled: boolean;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  enabled,
  loading = false,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <Container
      activeOpacity={0.8}
      onPress={onPress}
      enabled={enabled}
      color={color ? color : theme.colors.main}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
