import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  OnboardingScreen,
  WelcomeScreen,
  LoginScreen,
  SignUpScreen,
  ForgotPasswordScreen,
} from '@screens/auth';
import {AuthRoutes} from '@core/types';

const AuthStack = createStackNavigator<AuthRoutes>();

const AuthStackNavigation = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
    <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </AuthStack.Navigator>
);

export default AuthStackNavigation;
