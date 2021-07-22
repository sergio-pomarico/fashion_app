import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native';
import {Box, Text, RoundedIcon} from '@components';

interface HeaderProps {
  title: string;
  left: {
    icon: string;
    onPress: () => void;
  };
  right: {
    icon: string;
    onPress: () => void;
  };
  dark: boolean;
}

const Header = ({title, left, right, dark}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? 'white' : 'secondary';
  const backgroundColor = dark ? 'secondary' : 'lightGrey';
  return (
    <Box
      position="absolute"
      flexDirection="row"
      alignItems="center"
      width="100%"
      justifyContent="space-between"
      paddingHorizontal="m"
      style={{marginTop: insets.top}}>
      <TouchableOpacity onPress={left.onPress}>
        <RoundedIcon
          name={left.icon}
          {...{color, backgroundColor}}
          iconSize={24}
          size={44}
        />
      </TouchableOpacity>
      <Text {...{color}} variant="header">
        {title?.toUpperCase()}
      </Text>
      <TouchableOpacity onPress={right.onPress}>
        <RoundedIcon
          name={right.icon}
          {...{color, backgroundColor}}
          iconSize={24}
          size={44}
        />
      </TouchableOpacity>
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
