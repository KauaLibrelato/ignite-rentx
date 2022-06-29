import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
  padding-top: ${getStatusBarHeight() + 52}px;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.background_secondary};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  padding: 40px 0 16px 0;
`;

export const Message = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  text-align: center;
  line-height: 25px;
`;

export const Footer = styled.View`
  padding: 80px 148px;
`;
