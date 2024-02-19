import { Application } from './Application';

const token = localStorage.getItem('token');

async function fetchWebApi(endpoint: string, method: string) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
  });
  return await res.json();
}

async function getTopTracks() {
  return (
    await fetchWebApi('v1/me/top/tracks?time_range=long_term&limit=5', 'GET')
  ).items;
}

const songs = (await getTopTracks()) as {
  name: string;
  artists: Array<object>;
}[];
console.log(
  songs?.map(
    ({ name, artists }) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);

export function Songs() {
  return (
    <Application.Root>
      <Application.Header>Top Songs</Application.Header>

      <Application.Content>Songs</Application.Content>
    </Application.Root>
  );
}
