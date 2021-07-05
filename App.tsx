import React from 'react';
import {ThemeProvider} from '@shopify/restyle';

import Navigation from '@navigation/main';
import theme from '@config/theme';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
