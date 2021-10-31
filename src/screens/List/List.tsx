import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';

import { ContinentCard } from '../../components/ContinentCard/ContinentCard';
import { Header } from '../../components/Header/Header';
import { LandmarkCard } from '../../components/LandMarkCard/LandmarkCard';
import { LandmarkDto } from '../../dtos/LandmarkDto';
import { MainStack } from '../../routes/Route';
import { continents, landmarks } from '../../services/data';

import {
  Container,
  Main,
  ContinentList,
  NoFoundText,
  ShowAllButton,
  ShowAllText,
  Title,
  Table,
} from './list';

interface IList {
  navigation: MainStack;
}

const List = ({ navigation }: IList) => {
  const [filteredLandmarks, setFilteredLandmarks] = useState<LandmarkDto[]>([]);

  useFocusEffect(
    useCallback(() => {
      setFilteredLandmarks(landmarks);
    }, []),
  );

  const showLandmarksByContinent = (name: string) => {
    if (name) {
      const filtered = landmarks.filter(
        landmark => landmark.continent === name,
      );
      setFilteredLandmarks(filtered);
      return;
    }
    setFilteredLandmarks(landmarks);
  };

  const onPressLandmark = (landmark: LandmarkDto) => {
    navigation.push('Detail', { landmark });
  };

  const showAllLandmarks = () => {
    setFilteredLandmarks(landmarks);
  };

  const renderLandmarks = () => {
    if (filteredLandmarks.length) {
      return filteredLandmarks.map(landmark => (
        <SharedElement key={landmark.id} id={`item.${landmark.id}.icon`}>
          <LandmarkCard
            onPress={() => onPressLandmark(landmark)}
            {...{ landmark, onPressLandmark }}
          />
        </SharedElement>
      ));
    }
    return <NoFoundText>No landmark found...</NoFoundText>;
  };

  return (
    <Container>
      <Header title="WORLD LANDMARKS" />
      <Main>
        <Title>Filter the landmarks by continent:</Title>
        <ContinentList>
          <FlatList
            data={continents}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <ContinentCard
                continent={item}
                {...{ showLandmarksByContinent }}
              />
            )}
          />
        </ContinentList>
        <ShowAllButton onPress={showAllLandmarks}>
          <ShowAllText>show all landmarks</ShowAllText>
        </ShowAllButton>
        <Title>World landmarks:</Title>
        <Table>{renderLandmarks()}</Table>
      </Main>
    </Container>
  );
};

export default List;
