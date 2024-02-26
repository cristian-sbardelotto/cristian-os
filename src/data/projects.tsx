import { ReactNode } from 'react';
import { v4 as randomUUID } from 'uuid';

import { Luggage, Plane, ShoppingCart, Folder } from 'lucide-react';

type RecommendedProjectProps = {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
  technology: string;
  area: 'Frontend' | 'Backend' | 'Fullstack';
};

export const recommendedProjects: RecommendedProjectProps[] = [
  {
    id: randomUUID(),
    name: 'Portfolio',
    url: 'https://github.com/cristian-sbardelotto/portfolio',
    icon: <Luggage size={36} />,
    technology: 'Typescript',
    area: 'Frontend',
  },
  {
    id: randomUUID(),
    name: 'FSW Store',
    url: 'https://github.com/cristian-sbardelotto/fsw-store',
    icon: <ShoppingCart size={36} />,
    technology: 'Typescript',
    area: 'Fullstack',
  },
  {
    id: randomUUID(),
    name: 'Studion Backend',
    url: 'https://github.com/cristian-sbardelotto/studion-backend',
    icon: <Plane size={36} />,
    technology: 'Typescript',
    area: 'Backend',
  },
  {
    id: randomUUID(),
    name: 'Blog Sbardelotto',
    url: 'https://github.com/cristian-sbardelotto/blog-sbardelotto',
    icon: <Folder size={36} />,
    technology: 'Typescript',
    area: 'Fullstack',
  },
];
