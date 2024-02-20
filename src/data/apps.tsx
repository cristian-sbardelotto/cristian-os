import { ReactNode } from 'react';

import { AboutMe } from '../components/AboutMe';
import { Tracks } from '../components/Tracks';
import { Games } from '../components/Games';
import { RecentProjects } from '../components/RecentProjects';
import { Apps } from '../types/apps';

export const apps: Record<Apps | 'none', ReactNode> = {
  aboutMe: <AboutMe />,
  tracks: <Tracks />,
  games: <Games />,
  recentProjects: <RecentProjects />,
  none: <></>,
};
