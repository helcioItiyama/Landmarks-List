import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {NavigationContainer} from '@react-navigation/native';

import List from '../screens/List/List';
import Detail from '../screens/Detail/Detail';
import { LandmarkDto } from '../dtos/LandmarkDto';

export type RootStackParamList = {
  List: undefined;
  Detail: {
    landmark: LandmarkDto;
  };
};

export type MainStack = StackNavigationProp<RootStackParamList>;

const Stack = createSharedElementStackNavigator<RootStackParamList>();

export const Route: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="List">
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Detail" component={Detail} options={() => ({
          gestureEnabled: false,
          transitionSpec: {
            open: {animation: 'timing', config: {duration: 1000}},
            close: {animation: 'timing', config: {duration: 1000}},
          },
          cardStyleInterpolator: ({current: {progress}}) => {
            return {
              cardStyle:{
                opacity: progress,
              }
            }
          }
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
