import React from 'react';

import {StyleSheet} from 'react-native';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';

interface DotProps {
  index: number;
  currentIndex: number;
}

const Dot = ({index, currentIndex}: DotProps) => {
  const opacity = interpolate(
    currentIndex,
    [index - 1, index, index + 1],
    [0.5, 1, 0.5],
    Extrapolate.CLAMP,
  );
  const scale = interpolate(
    currentIndex,
    [index - 1, index, index + 1],
    [1, 1.25, 1],
    Extrapolate.CLAMP,
  );
  return (
    <Animated.View style={[styles.dot, {opacity, transform: [{scale}]}]} />
  );
};

const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#2CB9B0',
    borderRadius: 4,
    height: 8,
    margin: 4,
    width: 8,
  },
});

export default Dot;
