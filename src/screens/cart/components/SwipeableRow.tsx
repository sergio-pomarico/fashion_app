import {aspectRatio, useTheme} from '@config/theme';
import {generarteSnapPoint} from '@core/utils';
import React, {ReactNode} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Box, RoundedIcon, Text} from '@components';

type Context = {
  offsetX: number;
  offsetY: number;
};

interface SwipeableRowProps {
  children: ReactNode;
  onDelete: () => void;
  height: number;
}

const {width} = Dimensions.get('screen');
const finalDestination = width;

const SwipeableRow = ({children, onDelete, height}: SwipeableRowProps) => {
  const snapPoints = [-85 * aspectRatio, 0, width];
  const defaultHeight = useSharedValue(height);

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
          overshootClamping: true,
        },
        () => {
          if (dest === finalDestination) {
            defaultHeight.value = withTiming(
              0,
              {
                duration: 250,
              },
              () => {
                runOnJS(onDelete)();
              },
            );
          }
        },
      );
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: theme.colors.background,
      height: defaultHeight.value,
      transform: [{translateX: translateX.value}],
    };
  });

  const editStyle = useAnimatedStyle(() => {
    return {
      opacity: translateX.value < 0 ? 1 : 0,
      backgroundColor: '#BFEAF5',
    };
  });

  const deleteStyle = useAnimatedStyle(() => {
    return {
      alignContent: 'center',
      backgroundColor: '#FFD7D8',
      justifyContent: 'center',
      opacity: translateX.value > 0 ? 1 : 0,
    };
  });

  return (
    <View>
      <Animated.View style={[StyleSheet.absoluteFillObject, deleteStyle]}>
        <Box width={120}>
          <Text color="danger" variant="header" textAlign="center">
            Remove
          </Text>
        </Box>
      </Animated.View>
      <Animated.View style={[StyleSheet.absoluteFill, editStyle]}>
        <Box flex={1} justifyContent="center" alignItems="flex-end" padding="m">
          <RoundedIcon
            name="plus"
            backgroundColor="primary"
            color="background"
            size={24}
          />
          <RoundedIcon
            name="minus"
            backgroundColor="danger"
            color="background"
            size={24}
          />
        </Box>
      </Animated.View>
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View style={animatedStyle}>{children}</Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default SwipeableRow;
