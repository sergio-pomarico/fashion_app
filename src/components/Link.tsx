import React from 'react';

import {Text} from '@components';
import {TouchableOpacity} from 'react-native';

interface LinkProps {
  label: string;
  onPress: () => void;
}

const Link = ({label, onPress}: LinkProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text variant="body" color="primary" textDecorationLine="underline">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;
