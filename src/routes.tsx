import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from './App.tsx';
import { LockScreenPage } from './pages/LockScreen.tsx';
import { HomePage } from './pages/Home.tsx';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<App />}
          path='/'
        />

        <Route
          element={<LockScreenPage />}
          path='/lock-screen'
        />

        <Route
          element={<HomePage />}
          path='/home'
        />
      </Routes>
    </BrowserRouter>
  );
}
