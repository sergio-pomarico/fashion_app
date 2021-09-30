import React from 'react';
import {AppRoutes, StackNavigationProps} from '@core/types';
import {DrawerActions} from '@react-navigation/native';

import {Box, Header} from '@components';

const ShoppingCartScreen = ({
  navigation,
}: StackNavigationProps<AppRoutes, 'Cart'>) => {
  return (
    <Box flex={1} backgroundColor="background">
      <Header
        title={'Shopping Cart'}
        left={{
          icon: 'menu',
          onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()),
        }}
      />
    </Box>
  );
};

export default ShoppingCartScreen;
