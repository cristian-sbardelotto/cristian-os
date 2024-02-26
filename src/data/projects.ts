import { LucideIcon, Luggage, Plane, ShoppingCart, Folder } from 'lucide-react';

type RecommendedProjectProps = {
  name: string;
  icon: LucideIcon;
  technology: string;
  area: 'Frontend' | 'Backend' | 'Fullstack';
};

export const recommendedProjects: RecommendedProjectProps[] = [
  {
    name: 'Portfolio',
    icon: Luggage,
    technology: 'Typescript',
    area: 'Frontend',
  },
  {
    name: 'FSW Store',
    icon: ShoppingCart,
    technology: 'Typescript',
    area: 'Fullstack',
  },
  {
    name: 'Studion Backend',
    icon: Plane,
    technology: 'Typescript',
    area: 'Backend',
  },
  {
    name: 'Blog Sbardelotto',
    icon: Folder,
    technology: 'Typescript',
    area: 'Fullstack',
  },
];
