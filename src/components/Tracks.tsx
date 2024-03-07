import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Application } from './Application';
import { Button } from './Button';
import { ExternalLink } from './ExternalLink';
import { useTranslation } from 'react-i18next';
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

  const { t } = useTranslation();

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
      <Application.Header>{t('apps.tracks')}</Application.Header>

      <Application.Content>
        {token && token !== '' ? (
          <ul className='list-none space-y-8 px-6'>
            {tracks?.map(track => (
              <li
                className='flex items-center justify-between'
                key={track.id}
              >
                <div className='flex items-center gap-6'>
                  <img
                    src={track.albumImage}
                    alt={track.name}
                    className='h-20 lg:h-24'
                  />

                  <div className='h-full flex flex-col justify-around'>
                    <a
                      href={track.url}
                      target='_blank'
                      rel='noreferrer'
                      className='hover:underline'
                    >
                      <h4 className='group-hover:underline font-semibold break-words lg:text-lg'>
                        {track.name}
                      </h4>
                    </a>

                    <p className='text-sm font-light break-words'>
                      {track.artists}
                    </p>
                  </div>
                </div>

                <ExternalLink url={track.url} />
              </li>
            ))}
          </ul>
        ) : (
          <Link to='/callback'>
            <Button className='w-fit px-4 gap-2 bg-green-500 text-zinc-900 font-bold rounded-full border-none hover:bg-green-500 hover:brightness-75 hover:shadow-none'>
              {t('tracks.login-button')}{' '}
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
