import * as React from 'react';

import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react';

import Routes from './routes';
import { theme } from './theme';

const extendedTheme = extendTheme(theme);

function App() {
  return (
    <ChakraBaseProvider theme={extendedTheme}>
      <Routes />
    </ChakraBaseProvider>
  );
}

export default App;
