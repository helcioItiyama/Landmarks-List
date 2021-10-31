import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) =>theme.colors.primary};
  height: ${height * 0.1}px;
  width: ${width * 0.3}px;
  border-radius: ${width * 0.06}px;
  align-items: center;
  justify-content: center;
  margin-right: ${width * 0.02}px;
`;  

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.medium};
  color:${({theme}) => theme.colors.primaryLight};
`;