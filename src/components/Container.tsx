import React, {ReactNode} from 'react';
import {Image, Dimensions, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useTheme} from '@config/theme';
import {Box} from '@components';

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2 | 3;
}

const {width, height: sHeight} = Dimensions.get('screen');

const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

export const patterns = [
  require('../assets/patterns/1.png'),
  require('../assets/patterns/2.png'),
  require('../assets/patterns/3.png'),
  require('../assets/patterns/4.png'),
];

const Container = ({children, footer, pattern}: ContainerProps) => {
  const asset = patterns[pattern];
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box height={sHeight} backgroundColor="secondary">
        <Box backgroundColor="background">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.65}>
            <Image
              source={asset}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={asset}
            style={{
              width,
              height,
              ...(StyleSheet.absoluteFill as object),
              top: -height * 0.65,
            }}
          />
          <Box
            flex={1}
            backgroundColor="background"
            borderRadius="xl"
            borderTopLeftRadius={0}>
            {children}
          </Box>
        </Box>
        <Box
          backgroundColor="secondary"
          style={{paddingBottom: insets.bottom}}
          paddingTop="l">
          {footer}
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
