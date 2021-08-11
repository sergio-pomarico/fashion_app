import React from 'react';
import {Dimensions} from 'react-native';

import {useTheme} from '@config/theme';
import {TransactionPoint} from '@core/types';
import {Box} from '@components';
import {mix} from '@core/utils';

import Underlay, {MARGIN} from './Underlay';

interface GraphProps {
  points: TransactionPoint[];
}

const {width: sWidth} = Dimensions.get('screen');
const aspectRatio = 195 / 305;

const Graph = ({points}: GraphProps) => {
  const theme = useTheme();
  const canvasWidth = sWidth - theme.spacing.m * 2;
  const width = canvasWidth - theme.spacing[MARGIN];
  const canvasHeight = aspectRatio * canvasWidth;
  const height = canvasHeight - theme.spacing.l;

  const values = points.map(point => point.value);
  const dates = points.map(point => point.date);
  const step = width / points.length;

  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  return (
    <Box
      height={canvasHeight}
      width={canvasWidth}
      marginTop={MARGIN}
      paddingLeft={MARGIN}
      paddingBottom="l">
      <Underlay {...{minY, maxY, dates, step}} />
      <Box {...{width, height}}>
        {points.map((point, i) => {
          if (point.value === 0) {
            return null;
          }
          return (
            <Box
              key={point.date.toString()}
              position="absolute"
              left={i * step}
              bottom={0}
              width={step}
              height={mix(point.value / maxY, 0, height)}>
              <Box
                position="absolute"
                left={theme.spacing.m}
                right={theme.spacing.m}
                top={0}
                bottom={0}
                backgroundColor={point.color}
                borderTopLeftRadius="m"
                borderTopEndRadius="m"
                opacity={0.1}
              />
              <Box
                position="absolute"
                left={theme.spacing.m}
                right={theme.spacing.m}
                top={0}
                bottom={0}
                backgroundColor={point.color}
                borderRadius="m"
                height={32}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Graph;
