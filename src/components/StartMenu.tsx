import { SearchIcon, PowerIcon, CircleUserRoundIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

type StartMenuProps = {
  openApp: (app: string) => void;
};

export function StartMenu({ openApp }: StartMenuProps) {
  return (
    <div className='absolute left-3 top-1/4 rounded-lg'>
      <section className='p-11 backdrop-blur-[250px] rounded-t-lg'>
        <div className='relative mb-10'>
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

        <div className='mb-10'>
          <h3 className='font-bold mb-8'>Pinned Apps</h3>

          <ul className='flex gap-11 items-center'>
            <li
              className='flex flex-col items-center'
              onClick={() => openApp('about-me')}
            >
              <CircleUserRoundIcon size={32} />
              <p className='text-xs'>About me</p>
            </li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
            <li>Item5</li>
          </ul>
        </div>

        <div>
          <h3 className='font-bold'>Pinned Apps</h3>

          <ul className='flex gap-11 items-center'>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
            <li>Item5</li>
          </ul>
        </div>
      </section>

      <footer className='px-9 py-5 flex justify-between items-center bg-zinc-900 rounded-b-lg'>
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
