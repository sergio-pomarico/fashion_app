import React, {ReactNode} from 'react';
import {Dimensions, StyleSheet, Image, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

import {useTheme} from '@config/theme';
// import {Box} from '@components';

interface ContainerWithFooterProps {
  children?: ReactNode;
}

const viewBox = {
  width: 375,
  height: 100,
};

const {width} = Dimensions.get('screen');
const height = (100 * width) / viewBox.width;

const d = 'M 0 0 H 375 A 50 50 0 0 1 325 50 H 50 A 50 50 0 0 0 0 100';

const ContainerWithFooter = ({children}: ContainerWithFooterProps) => {
  const theme = useTheme();
  return (
    <>
      <View style={styles.background}>
        <Image
          source={require('../../../assets/patterns/settings.png')}
          style={styles.image}
        />
      </View>
      {children}
      <Svg
        width={width}
        height={height}
        viewBox={[0, 0, viewBox.width, viewBox.height].join(' ')}>
        <Path fill={theme.colors.background} d={d} />
      </Svg>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  image: {
    width,
    height: (width * 1504) / 1125,
  },
});

export default ContainerWithFooter;
