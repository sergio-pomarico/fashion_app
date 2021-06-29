import React, {useState} from 'react';

import {TextInput, StyleSheet, TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Box} from '@components';
import {useTheme} from '@config/theme';

interface InputProps extends TextInputProps {
  placeholder: string;
  onChance: (text: string) => void;
  icon: string;
  error: string | undefined;
  touched: boolean | undefined;
}

const Input = ({icon, onChance, ...props}: InputProps) => {
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
        underlineColorAndroid="transparent"
        {...props}
        placeholderTextColor={theme.colors.darkGrey}
        autoCapitalize="none"
        style={styles.input}
        {...{onChangeText, value: text}}
      />
      {touched && (
        <Box padding="s">
          <Box
            width={SIZE}
            height={SIZE}
            borderRadius="m"
            alignItems="center"
            justifyContent="center"
            backgroundColor={colorName}>
            <Icon
              name={!error ? 'check' : 'x'}
              color={theme.colors.white}
              size={16}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
});

export default Input;
