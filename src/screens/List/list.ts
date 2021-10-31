import { Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

export const Main = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primaryLight};
  padding-horizontal: ${width * 0.05}px;
`;

export const ContinentList = styled.View`
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.medium};
  margin-vertical:${height * 0.04}px;
  font-size: ${RFPercentage(2.2)}px;
`;

export const Table = styled.View`
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const NoFoundText = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${RFPercentage(1.8)}px;
  color: ${({theme}) => theme.colors.textLight};
`;

export const ShowAllButton = styled.TouchableOpacity``;

export const ShowAllText = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.regular};
  color: ${({theme}) => theme.colors.textBlue};
  text-decoration: underline;
  align-self: center;
  margin-top: ${height * 0.02}px;
`;

