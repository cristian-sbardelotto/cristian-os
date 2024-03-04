import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from './routes';
import { AppContextProvider } from './context/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <Router />
    </AppContextProvider>
  </React.StrictMode>
);
