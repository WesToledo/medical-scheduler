const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  white: '#FFFFFF',
  black: '#0e1218',

  primary: {
    50: '#f7f6fe',
    100: '#e1ddfa',
    200: '#c7bff5',
    300: '#a79bef',
    400: '#9587ec',
    500: '#7c6ae8',
    600: '#6551e4',
    700: '#5140bb',
    800: '#44369e',
    900: '#322773',
  },

  whiteAlpha: {
    50: 'rgba(255, 255, 255, 0.04)',
    100: 'rgba(255, 255, 255, 0.06)',
    200: 'rgba(255, 255, 255, 0.08)',
    300: 'rgba(255, 255, 255, 0.16)',
    400: 'rgba(255, 255, 255, 0.24)',
    500: 'rgba(255, 255, 255, 0.36)',
    600: 'rgba(255, 255, 255, 0.48)',
    700: 'rgba(255, 255, 255, 0.64)',
    800: 'rgba(255, 255, 255, 0.80)',
    900: 'rgba(255, 255, 255, 0.92)',
  },

  blackAlpha: {
    50: 'rgba(0, 0, 0, 0.04)',
    100: 'rgba(0, 0, 0, 0.06)',
    200: 'rgba(0, 0, 0, 0.08)',
    300: 'rgba(0, 0, 0, 0.16)',
    400: 'rgba(0, 0, 0, 0.24)',
    500: 'rgba(0, 0, 0, 0.36)',
    600: 'rgba(0, 0, 0, 0.48)',
    700: 'rgba(0, 0, 0, 0.64)',
    800: 'rgba(0, 0, 0, 0.80)',
    900: 'rgba(0, 0, 0, 0.92)',
  },
  gray: {
    50: '#f9fafa',
    100: '#f1f1f2',
    200: '#e6e7e9',
    300: '#d2d4d7',
    400: '#a9adb2',
    500: '#797f88',
    600: '#4d5560',
    700: '#2e3744',
    800: '#19202b',
    900: '#141a23',
  },
  purple: {
    50: '#f8f6fe',
    100: '#e4daf9',
    200: '#cfbff5',
    300: '#b197ef',
    400: '#9c7bea',
    500: '#8055e4',
    600: '#6b44c7',
    700: '#5837a3',
    800: '#482d86',
    900: '#352263',
  },
  pink: {
    50: '#fdf5fa',
    100: '#f9d8ea',
    200: '#f4b8d8',
    300: '#ed8bbf',
    400: '#e768ac',
    500: '#cf468f',
    600: '#b13c7b',
    700: '#903164',
    800: '#71264e',
    900: '#531c39',
  },
  red: {
    50: '#FFF5F5',
    100: '#FED7D7',
    200: '#FEB2B2',
    300: '#FC8181',
    400: '#F56565',
    500: '#E53E3E',
    600: '#C53030',
    700: '#9B2C2C',
    800: '#822727',
    900: '#63171B',
  },
  orange: {
    50: '#fefaf6',
    100: '#faebdd',
    200: '#f4d3b6',
    300: '#ebb07d',
    400: '#df904c',
    500: '#c07c41',
    600: '#a26937',
    700: '#81532c',
    800: '#654222',
    900: '#53361c',
  },
  yellow: {
    50: '#fffefc',
    100: '#fcf9ec',
    200: '#f6edc8',
    300: '#f0df9d',
    400: '#e6cb5e',
    500: '#c0a641',
    600: '#998534',
    700: '#776829',
    800: '#5a4e1e',
    900: '#4a4019',
  },
  green: {
    50: '#f4fdf9',
    100: '#c4f6db',
    200: '#7eebb0',
    300: '#49d68b',
    400: '#40bc79',
    500: '#37a168',
    600: '#2d8556',
    700: '#236843',
    800: '#1d5537',
    900: '#18462d',
  },
  teal: {
    50: '#effcfc',
    100: '#b6f3f1',
    200: '#6be8e4',
    300: '#47d1cc',
    400: '#3cb2ae',
    500: '#339794',
    600: '#2a7b78',
    700: '#205f5d',
    800: '#1b4f4e',
    900: '#164140',
  },
  cyan: {
    50: '#f2fcfd',
    100: '#c8f0f6',
    200: '#afe9f2',
    300: '#90e1ee',
    400: '#49c4d7',
    500: '#43b4c6',
    600: '#3ca2b2',
    700: '#328693',
    800: '#296e79',
    900: '#20555e',
  },
  blue: {
    50: '#f0f7fd',
    100: '#c8e1f6',
    200: '#9fcaf0',
    300: '#72b1e9',
    400: '#4b99dd',
    500: '#4083be',
    600: '#366e9f',
    700: '#295479',
    800: '#224563',
    900: '#1b3851',
  },

  linkedin: {
    50: '#E8F4F9',
    100: '#CFEDFB',
    200: '#9BDAF3',
    300: '#68C7EC',
    400: '#34B3E4',
    500: '#00A0DC',
    600: '#008CC9',
    700: '#0077B5',
    800: '#005E93',
    900: '#004471',
  },

  facebook: {
    50: '#E8F4F9',
    100: '#D9DEE9',
    200: '#B7C2DA',
    300: '#6482C0',
    400: '#4267B2',
    500: '#385898',
    600: '#314E89',
    700: '#29487D',
    800: '#223B67',
    900: '#1E355B',
  },

  messenger: {
    50: '#D0E6FF',
    100: '#B9DAFF',
    200: '#A2CDFF',
    300: '#7AB8FF',
    400: '#2E90FF',
    500: '#0078FF',
    600: '#0063D1',
    700: '#0052AC',
    800: '#003C7E',
    900: '#002C5C',
  },

  whatsapp: {
    50: '#dffeec',
    100: '#b9f5d0',
    200: '#90edb3',
    300: '#65e495',
    400: '#3cdd78',
    500: '#22c35e',
    600: '#179848',
    700: '#0c6c33',
    800: '#01421c',
    900: '#001803',
  },

  twitter: {
    50: '#E5F4FD',
    100: '#C8E9FB',
    200: '#A8DCFA',
    300: '#83CDF7',
    400: '#57BBF5',
    500: '#1DA1F2',
    600: '#1A94DA',
    700: '#1681BF',
    800: '#136B9E',
    900: '#0D4D71',
  },

  telegram: {
    50: '#E3F2F9',
    100: '#C5E4F3',
    200: '#A2D4EC',
    300: '#7AC1E4',
    400: '#47A9DA',
    500: '#0088CC',
    600: '#007AB8',
    700: '#006BA1',
    800: '#005885',
    900: '#003F5E',
  },
};

export default colors;
