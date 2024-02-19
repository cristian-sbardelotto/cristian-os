import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { router } from './routes';
import { AppContextProvider } from './context/App';
import './index.css';
import { App } from './App';
import { LockScreenPage } from './pages/LockScreen';
import { HomePage } from './pages/Home';

const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

const SpotifyAuth = () => {
  useEffect(() => {
    // Função para redirecionar o usuário para a página de autorização do Spotify
    const redirectToSpotifyAuthorization = () => {
      const redirect_uri = encodeURIComponent('http://localhost:5173/auth'); // URL de redirecionamento definida no Spotify Developer Dashboard
      const scopes = encodeURIComponent('user-top-read'); // Escopos de permissão que sua aplicação precisa

      window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scopes}`;
    };

    redirectToSpotifyAuthorization();
  }, []);

  return (
    <div>
      <p>Redirecionando para a página de autorização do Spotify...</p>
    </div>
  );
};

const SpotifyCallback = () => {
  useEffect(() => {
    const handleAuthorizationCallback = async () => {
      const params = new URLSearchParams(window.location.search);
      const authorizationCode = params.get('code');

      // Informações da sua aplicação no Spotify Developer Dashboard
      const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
      const redirectUri = 'http://localhost:5173/auth'; // URL de redirecionamento definida no Spotify Developer Dashboard

      // Objeto de dados para enviar na solicitação POST
      const data = {
        grant_type: 'authorization_code',
        code: authorizationCode,
        redirect_uri: redirectUri,
        client_id,
        client_secret,
      };

      try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(data as Record<string, string>),
        });

        if (response.ok) {
          const tokenData = await response.json();
          console.log('Token de acesso:', tokenData.access_token);

          localStorage.removeItem('token');
          localStorage.setItem('token', tokenData.access_token);
          location.href = 'http://localhost:5173/home';
        } else {
          console.error('Falha ao solicitar token de acesso');
        }
      } catch (error) {
        console.error('Erro ao solicitar token de acesso:', error);
      }
    };

    handleAuthorizationCallback();
  }, []);

  return (
    <div>
      <p>Processando autorização...</p>
    </div>
  );
};

const router = createBrowserRouter([
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
  {
    path: '/au',
    element: <SpotifyAuth />,
  },
  {
    path: '/auth',
    element: <SpotifyCallback />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
