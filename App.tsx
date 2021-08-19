import React from 'react';
import {ThemeProvider} from '@config/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from '@navigation/main';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <ThemeProvider>
      <StatusBar barStyle="light-content" />
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
