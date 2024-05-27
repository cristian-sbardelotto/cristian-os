import { useEffect, useState } from 'react';

import { ProjectProps } from '../types/projects';

export function useFetchRecentProjects() {
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

  return { projects };
}
