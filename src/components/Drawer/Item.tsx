import React from 'react';
import {Box, RoundedIcon, Text} from '@components';
import {Theme} from '@config/theme';
import {RectButton} from 'react-native-gesture-handler';

interface DrawerItemProps {
  icon: string;
  color: keyof Theme['colors'];
  screen: string;
  label: string;
}

const DrawerItem = ({icon, color, label}: DrawerItemProps) => {
  const borderRadius = 25;
  return (
    <Box marginVertical="s">
      <RectButton style={{borderRadius}}>
        <Box flexDirection="row" alignItems="center">
          <RoundedIcon
            name={icon}
            backgroundColor={color}
            color="white"
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
