import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from './routes';
import { AppContextProvider } from './context/App';
import './index.css';
import './lib/i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <Router />
    </AppContextProvider>
  </React.StrictMode>
);
