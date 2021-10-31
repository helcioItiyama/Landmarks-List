import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

const {width} = Dimensions.get('window');

type Props = {
  picked: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  width: ${width * 0.15}px;
  height: ${width * 0.15}px;
  margin-right: ${width * 0.03}px;
  margin-bottom: ${width * 0.05}px;
  border-width: ${({picked}) => picked ? width * 0.008 : 0}px;
  border-radius: ${width * 0.15}px;
  padding: ${width * 0.005}px;
  border-color: ${({picked, theme}) => picked ? theme.colors.secondary : 'transparent'};
`;

export const Image = styled.Image.attrs({
  resizeMode:'contain',
})`
  width: 100%;
  height: 100%;
`;