import React, {useCallback, useState} from 'react';
import {DrawerActions} from '@react-navigation/native';
import {interpolate} from 'react-native-reanimated';

import {AppRoutes, StackNavigationProps} from '@core/types';
import {cards} from '@core/content';
import {Box, Header} from '@components';

import Background from './components/Background';
import Card from './components/Card';
import Categories from './components/Categories';

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
                position={interpolate(
                  id,
                  [currentIndex, cards.length - 1],
                  [0, 1],
                )}
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
