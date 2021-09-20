import React from 'react';
import {DrawerActions} from '@react-navigation/native';

import {AppRoutes, StackNavigationProps} from '@core/types';
import {Box, Header} from '@components';

const SettingsScreen = ({
  navigation,
}: StackNavigationProps<AppRoutes, 'Settings'>) => {
  return (
    <Box flex={1} backgroundColor="background">
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

export default SettingsScreen;
