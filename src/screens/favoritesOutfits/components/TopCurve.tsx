import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from '@config/theme';

interface TopCurveProps {
  footerHeight: number;
}

const TopCurve = ({footerHeight}: TopCurveProps) => {
  const theme = useTheme();
  const size = theme.borderRadii.xl;
  return (
    <Svg
      width={size}
      height={size}
      style={[
        styles.container,
        {
          bottom: footerHeight,
        },
      ]}
      viewBox="0 0 1 1">
      <Path d="M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1" fill={theme.colors.secondary} />
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
  },
});

export default TopCurve;
