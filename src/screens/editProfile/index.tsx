import React from 'react';
import {AppRoutes, StackNavigationProps} from '@core/types';
import {DrawerActions} from '@react-navigation/native';

import {tabs} from '@core/content';
import {Box, Header, Tabs, Text} from '@components';
import Configuration from './components/Configuration';
import PersonalInfo from './components/PersonalInfo';

const borderRadius = 50;

const EditProfileScreen = ({
  navigation,
}: StackNavigationProps<AppRoutes, 'EditProfile'>) => {
  return (
    <Box flex={1} backgroundColor="background">
      <Box flex={0.2}>
        <Box
          backgroundColor="secondary"
          borderBottomRightRadius="xl"
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          top={0}
          alignItems="center">
          <Header
            dark={true}
            title={'Edit Profile'}
            left={{
              icon: 'menu',
              onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()),
            }}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box backgroundColor="secondary" flex={1} />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          top={0}
          paddingTop="xl"
          backgroundColor="background"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl">
          <Box
            position="absolute"
            top={-50}
            alignSelf="center"
            width={100}
            height={100}
            style={{borderRadius}}
            backgroundColor="primary"
          />
          <Box marginTop="xl">
            <Text variant="h1">Mike Peter</Text>
            <Text variant="body" textAlign="center">
              mike@flexinstudio.com
            </Text>
          </Box>
          <Tabs {...{tabs}}>
            <Configuration />
            <PersonalInfo />
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfileScreen;
