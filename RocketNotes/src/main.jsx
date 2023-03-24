import React from 'react';
import ReactDOM from 'react-dom/client';
import {Details} from './Pages/Details';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/global';
import theme from './Styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} > 
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
