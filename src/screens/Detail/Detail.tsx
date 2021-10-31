import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Animated } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { landmarks } from '../../services/data';
import { Header } from '../../components/Header/Header';
import { MainStack, RootStackParamList } from '../../routes/Route';
import { LandmarkCard } from '../../components/LandMarkCard/LandmarkCard';

import { Container, Main, LandmarkList } from './detail';
import { InfoCard } from '../../components/InfoCard/InfoCard';
import { LandmarkDto } from '../../dtos/LandmarkDto';
import { SharedElement } from 'react-navigation-shared-element';

interface IDetail {
  navigation: MainStack;
  route: RouteProp<RootStackParamList, 'Detail'>
}

function Detail({navigation, route}: IDetail) {
  const [pickedLandmark, setPickedLandmark] = useState<LandmarkDto>({} as LandmarkDto);
  
  const {landmark} = route.params;
  const landmarkRef = useRef(null);
  const selectedItemIndex = landmarks.findIndex(each => each.id === landmark.id);
  const mountedAnimated = useRef(new Animated.Value(0)).current;
  const activeIndex = useRef(new Animated.Value(selectedItemIndex)).current;
  const activeIndexAnimation = useRef(new Animated.Value(selectedItemIndex)).current;

  const animation = (toValue: number, delay: number) => (
    Animated.timing(mountedAnimated, {
      toValue,
      duration: 500,
      delay,
      useNativeDriver:true,
    })
  )

  useEffect(() => {
    Animated.parallel([
      Animated.timing(activeIndexAnimation, {
        toValue: activeIndex,
        duration: 300,
        useNativeDriver: true,
      }),
      animation(1, 1000),
    ]).start();
  }, [])

  useEffect(() => {
    setPickedLandmark(landmark);
  }, []);

  const goBack = () => {
    navigation.goBack()
  }

  const onPressLandmark = (item: LandmarkDto) => {
    setPickedLandmark(item);
  }

  return (
    <Container>
      <Header
        onBackButtonPress={goBack}
        title={'LANDMARKS INFORMATION'}
      />
      <Main>
        <LandmarkList>
        <FlatList
          ref={landmarkRef}
          data={landmarks}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <SharedElement id={`item.${item.id}.icon`}>
              <LandmarkCard landmark={item} {...{onPressLandmark, pickedLandmark}}/>
            </SharedElement>
          )}
        />
        <InfoCard info={pickedLandmark}/>
        </LandmarkList>
      </Main>
    </Container>
  );
}

Detail.sharedElements = () => {
  return landmarks.map(item => `item.${item.id}.icon`)
}

export default Detail;