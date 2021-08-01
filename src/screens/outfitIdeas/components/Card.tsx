import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {Box} from '@components';

interface CardProps {
  position: number;
}

const {width: wWidth} = Dimensions.get('screen');
const width = wWidth * 0.75;
const height = width * (425 / 294);
const borderRadius = 24;

const mix = (value: number, x: number, y: number): number =>
  x * (1 - value) + y * value;

const Card = ({position}: CardProps) => {
  const pos = useSharedValue(position);
  const translateX = useSharedValue(0);
  const backgroundColor = interpolateColor(
    pos.value,
    [0, 1],
    ['#C9E9E7', '#74BCb8'],
  );
  const translateY = mix(pos.value, 0, -50);
  const scale = mix(pos.value, 1, 0.9);

  const rStyle = useAnimatedStyle(() => {
    return {
      backgroundColor,
      borderRadius,
      height,
      width,
      transform: [
        {
          translateX: translateX.value,
        },
        {scale},
        {translateY},
      ],
    };
  });
  return (
    <Box
      style={StyleSheet.absoluteFillObject}
      justifyContent="center"
      alignItems="center">
      <PanGestureHandler>
        <Animated.View style={rStyle} />
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
