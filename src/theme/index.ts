import { ThemeProps } from 'styled-components';

const COLORS = {
  orange: '#FF8000',
  blue: '#006CBB',
  green: '#2DB470',
  yellow: '#FFC730',
  darkGrey: '#172026',
  grey: '#8D9499',
  lightGrey: '#C9CED1',
  lighterGrey: '#E1E5E8',
  lightestGrey: '#F9FAFB',
  white: '#FFFFFF',
} as const;

export const BREAKPOINTS = {
  xs: 360,
  sm: 600,
  md: 1024,
  lg: 1400,
  xl: 1920,
} as const;

const theme = {
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    max: '64px',
  },
  colors: {
    primary: COLORS.orange,
    secondary: COLORS.blue,
    text: COLORS.darkGrey,
    secondaryText: COLORS.grey,
    inactive: COLORS.lightGrey,
    divider: COLORS.lighterGrey,
    background: COLORS.lightestGrey,
    white: COLORS.white,
  },
  shadows: {
    base: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
  breakpoints: {
    xs: BREAKPOINTS.xs,
    sm: BREAKPOINTS.sm,
    md: BREAKPOINTS.md,
    lg: BREAKPOINTS.lg,
    xl: BREAKPOINTS.xl,
  },
} as const;

export type AppTheme = typeof theme;

export type WithTheme = ThemeProps<AppTheme>;

export default theme;
