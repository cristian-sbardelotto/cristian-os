import { useEffect } from 'react';

const devMode = import.meta.env.DEV;

export function SpotifyCallback() {
  useEffect(() => {
    async function handleAuthorizationCallback() {
      const params = new URLSearchParams(window.location.search);
      const authorizationCode = params.get('code');
      const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
      const redirectUri = devMode
        ? `${import.meta.env.VITE_DEV_URL}/auth`
        : 'https://cristian-os.vercel.app/auth';
      const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

      const data = {
        grant_type: 'authorization_code',
        code: authorizationCode,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret,
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
          const data = await response.json();

          localStorage.setItem('token', data.access_token);
          location.href = devMode
            ? `${import.meta.env.VITE_DEV_URL}/home`
            : 'https://cristian-os.vercel.app/home';
        }
      } catch (error) {
        console.error('Erro ao solicitar token de acesso:', error);
      }
    }

    handleAuthorizationCallback();
  }, []);

  return <p className='text-center text-xs'>Almost there...</p>;
}
