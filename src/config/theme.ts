import {createTheme} from '@shopify/restyle';

const palette = {
  primary: '#2CB9B0',
  title: '#0C0D34',
  text: 'rgba(12,13,52,0.7)',
  white: '#FFF',
  grey: 'rgba(12,13,52,0.06)',
  arena: '#F2F2F2',
};

const theme = createTheme({
  colors: {
    primary: palette.primary,
    title: palette.title,
    text: palette.text,
    white: palette.white,
    grey: palette.grey,
    arena: palette.arena,
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
    button: {
      fontFamily: 'SFProDisplay-Medium',
      textAlign: 'center',
      fontSize: 16,
    },
  },
});

export type Theme = typeof theme;
export default theme;
