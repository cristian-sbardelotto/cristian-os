import { useEffect } from 'react';

const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

export function SpotifyAuth() {
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
}
