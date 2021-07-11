import React from 'react';

import {Text, Box, Button, Link} from '@components';
import {Route, StackNavigationProps} from '@core/types';

const WelcomeScreen = ({
  navigation,
}: StackNavigationProps<Route, 'Welcome'>) => {
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
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            label={'Have an account? Login'}
            variant={'primary'}
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            label={'Join us, it’s Free'}
            variant={'default'}
            onPress={() => navigation.navigate('SignUp')}
          />
          <Box marginVertical="s">
            <Link
              label={'Forgot password?'}
              color="secondary"
              onPress={() => navigation.navigate('ForgotPassword')}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeScreen;
