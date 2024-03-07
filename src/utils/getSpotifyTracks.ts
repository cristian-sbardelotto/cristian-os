type TracksProps = {
  name: string;
  artists: Array<{
    name: string;
    external_urls: {
      spotify: string;
    };
  }>;
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

const devMode = import.meta.env.DEV;

async function fetchSpotifyApi(endpoint: string, method: string) {
  const token = localStorage.getItem('token');

  if (!token) {
    return;
  }

  try {
    const data = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
    });

    if (data.status === 401) {
      localStorage.removeItem('token');
      location.href = devMode
        ? `${import.meta.env.VITE_DEV_URL}/callback`
        : 'https://cristian-os.vercel.app/callback';
      return;
    }

    return await data.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getTopTracks() {
  const token = localStorage.getItem('token');

  if (!token) {
    location.href = devMode
      ? `${import.meta.env.VITE_DEV_URL}/callback`
      : 'https://cristian-os.vercel.app/callback';
    return;
  }

  const { items: topTracks } = (await fetchSpotifyApi(
    'v1/me/top/tracks?time_range=short_term&limit=5',
    'GET'
  )) as TopTracksProps;
  //
  return topTracks.map(track => {
    return {
      name: track.name,
      artists: track.artists,
      albumImage: track.album.images[0].url,
      url: track.external_urls.spotify,
      id: track.id,
    };
  });
}
