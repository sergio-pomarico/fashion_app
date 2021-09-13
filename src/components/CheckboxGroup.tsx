import React, {useState} from 'react';

import {Box, Button} from '@components';
import {StyleSheet} from 'react-native';

interface CheckboxGroupProps {
  options: {label: string; value: string}[];
}

const CheckboxGroup = ({options}: CheckboxGroupProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  return (
    <Box flexDirection="row" flexWrap="wrap" marginTop="m">
      {options.map(({value, label}) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;
        return (
          <Button
            key={value}
            label={label}
            variant={isSelected ? 'primary' : 'default'}
            onPress={() => {
              if (isSelected) {
                selectedValues.splice(index, 1);
              } else {
                selectedValues.push(value);
              }
              setSelectedValues([...selectedValues]);
            }}
            style={styles.button}
          />
        );
      })}
    </Box>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 'auto',
    height: 'auto',
    padding: 16,
    marginVertical: 4,
    marginRight: 4,
  },
});

export default CheckboxGroup;
