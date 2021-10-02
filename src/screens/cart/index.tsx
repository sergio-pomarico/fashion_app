import React from 'react';
import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

import {AppRoutes, StackNavigationProps} from '@core/types';

import {Box, Header, Text} from '@components';
import {aspectRatio, useTheme} from '@config/theme';

import ShoppingCartContainerProps from './components/Container';
import Item from './components/Item';

const d = 'M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 Z';
const {width} = Dimensions.get('screen');
const height = 100 * aspectRatio;

const ShoppingCartScreen = ({
  navigation,
}: StackNavigationProps<AppRoutes, 'Cart'>) => {
  const theme = useTheme();
  return (
    <ShoppingCartContainerProps>
      <Box flex={1}>
        <Box backgroundColor="primary">
          <Header
            title={'Shopping Cart'}
            dark
            left={{
              icon: 'arrow-left',
              onPress: () => navigation.goBack(),
            }}
          />
        </Box>
        <Box width={width} height={height}>
          <Svg viewBox="0 0 375 100" style={StyleSheet.absoluteFill}>
            <Path d={d} fill={theme.colors.primary} />
          </Svg>
          <Text variant="h2" color="background" textAlign="center">
            3 Items Added
          </Text>
        </Box>
        <ScrollView
          style={{
            borderBottomLeftRadius: theme.spacing.xl,
            borderBottomRightRadius: theme.spacing.xl,
          }}>
          <Item />
          <Item />
          <Item />
          <Item />
        </ScrollView>
      </Box>
    </ShoppingCartContainerProps>
  );
};

export default ShoppingCartScreen;
