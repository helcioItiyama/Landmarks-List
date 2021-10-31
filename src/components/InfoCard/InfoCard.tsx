import React from 'react';
import { LandmarkDto } from '../../dtos/LandmarkDto';

import {
  Container,
  Row,
  Image,
  Column,
  Name,
  Label,
  Field,
  DescriptionLabel,
  Description,
} from './infoCard';

interface IInfoCard {
  info: LandmarkDto;
}

export const InfoCard: React.FC<IInfoCard> = ({ info }) => {
  return (
    <Container>
      <Row>
        <Image source={{ uri: info.image_url }} />
        <Column>
          <Name>{info.name}</Name>
          <Row>
            <Label>country: </Label>
            <Field>{info.country}</Field>
          </Row>
        </Column>
      </Row>
      <DescriptionLabel>Description</DescriptionLabel>
      <Description>{info.description}</Description>
      <Row>
        <Label>source: </Label>
        <Field>{info.from}</Field>
      </Row>
    </Container>
  );
};
