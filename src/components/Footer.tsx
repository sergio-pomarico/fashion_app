import React from 'react';
import {Button, Box, Text, SocialLogin} from '@components';

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
        <Button variant="transparent" onPress={onPress}>
          <Box flexDirection="row">
            <Text variant="button" color="white" marginRight="s">
              {label}
            </Text>
            <Text variant="button" color="primary">
              {action}
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
};

export default Footer;
