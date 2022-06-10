import React from 'react';
import { createRoot } from 'react-dom/client';
import 'index.sass';
import App from 'App';
import { AuthProvider } from "react-oidc-context";
import { oidcConfig } from 'config/oidcConfig'
import { ThemeProvider } from '@mui/material';
import theme from 'config/theme'

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider {...oidcConfig}>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
