import React from 'react';
import ReactDOM from 'react-dom/client';
import {Details} from './Pages/Details';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/global';
import theme from './Styles/theme';
import { Home } from './Pages/Home'
import { SignIn } from './Pages/SignIn'
import { SignUp } from './Pages/SignUp'
import { Profile } from './Pages/Profile'
import { New } from './Pages/New'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} > 
      <GlobalStyles />
      <New />
    </ThemeProvider>
  </React.StrictMode>,
)
