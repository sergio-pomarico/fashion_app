import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

import {AppRoutes, StackNavigationProps} from '@core/types';

import {Box, Header, Text} from '@components';
import {aspectRatio, useTheme} from '@config/theme';
import {shoppingCartItems} from '@core/content';

import ShoppingCartContainerProps from './components/Container';
import Item from './components/Item';

const d = 'M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 Z';
const {width} = Dimensions.get('screen');
const height = 100 * aspectRatio;

const ShoppingCartScreen = ({
  navigation,
}: StackNavigationProps<AppRoutes, 'Cart'>) => {
  const theme = useTheme();
  const [items, setItems] = useState(shoppingCartItems);
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
        <Box flex={1}>
          <ScrollView
            style={{
              borderBottomLeftRadius: theme.spacing.xl,
              borderBottomRightRadius: theme.spacing.xl,
            }}
            contentContainerStyle={{paddingVertical: 50 * aspectRatio}}
            showsVerticalScrollIndicator={false}>
            {items.map((item, index) => (
              <Item
                item={item}
                key={item.id.toString()}
                onDelete={() => {
                  items.splice(index, 1);
                  setItems(items.concat());
                }}
              />
            ))}
          </ScrollView>
          <Box width={width} height={height} style={styles.curve}>
            <Svg viewBox="0 0 375 100" style={StyleSheet.absoluteFill}>
              <Path d={d} fill={theme.colors.primary} />
            </Svg>
            <Text variant="h2" color="background" textAlign="center">
              3 Items Added
            </Text>
          </Box>
        </Box>
      </Box>
    </ShoppingCartContainerProps>
  );
};

const styles = StyleSheet.create({
  curve: {
    top: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    height,
  },
});

export default ShoppingCartScreen;
