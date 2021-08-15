import React from 'react';
import {Dimensions} from 'react-native';
import {DateTime} from 'luxon';

import {useTheme} from '@config/theme';
import {dateParser} from '@core/utils';
import {TransactionPoint} from '@core/types';
import {Box} from '@components';
import {mix} from '@core/utils';

import Underlay, {MARGIN} from './Underlay';

interface GraphProps {
  points: TransactionPoint[];
  intialDate: string;
  numberOfMonths: number;
}

const {width: sWidth} = Dimensions.get('screen');
const aspectRatio = 195 / 305;

const Graph = ({points, intialDate, numberOfMonths}: GraphProps) => {
  const theme = useTheme();
  const canvasWidth = sWidth - theme.spacing.m * 2;
  const width = canvasWidth - theme.spacing[MARGIN];
  const canvasHeight = aspectRatio * canvasWidth;
  const height = canvasHeight - theme.spacing.l;

  const values = points.map(point => point.value);
  const dates = points.map(point => dateParser(point.date));
  const step = width / numberOfMonths;

  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  return (
    <Box
      height={canvasHeight}
      width={canvasWidth}
      marginTop={MARGIN}
      paddingLeft={MARGIN}
      paddingBottom="l">
      <Underlay {...{minY, maxY, dates, step, intialDate, numberOfMonths}} />
      <Box {...{width, height}}>
        {points.map(point => {
          const i = Math.round(
            DateTime.fromISO(point.date).diff(
              DateTime.fromISO(intialDate),
              'month',
            ).months,
          );
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
