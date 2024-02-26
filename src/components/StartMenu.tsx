import { Link } from 'react-router-dom';
import {
  SearchIcon,
  PowerIcon,
  CircleUserRoundIcon,
  ListMusicIcon,
  Gamepad2Icon,
  GithubIcon,
} from 'lucide-react';

import { Apps } from '../types/apps';

import discordIcon from '/discord-icon.svg';

type StartMenuProps = {
  openApp: (app: Apps) => void;
};

export function StartMenu({ openApp }: StartMenuProps) {
  return (
    <div
      className='absolute rounded-lg z-50
        inset-0 top-5 px-4 lg:p-0 w-full h-fit
      '
    >
      <section className='p-5 backdrop-blur-[250px] rounded-t-lg space-y-5'>
        <div className='relative'>
          <SearchIcon
            className='absolute left-3 top-[25%]'
            size={17}
            color='#8A8A8A'
          />
          <input
            placeholder='Type here to search'
            className='w-full px-2 pl-10 py-2 bg-zinc-900 outline-none rounded-3xl text-xs placeholder:text-xs'
          />
        </div>

        <div>
          <h3 className='font-bold mb-8'>Pinned Apps</h3>

          <ul className='flex gap-5 items-start flex-wrap'>
            <li
              className='w-[72px] h-[72px] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-200/20 transition-colors rounded-md'
              onClick={() => openApp('aboutMe')}
            >
              <CircleUserRoundIcon size={32} />
              <p className='text-xs max-w-[10ch] text-center'>About me</p>
            </li>

            <li
              className='w-[72px] h-[72px] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-200/20 transition-colors rounded-md'
              onClick={() => openApp('tracks')}
            >
              <ListMusicIcon size={32} />
              <p className='text-xs max-w-[10ch] text-center'>
                Your Top Tracks
              </p>
            </li>

            <li
              className='w-[72px] h-[72px] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-200/20 transition-colors rounded-md'
              onClick={() => openApp('games')}
            >
              <Gamepad2Icon size={32} />
              <p className='text-xs max-w-[10ch] text-center'>My Top Games</p>
            </li>

            <li
              className='w-[72px] h-[72px] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-200/20 transition-colors rounded-md'
              onClick={() => openApp('recentProjects')}
            >
              <GithubIcon size={32} />
              <p className='text-xs max-w-[10ch] text-center'>My Recent Work</p>
            </li>

            <li className='w-[72px] h-[72px] cursor-pointer hover:bg-gray-200/20 transition-colors rounded-md'>
              <a
                href='https://discord.com/users/669660510093967371'
                target='_blank'
                rel='noreferrer'
                className='flex flex-col items-center justify-center gap-2'
              >
                <img
                  src={discordIcon}
                  alt='Discord Icon'
                  className='h-10 w-10'
                />

                <p className='text-xs max-w-[10ch] text-center'>My Discord</p>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-bold'>Pinned Apps</h3>

          <ul className='flex gap-11 items-center flex-wrap'>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
            <li>Item5</li>
          </ul>
        </div>
      </section>

      <footer className='px-5 py-5 flex justify-between items-center bg-zinc-900 rounded-b-lg'>
        <div className='flex items-center gap-3'>
          <img
            src='https://github.com/cristian-sbardelotto.png'
            alt='My Profile Image'
            className='rounded-full w-8 h-8'
          />

          <a
            href='https://linkedin.com/in/cristian-k-sbardelotto'
            target='_blank'
            rel='noreferrer'
            className='text-sm hover:underline'
          >
            Cristian Sbardelotto
          </a>
        </div>

        <Link
          to='/'
          title='Turn Off'
        >
          <PowerIcon
            size={26}
            className='transition-colors hover:bg-slate-100/5 p-1 rounded-sm'
          />
        </Link>
      </footer>
    </div>
  );
}
