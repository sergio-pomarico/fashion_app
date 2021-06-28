import React from 'react';
import {ThemeProvider} from '@shopify/restyle';

import Navigation from '@navigation/main';
import theme from '@config/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
