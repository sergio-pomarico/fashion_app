import React from 'react';
import {AppRoutes} from '@core/types';
import {createDrawerNavigator} from '@react-navigation/drawer';
import OutfitIdeasScreen from '@screens/outfitIdeas';
import FavoritesOutfitScreen from '@screens/favoritesOutfits';
import {Drawer, DRAWER_WIDTH} from '@components';

const AppDrawer = createDrawerNavigator<AppRoutes>();

const AppStackNavigation = () => (
  <AppDrawer.Navigator
    drawerContent={props => <Drawer {...props} />}
    drawerStyle={{width: DRAWER_WIDTH}}>
    <AppDrawer.Screen name="OutfitIdeas" component={OutfitIdeasScreen} />
    <AppDrawer.Screen
      name="FavoritesOutfits"
      component={FavoritesOutfitScreen}
    />
  </AppDrawer.Navigator>
);

export default AppStackNavigation;
