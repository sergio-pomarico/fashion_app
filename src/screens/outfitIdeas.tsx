import React from 'react';

import {Box} from '@components';
import {AppRoutes, StackNavigationProps} from '@core/types';

const HomeScreen = ({}: StackNavigationProps<AppRoutes, 'OutfitIdeas'>) => {
  return <Box flex={1} backgroundColor="white" />;
};

export default HomeScreen;
