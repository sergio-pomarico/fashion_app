import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Theme} from '@config/theme';

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string,
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type AuthRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export type AppRoutes = {
  OutfitIdeas: undefined;
  FavoritesOutfits: undefined;
  TransactionsHistory: undefined;
};

export interface TransactionPoint {
  date: string;
  value: number;
  color: keyof Theme['colors'];
  id: number;
}
