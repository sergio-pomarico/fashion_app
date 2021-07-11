import React from 'react';

import {Text} from '@components';
import {TouchableOpacity} from 'react-native';
import {Theme} from '@config/theme';

interface LinkProps {
  label: string;
  color?: keyof Theme['colors'];
  onPress: () => void;
}

const Link = ({label, color, onPress}: LinkProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text variant="body" color={color || 'primary'}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;
