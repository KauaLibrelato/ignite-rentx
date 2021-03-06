import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 100%;
  height: ${RFValue(126)}px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  padding-right: 22px;

  margin-bottom: 16px;
`;

export const Details = styled.View`
  margin-right: 20px;
`;

export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  text-transform: uppercase;
`;

export const Model = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const Price = styled.View`
  margin-right: 24px;
`;

export const Period = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const Amount = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const Type = styled.View`
  margin-top: 10px;
`;

export const CarImage = styled.Image`
  height: ${RFValue(85)}px;
  width: ${RFValue(167)}px;
  transform: rotateY(180deg);
`;
