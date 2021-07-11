import React from 'react';

import {Dimensions} from 'react-native';
import {Text, Box} from '@components';
const {width, height} = Dimensions.get('screen');

export const SLIDE_HEIGHT = 0.61 * height;

interface SlideProps {
  title: string;
  right?: boolean;
}

const Slide = ({title = '', right}: SlideProps) => {
  const transform = [
    {translateY: (SLIDE_HEIGHT - 100) / 2},
    {translateX: right ? width / 2 - 50 : -width / 2 + 50},
    {rotate: right ? '-90deg' : '90deg'},
  ];
  return (
    <Box flex={1} {...{width}}>
      <Box style={{transform}} justifyContent="center" height={100}>
        <Text variant="hero">{title}</Text>
      </Box>
    </Box>
  );
};

export default Slide;
