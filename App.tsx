import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import ExpoLoading from 'expo-app-loading';
import theme from './src/global/styles/theme';
import { Route } from './src/routes/Route';

export const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <ExpoLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor={theme.colors.secondary} />
        <Route />
      </ThemeProvider>
    </SafeAreaView>
  );
};
