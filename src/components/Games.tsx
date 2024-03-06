import { Application } from './Application';
import { useTranslation } from 'react-i18next';
import { games } from '../data/games';
import { ExternalLink } from './ExternalLink';

export function Games() {
  const { t } = useTranslation();

  return (
    <Application.Root>
      <Application.Header>{t('apps.games')}</Application.Header>

      <Application.Content>
        <ul className='list-none space-y-8 px-4'>
          {games.map((game, index) => (
            <li
              className='flex items-center justify-between'
              key={game.id}
            >
              <div className='flex items-center gap-6 lg:gap-12'>
                <img
                  src={game.coverImage}
                  alt={game.name}
                  className='h-28 w-20 lg:h-32 lg:w-24 xl:h-44 xl:w-32'
                />

                <div className='h-full flex flex-col justify-around gap-2 lg:gap-6'>
                  <a
                    href={game.url}
                    target='_blank'
                    rel='noreferrer'
                    className='hover:underline'
                  >
                    <h4 className='group-hover:underline font-semibold break-words lg:text-lg xl:text-2xl'>
                      {++index}. {game.name}
                    </h4>
                  </a>

                  <div className='flex items-center flex-wrap gap-2'>
                    {game.tags.map(tag => (
                      <span
                        className='py-1 px-2 text-xs font-light break-all rounded-full bg-indigo-500 cursor-default lg:text-sm'
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}

                    <span className='py-1 px-2 text-xs font-light break-all rounded-full bg-green-500 cursor-default lg:text-sm'>
                      {game.extraTag}
                    </span>
                  </div>
                </div>
              </div>

              <ExternalLink url={game.url} />
            </li>
          ))}
        </ul>
      </Application.Content>
    </Application.Root>
  );
}
