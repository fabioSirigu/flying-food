export const theme = {
  colors: {
    background: '#17171C',
    backgroundLight: '#22222A',
    backgroundDark: '#101013',
    primary: '#F73E55',
    primaryDark: '#F00C2C',
    secondary: '#14C458',
    secondaryDark: '#125C31',
    textLight: '#82838C',
    text: '#F0F0F0'
  },
  fontSizes: {
    xs: 0.6,
    sm: 0.8,
    md: 1,
    lg: 1.4,
    xl: 2,
    xxl: 2.4
  },
  fonts: {
    h1: {
      size: 'xxl',
      lineHeight: 1.6
    },
    h2: {
      size: 'xl',
      lineHeight: 1.6
    },
    h3: {
      size: 'xl',
      lineHeight: 1.4
    },
    h4: {
      size: 'lg',
      lineHeight: 1.4
    },
    h5: {
      size: 'md',
      lineHeight: 1.4
    },
    h6: {
      size: 'md',
      lineHeight: 1.4
    },
    p: {
      size: 'md',
      lineHeight: 1.2
    },
    span: {
      size: 'md',
      lineHeight: 1.2
    }
  },
  radii: [0.4, 0.8, 1, 2, 10],
  spacings: {
    sm: 0.4,
    md: 0.6,
    lg: 0.8
  }
} as const

export type Theme = typeof theme
export type ThemeColor = keyof Theme['colors']
export type ThemeSize = keyof Theme['fontSizes']
export type ThemeSpacing = keyof Theme['spacings']
export type FontVariant = keyof Theme['fonts']
