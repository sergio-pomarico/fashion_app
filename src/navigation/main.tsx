import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigation from './auth';
import AppStackNavigation from './app';

export default () => {
  const isAuth: boolean = true;
  return (
    <NavigationContainer>
      {isAuth ? <AppStackNavigation /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};
