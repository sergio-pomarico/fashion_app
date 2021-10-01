import React from 'react';

import {AppRoutes, StackNavigationProps} from '@core/types';

import {Box} from '@components';

import ShoppingCartContainerProps from './components/Container';

const ShoppingCartScreen = ({}: StackNavigationProps<AppRoutes, 'Cart'>) => {
  return (
    <ShoppingCartContainerProps>
      <Box />
    </ShoppingCartContainerProps>
  );
};

export default ShoppingCartScreen;
