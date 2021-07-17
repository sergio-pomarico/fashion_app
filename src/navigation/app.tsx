import React from 'react';
import {AppRoutes} from '@core/types';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '@screens/home';

const AppDrawer = createDrawerNavigator<AppRoutes>();

const AppStackNavigation = () => (
  <AppDrawer.Navigator>
    <AppDrawer.Screen name="Home" component={HomeScreen} />
  </AppDrawer.Navigator>
);

export default AppStackNavigation;
