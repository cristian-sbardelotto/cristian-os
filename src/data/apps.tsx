import { ReactNode } from 'react';

import { AboutMe } from '../components/AboutMe';
import { Songs } from '../components/Songs';
import { Games } from '../components/Games';
import { RecentProjects } from '../components/RecentProjects';
import { Apps } from '../types/apps';

export const apps: Record<Apps, ReactNode> = {
  aboutMe: <AboutMe />,
  songs: <Songs />,
  games: <Games />,
  recentProjects: <RecentProjects />,
};
