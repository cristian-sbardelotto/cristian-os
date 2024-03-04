import { FormEvent } from 'react';

import { Link } from 'react-router-dom';

import { StartApp } from './StartApp';
import { Apps } from '../types/apps';
import { recommendedProjects } from '../data/projects';

import { SearchIcon, PowerIcon } from 'lucide-react';

import discordIcon from '/discord-icon.svg';
import { apps } from '../data/apps';

type StartMenuProps = {
  openApp: (app: Apps) => void;
};

export function StartMenu({ openApp }: StartMenuProps) {
  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    const searchValue = data.search as string;
    const formattedValue = searchValue.split(' ').join('+');

    const searchUrl = 'https://www.google.com/search?q=';

    window.open(`${searchUrl}${formattedValue}`);
  }

  return (
    <div className='absolute rounded-lg z-50 inset-0 top-5 px-4 w-full h-fit md:pl-4 md:max-w-[650px] md:top-[20%] 2xl:top-1/3'>
      <section className='p-5 backdrop-blur-[250px] rounded-t-lg space-y-4 sm:space-y-5'>
        <form
          onSubmit={e => handleSubmitForm(e)}
          className='relative'
        >
          <button type='submit'>
            <SearchIcon
              className='absolute left-3 top-[25%]'
              size={17}
              color='#8A8A8A'
            />
          </button>

          <input
            placeholder='Search on Google'
            className='w-full px-2 pl-10 py-2 bg-zinc-900 outline-none rounded-3xl text-xs placeholder:text-xs'
            name='search'
          />
        </form>

        <div>
          <h3 className='font-bold mb-4 sm:mb-8'>Pinned Apps</h3>

          <ul className='flex gap-3 items-start flex-wrap sm:gap-5'>
            {apps.map(app => (
              <StartApp.Root
                openApp={() => openApp(app.slug)}
                key={app.id}
              >
                <StartApp.Icon>{app.icon}</StartApp.Icon>
                <StartApp.Name>{app.name}</StartApp.Name>
              </StartApp.Root>
            ))}

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
                  className='h-8 w-8 sm:h-10 sm:w-10'
                />

                <p className='text-xs max-w-[10ch] text-center'>My Discord</p>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-bold mb-4'>Recommended Projects</h3>

          <ul className='grid gap-y-4 overflow-y-scroll max-h-24 sm:grid-cols-2 sm:max-h-[initial] sm:overflow-y-auto'>
            {recommendedProjects.map(project => (
              <li key={project.id}>
                <a
                  href={project.url}
                  target='_blank'
                  rel='noreferrer'
                  className='p-2 sm:w-fit flex items-center gap-2 rounded-2xl hover:bg-white/10 transition-colors duration-300'
                >
                  {project.icon}

                  <div>
                    <p>{project.name}</p>

                    <p className='text-xs'>
                      {project.technology} | {project.area}
                    </p>
                  </div>
                </a>
              </li>
            ))}
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
            size={24}
            className='transition-colors hover:bg-slate-100/5 p-1 rounded-sm'
          />
        </Link>
      </footer>
    </div>
  );
}
