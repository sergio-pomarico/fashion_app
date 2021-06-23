import React from 'react';

import {Text, Box, Button} from '../../components';

const WelcomeScreen = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box flex={1} backgroundColor="arena" borderBottomRightRadius="xl" />
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="arena"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          borderTopLeftRadius="xl"
          backgroundColor="white"
          flex={1}
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl">
          <Text variant="h2">{'Let’s get started'}</Text>
          <Text variant="body">
            {'Login to your account below or signup for an amazing experience'}
          </Text>
          <Button
            label={'Have an account? Login'}
            variant={'primary'}
            onPress={() => {}}
          />
          <Button
            label={'Join us, it’s Free'}
            variant={'default'}
            onPress={() => {}}
          />
          <Button
            label={'Forgot password?'}
            variant={'transparent'}
            onPress={() => {}}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeScreen;
