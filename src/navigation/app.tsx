import React from 'react';
import {AppRoutes} from '@core/types';
import {createDrawerNavigator} from '@react-navigation/drawer';
import OutfitIdeasScreen from '@screens/outfitIdeas';
import {Drawer, DRAWER_WIDTH} from '@components';

const AppDrawer = createDrawerNavigator<AppRoutes>();

const AppStackNavigation = () => (
  <AppDrawer.Navigator
    drawerContent={props => <Drawer {...props} />}
    drawerStyle={{width: DRAWER_WIDTH}}>
    <AppDrawer.Screen name="OutfitIdeas" component={OutfitIdeasScreen} />
  </AppDrawer.Navigator>
);

export default AppStackNavigation;
