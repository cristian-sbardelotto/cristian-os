import { ReactNode } from 'react';

import { AboutMe } from '../components/AboutMe';
import { Tracks } from '../components/Tracks';
import { Games } from '../components/Games';
import { RecentProjects } from '../components/RecentProjects';
import { Apps } from '../types/apps';

import {
  CircleUserRoundIcon,
  ListMusicIcon,
  Gamepad2Icon,
  GithubIcon,
} from 'lucide-react';

export const apps: Record<Apps | 'none', ReactNode> = {
  aboutMe: <AboutMe />,
  tracks: <Tracks />,
  games: <Games />,
  recentProjects: <RecentProjects />,
  none: <></>,
};

export const appsIcons: Record<Apps, ReactNode> = {
  aboutMe: <CircleUserRoundIcon size={30} />,
  tracks: <ListMusicIcon size={30} />,
  games: <Gamepad2Icon size={30} />,
  recentProjects: <GithubIcon size={30} />,
};

export const appsNames: Record<Apps | 'none', string> = {
  aboutMe: 'About Me',
  tracks: 'Your Top Tracks',
  games: 'My Top Games',
  recentProjects: 'My Recent Work',
  none: '',
};
