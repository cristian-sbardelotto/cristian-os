import { Application } from './Application';

import { games } from '../data/games';

export function Games() {
  return (
    <Application.Root>
      <Application.Header>My Top Games</Application.Header>

      <Application.Content>
        <ul className='list-none space-y-8 px-4'>
          {games.map(game => (
            <li
              className='flex items-center gap-6'
              key={game.id}
            >
              <img
                src={game.coverImage}
                alt={game.name}
                className='h-28 w-20'
              />

              <div className='h-full flex flex-col justify-around gap-2'>
                <a
                  href={game.url}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:underline'
                >
                  <h4 className='group-hover:underline font-semibold break-words'>
                    {game.name}
                  </h4>
                </a>

                <div className='flex items-center flex-wrap gap-2 '>
                  {game.tags.map(tag => (
                    <span
                      className='py-1 px-2 text-xs font-light break-all rounded-full bg-indigo-500 cursor-default'
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}

                  <span className='py-1 px-2 text-xs font-light break-all rounded-full bg-green-500 cursor-default'>
                    {game.extraTag}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Application.Content>
    </Application.Root>
  );
}
