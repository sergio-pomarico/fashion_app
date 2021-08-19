import React, {useState} from 'react';

import {Text, Box} from '@components';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity, StyleSheet} from 'react-native';

interface CheckboxProps {
  label: string;
}

const Checkbox = ({label}: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <Box flexDirection="row" alignItems="center" marginRight="s">
      <TouchableOpacity onPress={() => setChecked(!checked)}>
        <Box
          borderRadius="s"
          backgroundColor={checked ? 'primary' : 'background'}
          width={20}
          height={20}
          alignItems="center"
          justifyContent="center"
          borderColor="primary"
          borderWidth={StyleSheet.hairlineWidth}
          marginRight="s">
          <Icon name="check" color="background" />
        </Box>
      </TouchableOpacity>
      <Text variant="body">{label}</Text>
    </Box>
  );
};

export default Checkbox;
