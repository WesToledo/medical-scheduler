import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import { StyleFunctionProps, ThemeConfig, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import { foundations } from './foundations';

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  cssVarPrefix: 'chakra',
};

export const theme = extendTheme({
  ...foundations,
  config,
  styles: {
    global: () => ({
      body: {
        bg: '#fff',
      },
    }),
  },
});

export type Theme = typeof theme;
