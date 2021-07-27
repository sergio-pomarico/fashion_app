import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from '@navigation/main';
import theme from '@config/theme';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
