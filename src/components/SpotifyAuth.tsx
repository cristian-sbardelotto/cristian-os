import { useEffect } from 'react';

export function SpotifyAuth() {
  useEffect(() => {
    function redirectToSpotifyAuthorization() {
      const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
      const redirectUri = encodeURIComponent('http://localhost:5173/auth');
      const scopes = encodeURIComponent('user-top-read');

      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scopes}`;
    }

    redirectToSpotifyAuthorization();
  }, []);

  return (
    <p className='text-center text-xs'>Redirecting to Spotify Auth Page...</p>
  );
}
