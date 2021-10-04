import React from 'react';

import {Box, Text} from '@components';
import {StyleSheet} from 'react-native';

interface ItemProps {}

const Item = ({}: ItemProps) => {
  return (
    <Box padding="m" flexDirection="row">
      <Box
        width={120}
        height={120}
        backgroundColor="drawer2"
        borderRadius="m"
      />
      <Box padding="m" flex={1}>
        <Text variant="header">Size M,L</Text>
        <Text variant="h3" marginBottom="s">
          Short Sleeve Organic Top
        </Text>
        <Text variant="h3" color="primary">
          $29,99
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
