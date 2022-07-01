import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(273)}px;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: space-between;
  padding: ${getStatusBarHeight() + 24}px 24px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.background_secondary};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  margin-top: 24px;
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.background_secondary};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const Appointments = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 24px 29px 24px;
  align-items: center;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const Count = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const CarWrapper = styled.View`
  margin-bottom: 16px;
  padding: 0 24px;
`;

export const CarFooter = styled.View`
  width: 100%;
  padding: 12px;
  margin-top: -10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const CarFooterTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
`;

export const CarFooterDate = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 13px;
`;
