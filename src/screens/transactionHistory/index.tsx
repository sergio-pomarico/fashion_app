import React from 'react';
import {ScrollView} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

import {AppRoutes, StackNavigationProps} from '@core/types';
import {transactions} from '@core/content';
import {Box, Header, Text} from '@components';

import Graph from './components/Graph';
import Transaction from './components/Transaction';

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
      <Box padding="m">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end">
          <Box>
            <Text textTransform="uppercase" color="secondary" opacity={0.3}>
              Total Spent
            </Text>
            <Text variant="h1">$619,19</Text>
          </Box>
          <Box backgroundColor="primaryLight" borderRadius="l" padding="m">
            <Text color="primary">$619,19</Text>
          </Box>
        </Box>
        <Graph points={transactions} />
        <ScrollView>
          {transactions.map((transaction, index) => (
            <Transaction key={index} {...{transaction}} />
          ))}
        </ScrollView>
      </Box>
    </Box>
  );
};

export default TransactionHistoryScreen;
