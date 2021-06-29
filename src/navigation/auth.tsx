import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '@screens/onboarding';
import WelcomeScreen from '@screens/welcome';
import LoginScreen from '@screens/auth/login';
import {Route} from '@core/types';

const AuthStack = createStackNavigator<Route>();

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
    <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
    <AuthStack.Screen name="Login" component={LoginScreen} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
