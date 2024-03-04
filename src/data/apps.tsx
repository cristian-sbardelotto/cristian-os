import { ReactNode } from 'react';

import { v4 as randomUUID } from 'uuid';

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

type AppsProps = {
  icon: ReactNode;
  name: string;
  slug: Apps;
  id: string;
};

export const appsNames: Record<Apps | 'none', string> = {
  aboutMe: 'About Me',
  tracks: 'Your Top Tracks',
  games: 'My Top Games',
  recentProjects: 'My Recent Work',
  none: '',
};

export const appsIcons: Record<Apps, ReactNode> = {
  aboutMe: (
    <CircleUserRoundIcon
      size={30}
      className='h-full w-full'
    />
  ),
  tracks: (
    <ListMusicIcon
      size={30}
      className='h-full w-full'
    />
  ),
  games: (
    <Gamepad2Icon
      size={30}
      className='h-full w-full'
    />
  ),
  recentProjects: (
    <GithubIcon
      size={30}
      className='h-full w-full'
    />
  ),
};

export const apps: AppsProps[] = [
  {
    id: randomUUID(),
    name: appsNames.aboutMe,
    icon: appsIcons.aboutMe,
    slug: 'aboutMe',
  },
  {
    id: randomUUID(),
    name: appsNames.games,
    icon: appsIcons.games,
    slug: 'games',
  },
  {
    id: randomUUID(),
    name: appsNames.recentProjects,
    icon: appsIcons.recentProjects,
    slug: 'recentProjects',
  },
  {
    id: randomUUID(),
    name: appsNames.tracks,
    icon: appsIcons.tracks,
    slug: 'tracks',
  },
];

export const appsComponents: Record<Apps | 'none', ReactNode> = {
  aboutMe: <AboutMe />,
  tracks: <Tracks />,
  games: <Games />,
  recentProjects: <RecentProjects />,
  none: <></>,
};
