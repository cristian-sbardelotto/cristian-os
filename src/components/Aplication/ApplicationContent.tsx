import { ReactNode } from 'react';

type ApplicationContentProps = {
  children: ReactNode;
};

export function ApplicationContent({ children }: ApplicationContentProps) {
  return <div className='mt-8'>{children}</div>;
}
