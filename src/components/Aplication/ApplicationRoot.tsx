import { ReactNode } from 'react';

type ApplicationRootProps = {
  children: ReactNode;
};

export function ApplicationRoot({ children }: ApplicationRootProps) {
  return (
    <div className='h-full px-4 pt-5 pb-8 bg-[#222222c4] backdrop-blur-[25px]'>
      {children}
    </div>
  );
}
