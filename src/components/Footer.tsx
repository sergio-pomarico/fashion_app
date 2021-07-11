import React from 'react';
import {Link, Box, Text, SocialLogin} from '@components';

interface FooterProps {
  label?: string;
  action?: string;
  onPress: () => void;
}

const Footer = ({label, action, onPress}: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" marginTop="s">
        <Box flexDirection="row" justifyContent="center" alignItems="center">
          <Text variant="button" color="white" marginRight="s">
            {label}
          </Text>
          <Link onPress={onPress} label={action as string} />
        </Box>
      </Box>
    </>
  );
};

export default Footer;
