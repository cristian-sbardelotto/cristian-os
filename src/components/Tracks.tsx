import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Application } from './Application';
import { Button } from './Button';

import { getTopTracks } from '../utils/getSpotifyTracks';

type TrackProps = {
  name: string;
  artists: string;
  albumImage: string;
  url: string;
  id: string;
};

export function Tracks() {
  const token = localStorage.getItem('token');
  const [tracks, setTracks] = useState<TrackProps[] | undefined>([]);

  useEffect(() => {
    async function getTracks() {
      if (!token) return;

      const data = await getTopTracks();
      setTracks(data);
    }

    getTracks();
  }, []);

  return (
    <Application.Root>
      <Application.Header>Your Top Tracks</Application.Header>

      <Application.Content>
        {token && token !== '' ? (
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

                  <p className='text-sm font-light break-all'>
                    {track.artists}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <Link to='/au'>
            <Button className='w-fit px-4 gap-2 bg-green-500 text-zinc-900 font-bold rounded-full border-none'>
              Login with Spotify{' '}
              <img
                src='/spotify-icon.svg'
                alt='Spotify Icons'
                className='h-8 w-8'
              />
            </Button>
          </Link>
        )}
      </Application.Content>
    </Application.Root>
  );
}
