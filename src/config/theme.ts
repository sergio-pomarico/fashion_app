import {BaseTheme, createTheme} from '@shopify/restyle';

// const palette = {};

const theme: BaseTheme = createTheme({
  colors: {
    primary: '#2CB9B0',
    title: '#0C0D34',
    text: 'rgba(12,13,52,0.7)',
    white: '#FFF',
    grey: 'rgba(12,13,52,0.06)',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
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
      color: 'title',
      fontFamily: 'SFProDisplay-Semibold',
      fontSize: 28,
      textAlign: 'center',
    },
    h2: {
      color: 'title',
      fontFamily: 'SFProDisplay-Semibold',
      fontSize: 24,
      lineHeight: 30,
      textAlign: 'center',
    },
    body: {
      color: 'text',
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 16,
      lineHeight: 30,
    },
  },
});

export type Theme = typeof theme;
export default theme;
