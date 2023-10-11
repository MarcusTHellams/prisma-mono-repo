import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import {
  RefineThemes
} from '@refinedev/chakra-ui';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={RefineThemes.Blue}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
