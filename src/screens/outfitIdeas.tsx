import React from 'react';

import {Box, Header} from '@components';
import {AppRoutes, StackNavigationProps} from '@core/types';
import {DrawerActions} from '@react-navigation/native';

const OutfitIdeasScreen = ({
  navigation,
}: StackNavigationProps<AppRoutes, 'OutfitIdeas'>) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title={'outfit ideas'}
        left={{
          icon: 'menu',
          onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()),
        }}
        right={{icon: 'shopping-bag', onPress: () => {}}}
      />
    </Box>
  );
};

export default OutfitIdeasScreen;
