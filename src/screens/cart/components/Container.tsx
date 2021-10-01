import React, {ReactNode} from 'react';
import {Dimensions} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

import {makeStyle, Theme} from '@config/theme';
import {generarteSnapPoint, clamp} from '@core/utils';

import {Box} from '@components';

const {width} = Dimensions.get('screen');
const height = (682 * width) / 375;
const minHeight = (228 * width) / 375;
const snapPoints = [-(height - minHeight), 0];

type Context = {
  offsetX: number;
  offsetY: number;
};

interface ShoppingCartContainerProps {
  children: ReactNode;
}

const ShoppingCartContainer = ({children}: ShoppingCartContainerProps) => {
  const styles = useStyles();

  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    Context
  >({
    onStart: (_, ctx) => {
      ctx.offsetY = translateY.value;
    },
    onActive: ({translationY}, ctx) => {
      translateY.value = clamp(
        ctx.offsetY + translationY,
        snapPoints[0],
        snapPoints[1],
      );
    },
    onEnd: ({velocityY}) => {
      const dest = generarteSnapPoint(translateY.value, velocityY, snapPoints);
      translateY.value = withSpring(dest, {
        velocity: velocityY,
        overshootClamping: true,
      });
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  return (
    <Box flex={1} backgroundColor="secondary">
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View style={[styles.bottomSheet, animatedStyle]}>
          {children}
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

const useStyles = makeStyle((theme: Theme) => ({
  bottomSheet: {
    backgroundColor: theme.colors.background,
    borderBottomLeftRadius: theme.spacing.xl,
    borderBottomRightRadius: theme.spacing.xl,
    height: height,
    left: 0,
    position: 'absolute',
    rigth: 0,
    top: 0,
    width: width,
  },
}));

export default ShoppingCartContainer;
