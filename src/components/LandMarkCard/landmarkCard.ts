import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
  width: ${({ theme }) => theme.layout.iconSize}px;
  height: ${({ theme }) => theme.layout.iconSize}px;
  margin: ${({ theme }) => theme.layout.iconSpacing}px;
  border-radius: ${({ theme }) => theme.layout.iconSize}px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
`;
