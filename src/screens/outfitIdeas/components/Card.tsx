import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';

import {Box} from '@components';

interface CardProps {
  position: number;
}

type Context = {
  offsetX: number;
  offsetY: number;
};

const {width: wWidth} = Dimensions.get('screen');
const width = wWidth * 0.75;
const height = width * (425 / 294);
const borderRadius = 24;

const mix = (value: number, x: number, y: number): number =>
  x * (1 - value) + y * value;

export const snapPoint = (
  value: number,
  velocity: number,
  points: ReadonlyArray<number>,
): number => {
  'worklet';
  const point = value + 0.2 * velocity;
  const deltas = points.map(p => Math.abs(point - p));
  const minDelta = Math.min.apply(null, deltas);
  return points.filter(p => Math.abs(point - p) === minDelta)[0];
};

const α = Math.PI / 12;
const A = Math.sin(α) * height + Math.cos(α) * width;
const snapPoints = [-A, 0, A];

const Card = ({position}: CardProps) => {
  const backgroundColor = interpolateColor(
    position,
    [0, 1],
    ['#C9E9E7', '#74BCb8'],
  );
  const translateOffsetY = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(translateOffsetY);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    Context
  >({
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: ({translationX, translationY}, ctx) => {
      translateX.value = ctx.offsetX + translationX;
      translateY.value = ctx.offsetY + translationY;
    },
    onEnd: ({velocityX, velocityY}) => {
      const dest = snapPoint(translateX.value, velocityX, snapPoints);
      translateX.value = withSpring(dest, {velocity: velocityX});
      translateY.value = withSpring(0, {velocity: velocityY});
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: translateY.value},
        {translateX: translateX.value},
        {scale},
      ],
    };
  });

  return (
    <Box
      style={StyleSheet.absoluteFillObject}
      justifyContent="center"
      alignItems="center">
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View
          style={[
            {
              backgroundColor,
              borderRadius,
              height,
              width,
            },
            rStyle,
          ]}
        />
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
