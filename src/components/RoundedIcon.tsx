import React from 'react';
import {Box, Text} from '@components';
import Icon from 'react-native-vector-icons/Feather';
import theme, {Theme} from '@config/theme';

interface RoundedIconProps {
  name: string;
  size: number;
  iconSize?: number;
  color: keyof Theme['colors'];
  backgroundColor: keyof Theme['colors'];
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  iconSize,
}: RoundedIconProps) => {
  const colorName = theme.colors[color];
  return (
    <Box padding="s">
      <Box
        width={size}
        height={size}
        style={{borderRadius: size / 2}}
        alignItems="center"
        justifyContent="center"
        {...{backgroundColor}}>
        <Text lineHeight={size} textAlign="center">
          <Icon {...{name}} color={colorName} size={iconSize || size * 0.8} />
        </Text>
      </Box>
    </Box>
  );
};

export default RoundedIcon;
