import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

interface ButtonProps extends TouchableOpacityProps {
  color: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  padding: 19px;

  align-items: center;
  justify-content: center;

  background-color: ${({ color, theme }) =>
    color ? color : theme.colors.main};
`;

export const Title = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;
