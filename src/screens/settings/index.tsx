import React from 'react';
import {DrawerActions} from '@react-navigation/native';

import {AppRoutes, StackNavigationProps} from '@core/types';
import {Box, Header} from '@components';

import Notification from './components/Notification';
import Container from './components/Container';

const SettingsScreen = ({
  navigation,
}: StackNavigationProps<AppRoutes, 'Settings'>) => {
  return (
    <>
      <Container>
        <Box backgroundColor="background">
          <Header
            title={'notifications'}
            left={{
              icon: 'menu',
              onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()),
            }}
            right={{
              icon: 'shopping-bag',
              onPress: () => navigation.navigate('Cart'),
            }}
          />
          <Box padding="m">
            <Notification
              title="Outfit Ideas"
              description="Receive daily notifications"
            />
            <Notification
              title="Discounts & Sales"
              description="Buy the stuff you love for less"
            />
            <Notification
              title="Stock Notifications"
              description="If the product you 💜 comes back in stock"
            />
            <Notification
              title="New Stuff"
              description="Hear it first, wear it first"
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SettingsScreen;
