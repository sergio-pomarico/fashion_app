import React from 'react';
import {ThemeProvider} from '@shopify/restyle';

import Navigation from './src/navigation';
import theme from './src/config/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
