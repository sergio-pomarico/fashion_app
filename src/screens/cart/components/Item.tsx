import React from 'react';
import {StyleSheet} from 'react-native';

import {Box, Text} from '@components';
import {shoppingCartItems} from '@core/content';

import SwipeableRow from './SwipeableRow';

interface ItemProps {
  item: typeof shoppingCartItems[0];
  onDelete: () => void;
}

const Item = ({item, onDelete}: ItemProps) => {
  return (
    <SwipeableRow onDelete={onDelete}>
      <Box padding="m" flexDirection="row">
        <Box
          width={120}
          height={120}
          backgroundColor="drawer2"
          borderRadius="m"
        />
        <Box padding="m" flex={1}>
          <Text variant="header">Size {item.sizes.toString()}</Text>
          <Text variant="h3" marginBottom="s">
            {item.name}
          </Text>
          <Text variant="h3" color="primary">
            {item.price}
          </Text>
        </Box>
        <Box justifyContent="center">
          <Box backgroundColor="secondary" style={styles.quantity}>
            <Text variant="h3" color="background">
              x2
            </Text>
          </Box>
        </Box>
      </Box>
    </SwipeableRow>
  );
};

const styles = StyleSheet.create({
  quantity: {
    alignItems: 'center',
    borderRadius: 12,
    height: 24,
    justifyContent: 'center',
    width: 24,
  },
});

export default Item;
