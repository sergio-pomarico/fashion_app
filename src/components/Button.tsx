import React from 'react';

import {StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../config/theme';
import {Text} from './';

interface ButtonProps {
  label: string;
  variant: 'primary' | 'default' | 'transparent';
  onPress: () => void;
}

const Button = ({variant, label, onPress}: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'transparent'
      ? 'transparent'
      : theme.colors.grey;
  const color = variant === 'primary' ? theme.colors.white : theme.colors.title;
  return (
    <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
      <Text variant="button" style={{color}}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = {
  variant: 'default',
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    width: 245,
  },
});

export default Button;
