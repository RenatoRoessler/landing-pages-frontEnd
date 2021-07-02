import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import ReactDOM from 'react-dom';
import Home from './templates/Home';
import { GlobalStyles } from './styles/global-styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
