import React from 'react';

import { ContinentDto } from '../../dtos/ContinentDto';

import { Container, Name } from './continentCard';

interface IContinentCard {
  continent: ContinentDto;
  showLandmarksByContinent: (name: string) => void;
}

export const ContinentCard: React.FC<IContinentCard> = ({
  continent,
  showLandmarksByContinent,
}) => {
  return (
    <Container onPress={() => showLandmarksByContinent(continent.name)}>
      <Name>{continent?.name}</Name>
    </Container>
  );
};
