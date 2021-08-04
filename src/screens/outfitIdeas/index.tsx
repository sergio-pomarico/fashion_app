import React, {useCallback, useState} from 'react';

import {Box, Header} from '@components';
import {AppRoutes, StackNavigationProps} from '@core/types';
import {DrawerActions} from '@react-navigation/native';

import Background from './components/Background';
import Card from './components/Card';
import Categories from './components/Categories';

import {cards} from '@core/content';
import {interpolate} from 'react-native-reanimated';

const OutfitIdeasScreen = ({
  navigation,
}: StackNavigationProps<AppRoutes, 'OutfitIdeas'>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onSwipe = useCallback(() => {
    setCurrentIndex(prev => prev + 1);
  }, []);
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
      <Categories />
      <Box flex={1}>
        <Background />
        {cards.map(
          ({id}) =>
            id >= currentIndex && (
              <Card
                position={interpolate(id, [0, cards.length - 1], [0, 1])}
                key={id}
                {...{onSwipe}}
              />
            ),
        )}
      </Box>
    </Box>
  );
};

export default OutfitIdeasScreen;
