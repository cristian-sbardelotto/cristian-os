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

  return (
    <Application.Root>
      <Application.Header>Your Top Songs</Application.Header>

      <Application.Content>
        <ul className='list-none space-y-8 px-6'>
          {tracks?.map(track => (
            <li
              className='flex items-center gap-6'
              key={track.id}
            >
              <img
                src={track.albumImage}
                alt={track.name}
                className='h-20'
              />

              <div className='h-full flex flex-col justify-around'>
                <a
                  href={track.url}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:underline'
                >
                  <h4 className='group-hover:underline font-semibold break-all'>
                    {track.name}
                  </h4>
                </a>

                <p className='text-sm font-light break-all'>{track.artists}</p>
              </div>
            </li>
          ))}
        </ul>
      </Application.Content>
    </Application.Root>
  );
}
