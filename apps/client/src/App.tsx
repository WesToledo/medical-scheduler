import * as React from 'react';

import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react';
import { theme } from './theme';
import Routes from './routes';
import { registerLicense } from '@syncfusion/ej2-base';

function App() {
  registerLicense('ORg4AjUWIQA/Gnt2VlhhQlJCfV5AQmRWfFN0RnNYf1R0dV9EZ0wgOX1dQl9gSH9TcURjXXlfd3ZQRGI=');
  return (
    <ChakraBaseProvider theme={theme}>
      <Routes />
    </ChakraBaseProvider>
  );
}

export default App;
