import React, { useEffect, useRef } from 'react';
import {
  Animated,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { SharedElement } from 'react-navigation-shared-element';
import { landmarks } from '../../services/data';
import { Header } from '../../components/Header/Header';
import { LandmarkCard } from '../../components/LandMarkCard/LandmarkCard';
import { InfoCard } from '../../components/InfoCard/InfoCard';
import { MainStack, RootStackParamList } from '../../routes/Route';

import { Container, LandmarkList } from './detail';
import theme from '../../global/styles/theme';

interface IDetail {
  navigation: MainStack;
  route: RouteProp<RootStackParamList, 'Detail'>;
}

const { width } = Dimensions.get('window');

const Detail = ({ navigation, route }: IDetail) => {
  const { landmark } = route.params;
  const { iconSize, iconSpacing } = theme.layout;
  const landmarkRef = useRef<FlatList>(null);
  const selectedItemIndex = landmarks.findIndex(
    each => each.id === landmark.id,
  );
  const mountedAnimated = useRef(new Animated.Value(0)).current;
  const activeIndex = useRef(new Animated.Value(selectedItemIndex)).current;
  const activeIndexAnimation = useRef(
    new Animated.Value(selectedItemIndex),
  ).current;

  const animation = (toValue: number, delay = 0) =>
    Animated.timing(mountedAnimated, {
      toValue,
      duration: 500,
      delay,
      useNativeDriver: true,
    });

  useEffect(() => {
    Animated.parallel([
      Animated.timing(activeIndexAnimation, {
        toValue: activeIndex,
        duration: 300,
        useNativeDriver: true,
      }),
      animation(1, 500),
    ]).start();
  });

  const size = iconSize + iconSpacing * 2;

  const translateY = mountedAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  const translateX = activeIndexAnimation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [size, 0, -size],
  });

  const handleChangeIndex = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const newIndex = Math.floor(
      event.nativeEvent.contentOffset.x / (width - iconSpacing),
    );
    activeIndex.setValue(newIndex);
  };

  const renderLandmarks = () => {
    if (landmarks.length) {
      return landmarks.map((land, index) => {
        const inputRange = [index - 1, index, index + 1];
        const opacity = activeIndexAnimation.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <SharedElement key={land.id} id={`item.${land.id}.icon`}>
            <Animated.View style={{ opacity }}>
              <LandmarkCard
                onPress={() => {
                  activeIndex.setValue(index);
                  landmarkRef?.current?.scrollToIndex({
                    index,
                    animated: true,
                  });
                }}
                landmark={land}
              />
            </Animated.View>
          </SharedElement>
        );
      });
    }
    return null;
  };

  return (
    <Container>
      <Header
        onBackButtonPress={() => {
          animation(0).start(() => {
            navigation.goBack();
          });
        }}
        title="LANDMARKS INFORMATION"
      />
      <LandmarkList
        length={landmarks.length}
        style={{
          marginLeft: width / 2 - iconSize / 2 - iconSpacing,
          transform: [{ translateX }],
        }}
      >
        {renderLandmarks()}
      </LandmarkList>
      <Animated.FlatList
        ref={landmarkRef}
        data={landmarks}
        style={{ opacity: mountedAnimated, transform: [{ translateY }] }}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        initialScrollIndex={selectedItemIndex}
        onMomentumScrollEnd={handleChangeIndex}
        keyExtractor={item => item.id}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        renderItem={({ item }) => <InfoCard info={item} />}
      />
    </Container>
  );
};

Detail.sharedElements = () => {
  return landmarks.map(item => `item.${item.id}.icon`);
};

export default Detail;
