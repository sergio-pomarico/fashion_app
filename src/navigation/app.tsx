import React from 'react';
import {AppRoutes} from '@core/types';
import {createDrawerNavigator} from '@react-navigation/drawer';
import OutfitIdeasScreen from '@screens/outfitIdeas';
import FavoritesOutfitScreen from '@screens/favoritesOutfits';
import TransactionHistoryScreen from '@screens/transactionHistory';
import EditProfileScreen from '@screens/editProfile';
import SettingsScreen from '@screens/settings';
import ShoppingCartScreen from '@screens/cart';
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
    <AppDrawer.Screen
      name="TransactionsHistory"
      component={TransactionHistoryScreen}
    />
    <AppDrawer.Screen name="EditProfile" component={EditProfileScreen} />
    <AppDrawer.Screen name="Settings" component={SettingsScreen} />
    <AppDrawer.Screen name="Cart" component={ShoppingCartScreen} />
  </AppDrawer.Navigator>
);

export default AppStackNavigation;
