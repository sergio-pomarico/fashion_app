import React from 'react';

import {Box} from '@components';
import {Image, StyleSheet, View} from 'react-native';
import {makeStyle, Theme} from '@config/theme';

const Background = ({}) => {
  const styles = useStyles();
  return (
    <View
      style={{
        ...(StyleSheet.absoluteFillObject as object),
      }}>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box flex={1} borderBottomRightRadius="xl" backgroundColor="white" />
      </Box>
      <Box flex={1 / 3}>
        <Box flex={1} backgroundColor="white" />
        <Box flex={1} backgroundColor="secondary" />
        <Image
          source={require('../../../assets/patterns/outfit.png')}
          style={styles.image}
        />
      </Box>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box flex={1} borderTopLeftRadius="xl" backgroundColor="secondary" />
      </Box>
    </View>
  );
};

const useStyles = makeStyle((theme: Theme) => ({
  image: {
    ...(StyleSheet.absoluteFillObject as object),
    height: undefined,
    width: undefined,
    borderTopLeftRadius: theme.borderRadii?.xl,
    borderBottomRightRadius: theme.borderRadii?.xl,
  },
}));

export default Background;
