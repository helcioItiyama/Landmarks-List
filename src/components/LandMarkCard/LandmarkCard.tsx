import React from 'react';

import { LandmarkDto } from '../../dtos/LandmarkDto';

import { Container, Image } from './landmarkCard';

interface ILandmarkCard {
  landmark: LandmarkDto;
  onPress: () => void;
}

export const LandmarkCard: React.FC<ILandmarkCard> = ({
  landmark,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <Image source={{ uri: landmark?.image_url }} />
    </Container>
  );
};
