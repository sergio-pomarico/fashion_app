import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Box, Text} from '@components';
import theme from '@config/theme';

interface RoundedCheckboxGroupProps {
  options: {value: string}[];
  isValueColor?: boolean;
}

const INNER_RADIUS = 20;
const OUTER_RADIUS = 25;

const RoundedCheckboxGroup = ({
  options,
  isValueColor = false,
}: RoundedCheckboxGroupProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  return (
    <Box flexDirection="row" flexWrap="wrap" marginTop="m">
      {options.map(({value}) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;
        const backgroundColor = isValueColor
          ? value
          : isSelected
          ? theme.colors.primary
          : theme.colors.grey;
        return (
          <TouchableOpacity
            style={styles.container}
            key={value}
            onPress={() => {
              if (isSelected) {
                selectedValues.splice(index, 1);
              } else {
                selectedValues.push(value);
              }
              setSelectedValues([...selectedValues]);
            }}>
            {isSelected && (
              <View style={[styles.border, {borderColor: backgroundColor}]} />
            )}
            <View style={[styles.button, {backgroundColor}]}>
              {!isValueColor && (
                <Text
                  variant="header"
                  textAlign="center"
                  color={isSelected ? 'background' : 'secondary'}>
                  {value.toUpperCase()}
                </Text>
              )}
              {isValueColor && isSelected && (
                <Icon name="check" color="white" size={16} />
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    width: OUTER_RADIUS * 2,
    height: OUTER_RADIUS * 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.s,
    marginRight: theme.spacing.s,
  },
  border: {
    ...(StyleSheet.absoluteFillObject as object),
    borderRadius: OUTER_RADIUS,
    borderWidth: 1,
  },
  button: {
    width: INNER_RADIUS * 2,
    height: INNER_RADIUS * 2,
    borderRadius: INNER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RoundedCheckboxGroup;
