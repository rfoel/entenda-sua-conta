import React from 'react';
import { createGlobalStyle, ThemeProvider } from '@xstyled/styled-components';

import Lemon from './Lemon';

const theme = {
  colors: {
    lemon: '#43E179',
    black: '#191919',
    white: '#FFFFFF',
    offwhite: '#F5F6F9',
  },
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: black;
    padding: 3;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Lemon />
    </ThemeProvider>
  );
};

export default App;
