import React, {useState} from 'react';

import {Box, Header} from '@components';
import {AppRoutes, StackNavigationProps} from '@core/types';
import {DrawerActions} from '@react-navigation/native';
import {ScrollView, Dimensions} from 'react-native';
import {outfits} from '@core/content';

import Footer from './components/Footer';
import Outfit from './components/Outfit';
import TopCurve from './components/TopCurve';
import {useTheme} from '@config/theme';

const {width: wWidth} = Dimensions.get('screen');

const FavoritesOutfitScreen = ({
  navigation,
}: StackNavigationProps<AppRoutes, 'FavoritesOutfits'>) => {
  const theme = useTheme();
  const [outfitsList, setOutfitsList] = useState(outfits);
  const [footerHeight, setFooterHeight] = useState(0);
  const width = (wWidth - theme.spacing.m * 3) / 2;
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
      <Box flex={1}>
        <ScrollView
          contentContainerStyle={{
            padding: theme.spacing.m,
            paddingBottom: footerHeight,
          }}>
          <Box flexDirection="row">
            <Box marginRight="m">
              {outfitsList
                .filter((_, i) => i % 2 !== 0)
                .map(outfit => (
                  <Outfit outfit={outfit} {...{width}} key={outfit.id} />
                ))}
            </Box>
            <Box>
              {outfitsList
                .filter((_, i) => i % 2 === 0)
                .map(outfit => (
                  <Outfit outfit={outfit} {...{width}} key={outfit.id} />
                ))}
            </Box>
          </Box>
        </ScrollView>
      </Box>
      <TopCurve {...{footerHeight}} />
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        onLayout={({
          nativeEvent: {
            layout: {height},
          },
        }) => setFooterHeight(height)}>
        <Footer
          onPress={() => {
            setOutfitsList(outfitsList.filter(_outfits => !_outfits.selected));
          }}
          label="Add to favorites"
        />
      </Box>
    </Box>
  );
};

export default FavoritesOutfitScreen;
