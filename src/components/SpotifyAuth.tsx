import { useEffect } from 'react';

const devMode = import.meta.env.DEV;

export function SpotifyAuth() {
  useEffect(() => {
    function redirectToSpotifyAuthorization() {
      const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
      const redirectUri = encodeURIComponent(
        devMode
          ? `${import.meta.env.VITE_DEV_URL}/auth`
          : 'https://cristian-os.vercel.app/auth'
      );
      const scopes = encodeURIComponent('user-top-read');

      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scopes}`;
    }

    redirectToSpotifyAuthorization();
  }, []);

  return (
    <p className='text-center text-xs'>Redirecting to Spotify Auth Page...</p>
  );
}
