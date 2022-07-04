import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  width: 100%;
`;

export const IconContainer = styled.View`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const InputText = styled(TextInput)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 15px;
  padding: 0 23px;
`;

export const ChangePasswordVisibilityButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;