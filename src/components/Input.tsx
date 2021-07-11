import React, {forwardRef, useState} from 'react';

import {TextInput, StyleSheet, TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Box, RoundedIcon} from '@components';
import {useTheme} from '@config/theme';

interface InputProps extends TextInputProps {
  placeholder: string;
  onChance: (text: string) => void;
  icon: string;
  error: string | undefined;
  touched: boolean | undefined;
}

const Input = forwardRef<TextInput, InputProps>(
  ({icon, onChance, ...props}, ref) => {
    const theme = useTheme();
    const SIZE = 2 * theme.borderRadii.m;
    const {value = '', touched, error} = props;
    const [text, setText] = useState(value);

    const colorName = !touched ? 'darkGrey' : error ? 'danger' : 'primary';
    const color = theme.colors[colorName];

    const onChangeText = (input: string) => {
      setText(input);
      onChance(input);
    };

    return (
      <Box
        flexDirection="row"
        backgroundColor="white"
        height={48}
        borderRadius="s"
        borderWidth={StyleSheet.hairlineWidth}
        borderColor={colorName}
        alignItems="center"
        width="100%"
        padding="s">
        <Box padding="s">
          <Icon name={icon} color={color} size={16} />
        </Box>
        <TextInput
          ref={ref}
          underlineColorAndroid="transparent"
          {...props}
          placeholderTextColor={theme.colors.darkGrey}
          autoCapitalize="none"
          style={styles.input}
          {...{onChangeText, value: text}}
        />
        {touched && (
          <RoundedIcon
            size={SIZE}
            name={!error ? 'check' : 'x'}
            backgroundColor={colorName}
            color="white"
          />
        )}
      </Box>
    );
  },
);

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
});

export default Input;
