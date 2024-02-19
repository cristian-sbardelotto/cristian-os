import { ReactNode } from 'react';

type ApplicationContentProps = {
  children: ReactNode;
};

export function ApplicationContent({ children }: ApplicationContentProps) {
  return (
    <div className='pb-8 max-h-[65vh] overflow-y-scroll mt-8'>{children}</div>
  );
}
