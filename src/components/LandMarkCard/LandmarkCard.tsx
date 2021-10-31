import React from 'react';

import { LandmarkDto } from '../../dtos/LandmarkDto';

import { Container, Image } from './landmarkCard';

interface ILandmarkCard {
  landmark: LandmarkDto;
  pickedLandmark?: LandmarkDto;
  onPressLandmark: (item: LandmarkDto) => void;
}

export const LandmarkCard: React.FC<ILandmarkCard> = ({landmark, pickedLandmark, onPressLandmark}) => {
  return (
    <Container picked={pickedLandmark?.id === landmark.id} onPress={() => onPressLandmark(landmark)}>
      <Image source={{uri: landmark?.image_url }}/>
    </Container>
  );
}
