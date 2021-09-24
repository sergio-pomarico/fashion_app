import React, {useState} from 'react';
import {Switch} from 'react-native';

import {Box, Text} from '@components';
import {useTheme} from '@config/theme';

interface NotificationProps {
  title: String;
  description: String;
}

const Notification = ({title, description}: NotificationProps) => {
  const [active, setActive] = useState<boolean>(false);
  const theme = useTheme();
  return (
    <Box flexDirection="row" marginBottom="m" alignItems="center">
      <Box flex={1}>
        <Text variant="h3">{title}</Text>
        <Text variant="body">{description} </Text>
      </Box>
      <Box marginVertical="m">
        <Switch
          value={active}
          onChange={() => setActive(prev => !prev)}
          trackColor={{
            true: theme.colors.primary,
            false: theme.colors.grey,
          }}
        />
      </Box>
    </Box>
  );
};

export default Notification;
