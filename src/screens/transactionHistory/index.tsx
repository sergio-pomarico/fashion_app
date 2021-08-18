import React from 'react';
import {ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

import {AppRoutes, StackNavigationProps} from '@core/types';
import {makeStyle, Theme} from '@config/theme';
import {transactions} from '@core/content';
import {Box, Header, Text} from '@components';

import Graph from './components/Graph';
import Transaction from './components/Transaction';
import TopCurve from './components/TopCurve';

const FOOTER_HEIGHT = Dimensions.get('screen').width / 3;

const intialDate = '2020-10-01T00:00:00.000-05:00';
const numberOfMonths = 6;

const TransactionHistoryScreen = ({
  navigation,
}: StackNavigationProps<AppRoutes, 'OutfitIdeas'>) => {
  const styles = useStyles();
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
      <Box padding="m" flex={1}>
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
        <Graph points={transactions} {...{intialDate, numberOfMonths}} />
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {transactions.map((transaction, index) => (
            <Transaction key={index} {...{transaction}} />
          ))}
        </ScrollView>
      </Box>
      <TopCurve footerHeight={FOOTER_HEIGHT} />
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        height={FOOTER_HEIGHT}>
        <Image
          source={require('../../assets/patterns/1.png')}
          style={styles.footer}
        />
      </Box>
    </Box>
  );
};

const useStyles = makeStyle((theme: Theme) => ({
  footer: {
    ...(StyleSheet.absoluteFill as object),
    borderTopLeftRadius: theme.borderRadii?.xl,
    height: undefined,
    width: undefined,
  },
  scrollView: {
    paddingBottom: FOOTER_HEIGHT,
  },
}));

export default TransactionHistoryScreen;
