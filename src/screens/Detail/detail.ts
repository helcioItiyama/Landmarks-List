import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

export const Main = styled.View`
  flex: 1;
  padding-horizontal: ${width * 0.04}px;
`;

export const LandmarkList = styled.View`
  margin-top: ${height * 0.04}px;
`;
