import { ReactNode } from 'react';

type ApplicationContentProps = {
  children: ReactNode;
};

export function ApplicationContent({ children }: ApplicationContentProps) {
  return (
    <div className='pb-8 px-2 max-h-[75vh] overflow-y-auto mt-8 lg:px-12'>
      {children}
    </div>
  );
}
