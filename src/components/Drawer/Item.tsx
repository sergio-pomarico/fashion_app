import React from 'react';
import {Box, RoundedIcon, Text} from '@components';
import {Theme} from '@config/theme';
import {RectButton} from 'react-native-gesture-handler';

interface DrawerItemProps {
  icon: string;
  color: keyof Theme['colors'];
  label: string;
  onPress: () => void;
}

const DrawerItem = ({icon, color, label, onPress}: DrawerItemProps) => {
  const borderRadius = 25;
  return (
    <Box marginVertical="s">
      <RectButton style={{borderRadius}} onPress={onPress}>
        <Box flexDirection="row" alignItems="center">
          <RoundedIcon
            name={icon}
            backgroundColor={color}
            color="background"
            size={36}
            iconSize={20}
          />
          <Text variant="button" color="secondary">
            {label}
          </Text>
        </Box>
      </RectButton>
    </Box>
  );
};
export default DrawerItem;
