import React from 'react';
import {StyleSheet} from 'react-native';
import {DateTime} from 'luxon';

import {useTheme} from '@config/theme';
import {mix} from '@core/utils';
import {Box, Text} from '@components';

interface UnderlayProps {
  minY: number;
  maxY: number;
  dates: number[];
  step: number;
  intialDate: string;
  numberOfMonths: number;
}

export const MARGIN = 'xl';
const ROW_HEIGTH = 16;

const Underlay = ({
  minY,
  maxY,
  step,
  intialDate,
  numberOfMonths,
}: UnderlayProps) => {
  const theme = useTheme();
  const arrMonth = new Array(numberOfMonths).fill(0);
  const minDate = DateTime.fromISO(intialDate);
  console.log(minDate, arrMonth);
  return (
    <Box style={StyleSheet.absoluteFillObject}>
      <Box flex={1} justifyContent="space-between">
        {[1, 0.67, 0.33, 0].map(t => {
          return (
            <Box
              flexDirection="row"
              alignItems="center"
              key={t.toString()}
              height={ROW_HEIGTH}
              style={{
                top: t === 0 ? ROW_HEIGTH / 2 : t === 1 ? -ROW_HEIGTH / 2 : 0,
              }}>
              <Box width={theme.spacing[MARGIN]}>
                <Text color="darkGrey" textAlign="right">
                  {Math.round(mix(t, minY, maxY))}
                </Text>
              </Box>
              <Box flex={1} height={1} backgroundColor="grey" />
            </Box>
          );
        })}
      </Box>
      <Box
        marginLeft={MARGIN}
        height={theme.spacing.l}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        {arrMonth
          .map((_, i) => minDate.plus({month: i}))
          .map((date, _) => (
            <Box key={date.toString()} width={step}>
              <Text color="darkGrey" textAlign="center">
                {date.monthShort}
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Underlay;
