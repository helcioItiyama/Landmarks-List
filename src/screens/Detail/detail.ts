import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

interface LandmarkProps {
  length: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

export const LandmarkList = styled(Animated.View)<LandmarkProps>`
  flex-direction: row;
  width: ${({ length, theme }) =>
    length * (theme.layout.iconSize + theme.layout.iconSpacing * 2)}px;
  flex-wrap: nowrap;
  margin-top: ${height * 0.04}px;
`;
