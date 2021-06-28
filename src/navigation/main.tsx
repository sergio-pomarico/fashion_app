import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackScreen from './auth';

export default () => {
  return (
    <NavigationContainer>
      <AuthStackScreen />
    </NavigationContainer>
  );
};
