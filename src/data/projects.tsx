import { ReactNode } from 'react';
import { v4 as randomUUID } from 'uuid';

import { Luggage, Smile, ShoppingCart, ListTodo } from 'lucide-react';

type RecommendedProjectProps = {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
  language: string;
  technology: string;
};

export const recommendedProjects: RecommendedProjectProps[] = [
  {
    id: randomUUID(),
    name: 'Portfolio',
    url: 'https://github.com/cristian-sbardelotto/portfolio',
    icon: (
      <Luggage
        size={28}
        className='sm:h-9 sm:w-9'
      />
    ),
    language: 'Typescript',
    technology: 'Next.js',
  },
  {
    id: randomUUID(),
    name: 'Meme Creator',
    url: 'https://github.com/cristian-sbardelotto/meme-creator',
    icon: (
      <Smile
        size={28}
        className='sm:h-9 sm:w-9'
      />
    ),
    technology: 'React',
    language: 'Typescript',
  },
  {
    id: randomUUID(),
    name: 'ImagineShop',
    url: 'https://github.com/cristian-sbardelotto/imagineshop',
    icon: (
      <ShoppingCart
        size={28}
        className='sm:h-9 sm:w-9'
      />
    ),
    language: 'Typescript',
    technology: 'Next.js',
  },
  {
    id: randomUUID(),
    name: 'Todo List',
    url: 'https://github.com/cristian-sbardelotto/to-do-list',
    icon: (
      <ListTodo
        size={28}
        className='sm:h-9 sm:w-9'
      />
    ),
    technology: 'React',
    language: 'Typescript',
  },
];
