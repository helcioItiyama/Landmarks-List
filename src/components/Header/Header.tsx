import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

import theme from '../../global/styles/theme';

import {Container, Title, GoBackButton} from './header';

interface IHeader {
  title: string;
  onBackButtonPress?: () => void;
}

export const Header: React.FC<IHeader> = ({title, onBackButtonPress}) => {
  const renderBackButton = () => {
    if(!!onBackButtonPress) {
      return (
        <GoBackButton onPress={onBackButtonPress}>
          <Ionicons size={RFPercentage(3)} name="arrow-back" color={theme.colors.textWhite}/>
        </GoBackButton>
      )
    }

  }

  return (
    <Container>
      {renderBackButton()}
      <Title>{title}</Title>
    </Container>
  );
}
