import { ReactNode } from 'react';
import { v4 as randomUUID } from 'uuid';

import { Luggage, Plane, ShoppingCart, Folder } from 'lucide-react';

type RecommendedProjectProps = {
  name: string;
  icon: ReactNode;
  technology: string;
  area: 'Frontend' | 'Backend' | 'Fullstack';
  id: string;
};

export const recommendedProjects: RecommendedProjectProps[] = [
  {
    name: 'Portfolio',
    icon: <Luggage />,
    technology: 'Typescript',
    area: 'Frontend',
    id: randomUUID(),
  },
  {
    name: 'FSW Store',
    icon: <ShoppingCart />,
    technology: 'Typescript',
    area: 'Fullstack',
    id: randomUUID(),
  },
  {
    name: 'Studion Backend',
    icon: <Plane />,
    technology: 'Typescript',
    area: 'Backend',
    id: randomUUID(),
  },
  {
    name: 'Blog Sbardelotto',
    icon: <Folder />,
    technology: 'Typescript',
    area: 'Fullstack',
    id: randomUUID(),
  },
];
