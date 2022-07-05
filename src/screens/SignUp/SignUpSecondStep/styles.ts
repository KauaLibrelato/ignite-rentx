import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const HeaderTop = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 24}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Steps = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  margin: 64px 0 16px 0;
`;

export const Description = styled.Text`
  margin-bottom: 24px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const Footer = styled.View`
  width: 100%;
`;

export const HeaderLow = styled.View`
  width: 100%;
  margin-top: 48px;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  margin-bottom: 25px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  line-height: 25px;
`;
