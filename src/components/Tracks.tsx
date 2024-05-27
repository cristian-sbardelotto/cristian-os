import { Application } from './Application';
import { ExternalLink } from './ExternalLink';
import { tracks } from '../data/tracks';
import { useTranslation } from 'react-i18next';

export function Tracks() {
  const { t } = useTranslation();

  return (
    <Application.Root>
      <Application.Header>{t('apps.tracks')}</Application.Header>

      <Application.Content>
        <ul className='list-none space-y-8 px-6'>
          {tracks?.map(track => (
            <li
              className='flex justify-between'
              key={track.id}
            >
              <div className='flex items-center gap-6'>
                <img
                  src={track.albumImage}
                  alt={track.name}
                  className='h-20 lg:h-24'
                />

                <div className='h-full flex flex-col justify-between gap-1'>
                  <div className='flex flex-col gap-3'>
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

                    <div className='flex gap-2 flex-wrap'>
                      {track.artists.map(artist => (
                        <p
                          key={artist.name}
                          className='text-sm font-light break-words'
                        >
                          <a
                            href={artist.url}
                            target='_blank'
                            rel='noreferrer'
                            className='bg-gray-50/5 rounded-md py-[1px] px-1 hover:bg-gray-50/10 transition-all'
                          >
                            {artist.name}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <ExternalLink url={track.url} />
            </li>
          ))}
        </ul>
      </Application.Content>
    </Application.Root>
  );
}
