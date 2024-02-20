type TracksProps = {
  name: string;
  artists: Array<{ name: string }>;
  album: {
    images: {
      url: string;
    }[];
  };
  external_urls: {
    spotify: string;
  };
  id: string;
};

type TopTracksProps = {
  items: TracksProps[];
};

async function fetchSpotifyApi(endpoint: string, method: string) {
  const token = localStorage.getItem('token');

  if (!token) {
    return alert('Você não está logado em sua conta Spotify!');
  }

  const data = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
  });

  return await data.json();
}

export async function getTopTracks() {
  const { items: topTracks } = (await fetchSpotifyApi(
    'v1/me/top/tracks?time_range=long_term&limit=5',
    'GET'
  )) as TopTracksProps;

  return topTracks.map(track => {
    return {
      name: track.name,
      artists: track.artists.map(artist => artist.name).join(', '),
      albumImage: track.album.images[0].url,
      url: track.external_urls.spotify,
      id: track.id,
    };
  });
}
