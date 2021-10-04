import {aspectRatio, useTheme} from '@config/theme';
import {generarteSnapPoint} from '@core/utils';
import React, {ReactNode} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type Context = {
  offsetX: number;
  offsetY: number;
};

interface SwipeableRowProps {
  children: ReactNode;
}

const {width} = Dimensions.get('screen');
const finalDestination = width;

const SwipeableRow = ({children}: SwipeableRowProps) => {
  const snapPoints = [-85 * aspectRatio, 0, width];

  const theme = useTheme();
  const translateX = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    Context
  >({
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value;
    },
    onActive: ({translationX}, _) => {
      translateX.value = translationX;
    },
    onEnd: ({velocityX}) => {
      const dest = generarteSnapPoint(translateX.value, velocityX, snapPoints);
      translateX.value = withSpring(
        dest,
        {
          velocity: velocityX,
        },
        () => {
          if (dest === finalDestination) {
          }
        },
      );
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: theme.colors.background,
      transform: [{translateX: translateX.value}],
    };
  });

  return (
    <View>
      <View style={{...StyleSheet.absoluteFillObject}} />
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View style={animatedStyle}>{children}</Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default SwipeableRow;
