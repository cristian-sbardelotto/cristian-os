import { useEffect } from 'react';

const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

export function SpotifyCallback() {
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
}
