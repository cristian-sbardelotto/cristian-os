import { useEffect, useState } from 'react';

import { Application } from './Application';

import { GithubIcon } from 'lucide-react';

type ProjectProps = {
  id: string | number;
  name: string;
  html_url: string;
  description: string;
  topics: string[];
};

export function RecentProjects() {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.github.com/users/cristian-sbardelotto/repos?sort=updated'
      );
      const data = (await response.json()) as ProjectProps[];

      const recentUpdatedProjects = data
        .filter(project => project.name !== 'cristian-sbardelotto')
        .slice(0, 5); // 5 most recent repos on Github, excluding my account repo

      setProjects(recentUpdatedProjects);
    }

    fetchData();
  }, []);

  return (
    <Application.Root>
      <Application.Header>My Recent Work</Application.Header>

      <Application.Content>
        <ul className='list-none space-y-8 px-6'>
          {projects.map(project => (
            <li key={project.id}>
              <a
                href={project.html_url}
                className='flex items-center gap-1'
              >
                <GithubIcon />
                <h4 className='hover:underline text-lg font-semibold break-all'>
                  {project.name}
                </h4>
              </a>

              <p className='text-ellipsis whitespace-nowrap overflow-hidden'>
                {project.description}
              </p>

              <div>
                {project.topics &&
                  project.topics.map(topic => <p key={topic}>{topic}</p>)}
              </div>
            </li>
          ))}
        </ul>
      </Application.Content>
    </Application.Root>
  );
}
