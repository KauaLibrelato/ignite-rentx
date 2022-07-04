import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

interface ButtonProps extends TouchableOpacityProps {
  color: string;
}

interface ButtonTextProps {
  light: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  padding: 19px;

  align-items: center;
  justify-content: center;

  margin-bottom: 8px;

  background-color: ${({ color, theme }) =>
    color ? color : theme.colors.main};
`;

export const Title = styled.Text<ButtonTextProps>`
  font-size: 15px;
  color: ${({ theme, light }) =>
    light ? theme.colors.header : theme.colors.background_secondary};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;
