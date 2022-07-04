import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
  disabled: boolean;
  onPress?: () => void;
}

export function Button({
  title,
  color,
  onPress,
  disabled = true,
  loading = false,
  light = false,
}: Props) {
  const theme = useTheme();

  return (
    <Container
      activeOpacity={0.8}
      color={color ? color : theme.colors.main}
      onPress={onPress}
      disabled={disabled}
      style={{ opacity: disabled === true || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
