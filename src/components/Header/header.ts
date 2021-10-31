import { Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
  height: ${height * 0.1}px;
`;

export const GoBackButton = styled.TouchableOpacity`
  position: absolute;
  left: ${width * 0.04}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.bold};
  color: ${({theme}) => theme.colors.textWhite};
  font-size: ${RFPercentage(2.1)}px;
`;
