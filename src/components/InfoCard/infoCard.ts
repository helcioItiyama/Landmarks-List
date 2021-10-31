import { Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  align-self: center;
  margin-top: ${height * 0.02}px;
  width: ${width * 0.92}px;
  height: ${height * 0.7}px;
  border-radius: ${width * 0.06}px;
  background-color: ${({theme}) => theme.colors.primaryMedium};
  padding: ${width * 0.06}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: ${width * 0.2}px;
  height: ${width * 0.2}px;
`;

export const Column = styled.View`
  margin-left: ${width * 0.06}px;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.bold};
  font-size: ${RFPercentage(2.4)}px;
  color: ${({theme}) => theme.colors.secondary};
  text-decoration: underline;
  margin-bottom: ${height * 0.01}px;
`;

export const Label = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.medium};
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFPercentage(2)}px;
`;

export const Field = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.regular};
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFPercentage(2)}px;
`;

export const DescriptionLabel = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.medium};
  color: ${({theme}) => theme.colors.secondary};
  margin-top: ${height * 0.04}px;
  margin-bottom: ${height * 0.02}px;
  font-size: ${RFPercentage(2.4)}px;
`;

export const Description = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.regular};
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFPercentage(2)}px;
  line-height: ${RFPercentage(2.8)}px;
  text-align: justify;
  flex: 1;
`;

