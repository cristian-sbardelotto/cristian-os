import { useEffect, useState } from 'react';

import { Application } from './Application';

import { getTopTracks } from '../utils/getSpotifyTracks';

type TrackProps = {
  name: string;
  artists: string;
  albumImage: string;
  url: string;
  id: string;
};

export function Songs() {
  const [tracks, setTracks] = useState<TrackProps[] | undefined>([]);

  useEffect(() => {
    async function getTracks() {
      const data = await getTopTracks();
      setTracks(data);
    }

    getTracks();
  }, []);

  console.log(tracks);

  return (
    <Application.Root>
      <Application.Header>Your Top Songs</Application.Header>

      <Application.Content>
        <ul>
          {tracks?.map(track => (
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
        </ul>
      </Application.Content>
    </Application.Root>
  );
}
