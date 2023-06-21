import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { CustomThemeProvider } from './styles/ThemeProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomThemeProvider >
        <App />
      </CustomThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
