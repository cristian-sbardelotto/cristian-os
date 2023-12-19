import { createBrowserRouter } from 'react-router-dom';

import { App } from './App.tsx';
import { LockScreenPage } from './pages/LockScreen.tsx';
import { HomePage } from './pages/Home.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/lock-screen',
    element: <LockScreenPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
]);
