import React from 'react';

import {Box, Header} from '@components';
import {AppRoutes, StackNavigationProps} from '@core/types';
import {DrawerActions} from '@react-navigation/native';

const TransactionHistoryScreen = ({
  navigation,
}: StackNavigationProps<AppRoutes, 'OutfitIdeas'>) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title={'Transaction History'}
        left={{
          icon: 'menu',
          onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()),
        }}
        right={{icon: 'share', onPress: () => {}}}
      />
    </Box>
  );
};

export default TransactionHistoryScreen;
