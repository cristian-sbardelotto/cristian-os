import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { StartApp } from './StartApp';
import { Apps } from '../types/apps';
import { apps } from '../data/apps';
import { recommendedProjects } from '../data/projects';
import { getTranslatedAppName } from '../utils/getTranslatedAppName';
import { searchOnGoogle } from '../utils/searchOnGoogle';

import { SearchIcon, PowerIcon } from 'lucide-react';

import discordIcon from '/discord-icon.svg';
import { StartProject } from './StartProject';

type StartMenuProps = {
  openApp: (app: Apps) => void;
};

export function StartMenu({ openApp }: StartMenuProps) {
  const { t } = useTranslation();

  return (
    <div className='absolute rounded-lg z-50 inset-0 top-5 px-4 w-full h-fit md:pl-4 md:max-w-[650px] md:top-[20%] animate-appear-down'>
      <section className='p-5 rounded-t-lg space-y-4 sm:space-y-5 bg-start-menu'>
        <form
          onSubmit={e => searchOnGoogle(e)}
          className='relative'
        >
          <button type='submit'>
            <SearchIcon
              className='absolute left-3 top-1/4'
              size={17}
              color='#8A8A8A'
            />
          </button>

          <input
            placeholder={t('start-menu.placeholder')}
            className='w-full pr-2 pl-10 py-2 bg-zinc-900 outline-none rounded-3xl text-xs placeholder:text-xs'
            name='search'
          />
        </form>

        <div>
          <h3 className='font-bold mb-4 sm:mb-8'>
            {t('start-menu.main.pinned-apps')}
          </h3>

          <ul className='flex gap-3 items-start flex-wrap sm:gap-5'>
            {apps.map(app => (
              <StartApp.Root
                openApp={() => openApp(app.slug)}
                key={app.id}
              >
                <StartApp.Icon>{app.icon}</StartApp.Icon>
                <StartApp.Name>
                  {t(getTranslatedAppName(app.slug))}
                </StartApp.Name>
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
                  className='h-6 w-6 sm:h-8 sm:w-8'
                />

                <p className='text-xs max-w-[10ch] text-center'>
                  {t('apps.discord')}
                </p>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-bold mb-4'>
            {t('start-menu.main.recommended-projects')}
          </h3>

          <ul className='grid gap-y-4 overflow-y-scroll max-h-24 sm:grid-cols-2 sm:max-h-[initial] sm:overflow-y-auto'>
            {recommendedProjects.map(project => (
              <StartProject.Root
                projectUrl={project.url}
                key={project.id}
              >
                {project.icon}

                <StartProject.Info
                  projectTechnology={project.technology}
                  projectLanguage={project.language}
                >
                  {project.name}
                </StartProject.Info>
              </StartProject.Root>
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
          title={t('title.turn-off')}
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
