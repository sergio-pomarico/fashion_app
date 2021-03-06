import React, {ReactNode} from 'react';
import {
  createTheme,
  useTheme as useReTheme,
  ThemeProvider as ReStyleThemeProvider,
} from '@shopify/restyle';
import {
  ImageStyle,
  TextStyle,
  ViewStyle,
  FlexStyle,
  Dimensions,
} from 'react-native';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle | FlexStyle;
};

const {width} = Dimensions.get('screen');
export const aspectRatio = width / 375;

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
  transparent: 'transpatent',
};

const theme = createTheme({
  colors: {
    primary: palette.primary,
    primaryLight: palette.primaryLight,
    secondary: palette.secondary,
    text: palette.text,
    background: palette.white,
    grey: palette.grey,
    darkGrey: palette.darkGrey,
    arena: palette.arena,
    danger: palette.danger,
    graph1: palette.orange,
    graph2: palette.yellow,
    drawer1: palette.orange,
    drawer2: palette.yellow,
    drawer3: palette.pink,
    drawer4: palette.violet,
    lightGrey: palette.lightGrey,
    lightBlue: palette.lightBlue,
    transparent: palette.transparent,
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
    h3: {
      fontSize: 16,
      fontFamily: 'SFProDisplay-Semibold',
      color: 'secondary',
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

export const ThemeProvider = ({children}: {children: ReactNode}) => (
  <ReStyleThemeProvider {...{theme}}>{children}</ReStyleThemeProvider>
);

export type Theme = typeof theme;
export const useTheme = () => useReTheme<Theme>();

export const makeStyle =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const curretTheme = useTheme();
    return styles(curretTheme);
  };

export default theme;
