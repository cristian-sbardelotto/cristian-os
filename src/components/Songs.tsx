import { Application } from './Application';

import { getTopTracks } from '../utils/getSpotifyTracks';

const tracks = await getTopTracks();
console.log(tracks);

export function Songs() {
  return (
    <Application.Root>
      <Application.Header>Top Songs</Application.Header>

      <Application.Content>
        {tracks.map(track => (
          <li key={track.id}>
            <img
              src={track.albumImage}
              alt={track.name}
            />

            <a
              href={track.url}
              target='_blank'
              rel='noreferrer'
            >
              <h4>{track.name}</h4>
            </a>

            <p>{track.artists}</p>
          </li>
        ))}
      </Application.Content>
    </Application.Root>
  );
}
