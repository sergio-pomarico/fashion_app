import {createTheme, useTheme as useReTheme} from '@shopify/restyle';
import {ImageStyle, TextStyle, ViewStyle, FlexStyle} from 'react-native';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle | FlexStyle;
};

const palette = {
  primary: '#2CB9B0',
  primaryLight: '#E7F9F7',
  secondary: '#0C0D34',
  text: 'rgba(12,13,52,0.7)',
  white: '#FFF',
  lightGrey: '#FAFAFA',
  grey: '#F4F0EF',
  darkGrey: '#8A8D90',
  arena: '#F2F2F2',
  danger: '#EB5B90',
  orange: '#FE5E33',
  yellow: '#FFC641',
  pink: '#FF87A2',
  violet: '#442CB9',
  lightBlue: '#BFEAF5',
};

const theme = createTheme({
  colors: {
    primary: palette.primary,
    primaryLight: palette.primaryLight,
    secondary: palette.secondary,
    text: palette.text,
    white: palette.white,
    grey: palette.grey,
    darkGrey: palette.darkGrey,
    arena: palette.arena,
    danger: palette.danger,
    orange: palette.orange,
    yellow: palette.yellow,
    pink: palette.pink,
    violet: palette.violet,
    lightGrey: palette.lightGrey,
    lightBlue: palette.lightBlue,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 64,
  },
  breakpoints: {},
  textVariants: {
    hero: {
      color: 'white',
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 80,
      lineHeight: 80,
      textAlign: 'center',
    },
    h1: {
      color: 'secondary',
      fontFamily: 'SFProDisplay-Semibold',
      fontSize: 28,
      textAlign: 'center',
    },
    h2: {
      color: 'secondary',
      fontFamily: 'SFProDisplay-Semibold',
      fontSize: 24,
      lineHeight: 30,
      textAlign: 'center',
    },
    header: {
      fontFamily: 'SFProDisplay-Semibold',
      lineHeight: 24,
      fontSize: 14,
      color: 'secondary',
    },
    body: {
      color: 'text',
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 16,
      lineHeight: 30,
    },
    button: {
      fontFamily: 'SFProDisplay-Medium',
      textAlign: 'center',
      fontSize: 16,
    },
  },
});

export type Theme = typeof theme;
export const useTheme = () => useReTheme<Theme>();

export const makeStyle =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const curretTheme = useTheme();
    return styles(curretTheme);
  };

export default theme;
