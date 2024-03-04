import { ReactNode } from 'react';

type StartAppIconProps = {
  children: ReactNode;
};

export function StartAppIcon({ children }: StartAppIconProps) {
  return <div className='h-6 w-6 sm:h-8 sm:w-8'>{children}</div>;
}
