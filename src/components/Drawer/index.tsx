import React from 'react';
import {Box, Text, Header} from '@components';
import {Dimensions, Image, StyleSheet} from 'react-native';

import DrawerItem from './Item';
import {menu} from '@core/content';
import {Theme, useTheme} from '@config/theme';
import {DrawerActions} from '@react-navigation/native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

const {width} = Dimensions.get('screen');

export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 560 / 1125;
const height = width * aspectRatio;
const drawerBG = require('../../assets/patterns/drawer.jpg');

const Drawer = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  const theme = useTheme();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          backgroundColor="secondary"
          borderBottomRightRadius="xl"
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          top={0}
          alignItems="center">
          <Header
            dark={true}
            title={'MY PROFILE'}
            left={{
              icon: 'x',
              onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()),
            }}
            right={{icon: 'shopping-bag', onPress: () => {}}}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box backgroundColor="secondary" flex={1} />
        <Box backgroundColor="secondary" flex={1} />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          top={0}
          justifyContent="center"
          padding="xl"
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl">
          <Box
            position="absolute"
            top={-50}
            alignSelf="center"
            width={100}
            height={100}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{borderRadius: 50}}
            backgroundColor="primary"
          />
          <Box marginTop="xl">
            <Text variant="h1">Mike Peter</Text>
            <Text variant="body" textAlign="center">
              mike@flexinstudio.com
            </Text>
          </Box>
          {menu.map(item => (
            <DrawerItem
              key={item.screen.toLowerCase()}
              icon={item.icon}
              color={item.color as keyof Theme['colors']}
              screen={item.screen}
              label={item.label}
            />
          ))}
        </Box>
      </Box>
      <Box
        flex={0.1}
        backgroundColor="white"
        borderTopLeftRadius="xl"
        width={DRAWER_WIDTH}
        overflow="hidden">
        <Image
          source={drawerBG}
          style={{
            ...(StyleSheet.absoluteFill as object),
            height,
            width: DRAWER_WIDTH,
            borderTopLeftRadius: theme.borderRadii?.xl,
          }}
        />
      </Box>
    </Box>
  );
};
export default Drawer;
