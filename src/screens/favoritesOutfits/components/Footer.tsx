import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Box, Button} from '@components';

interface FooterProps {
  label: string;
  onPress: () => void;
}

const Footer = ({label, onPress}: FooterProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      backgroundColor="secondary"
      paddingTop="xl"
      borderTopLeftRadius="xl"
      borderTopRightRadius="xl"
      style={{paddingBottom: insets.bottom}}>
      <Button {...{label, onPress}} variant="primary" />
    </Box>
  );
};

export default Footer;
