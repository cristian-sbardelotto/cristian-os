import { ReactNode } from 'react';

type ApplicationTitleProps = {
  children: ReactNode;
};

export function ApplicationTitle({ children }: ApplicationTitleProps) {
  return <h2 className='text-2xl font-semibold'>{children}</h2>;
}
