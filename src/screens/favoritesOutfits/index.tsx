import React from 'react';

import {Box, Header} from '@components';
import {AppRoutes, StackNavigationProps} from '@core/types';
import {DrawerActions} from '@react-navigation/native';

const FavoritesOutfitScreen = ({
  navigation,
}: StackNavigationProps<AppRoutes, 'FavoritesOutfits'>) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title={'Favorites Outfits'}
        left={{
          icon: 'menu',
          onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()),
        }}
        right={{icon: 'shopping-bag', onPress: () => {}}}
      />
    </Box>
  );
};

export default FavoritesOutfitScreen;
