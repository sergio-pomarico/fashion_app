import React, {ReactNode} from 'react';

import {useTheme} from '@config/theme';
import {Box} from '@components';
import {Image, Dimensions, StyleSheet, Platform} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const isIOS = Platform.OS === 'ios';

const {width, height: sHeight} = Dimensions.get('screen');

const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

export const patterns = [require('../assets/login-pattern.png')];

const Container = ({children, footer}: ContainerProps) => {
  const theme = useTheme();
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box height={sHeight} backgroundColor="secondary">
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.65}>
            <Image
              source={patterns[0]}
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
            source={patterns[0]}
            style={{
              width,
              height,
              ...(StyleSheet.absoluteFill as object),
              top: -height * 0.65,
            }}
          />
          <Box
            flex={1}
            backgroundColor="white"
            borderRadius="xl"
            borderTopLeftRadius={0}>
            {children}
          </Box>
        </Box>
        <Box
          backgroundColor="secondary"
          paddingBottom={isIOS ? 'l' : 'm'}
          paddingTop="l">
          {footer}
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
