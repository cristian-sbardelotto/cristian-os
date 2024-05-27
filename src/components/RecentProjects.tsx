import { Application } from './Application';
import { useTranslation } from 'react-i18next';

import { GithubIcon } from 'lucide-react';
import { useFetchRecentProjects } from '../hooks/useFetchRecentProjects';

export function RecentProjects() {
  const { projects } = useFetchRecentProjects();

  const { t } = useTranslation();

  return (
    <Application.Root>
      <Application.Header>{t('apps.recent-projects')}</Application.Header>

      <Application.Content>
        <ul className='list-none space-y-8 px-2 pt-1 md:px-6'>
          {projects.map(project => (
            <li
              key={project.id}
              className='bg-white/10 rounded-2xl p-2 hover:scale-[1.03] hover:bg-white/20 transition-all duration-300 lg:max-w-[800px] lg:p-6'
            >
              <a
                target='_blank'
                rel='noreferrer'
                href={project.html_url}
                className='flex flex-col gap-3'
              >
                <h4 className='flex items-center gap-1 text-lg font-semibold break-all hover:underline xl:text-xl'>
                  <GithubIcon />
                  {project.name}
                </h4>

                <p className='text-ellipsis whitespace-nowrap overflow-hidden lg:overflow-visible lg:whitespace-normal'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2'>
                  {project.topics && project.topics.length > 0 ? (
                    project.topics.slice(0, 3).map(topic => (
                      <span
                        className='py-1 px-2 text-xs font-light break-all rounded-full bg-indigo-500 cursor-default lg:text-sm'
                        key={topic}
                      >
                        {topic}
                      </span>
                    ))
                  ) : (
                    <span className='py-1 px-2 text-xs font-light break-all rounded-full bg-gray-200/20 cursor-default lg:text-sm'>
                      No topics found
                    </span>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Application.Content>
    </Application.Root>
  );
}
