import React, {FC, ReactNode} from 'react';
import {View, Dimensions} from 'react-native';
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

import {aspectRatio, makeStyle, Theme} from '@config/theme';
import {generarteSnapPoint, clamp} from '@core/utils';

import {Box} from '@components';

const {width} = Dimensions.get('screen');
const height = 682 * aspectRatio;
const minHeight = 228 * aspectRatio;
const snapPoints = [-(height - minHeight), 0];

type Context = {
  offsetX: number;
  offsetY: number;
};

interface ShoppingCartContainerProps {
  children: ReactNode;
  Checkout: FC<{minHeight: number}>;
}

const ShoppingCartContainer = ({
  children,
  Checkout,
}: ShoppingCartContainerProps) => {
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
        //overshootClamping: true,
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
      <Checkout minHeight={minHeight} />
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View style={[styles.bottomSheet, animatedStyle]}>
          {children}
          <View style={styles.noScrollable}>
            <Box
              height={5 * aspectRatio}
              width={60 * aspectRatio}
              backgroundColor="grey"
              borderRadius="s"
            />
          </View>
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
  noScrollable: {
    alignItems: 'center',
    borderBottomLeftRadius: theme.spacing.xl,
    borderBottomRightRadius: theme.spacing.xl,
    bottom: 0,
    height: theme.spacing.xl,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    rigth: 0,
    width: width,
  },
}));

export default ShoppingCartContainer;
