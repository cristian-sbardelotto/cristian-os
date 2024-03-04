import { ReactNode } from 'react';

type StartAppNameProps = {
  children: ReactNode;
};

export function StartAppName({ children }: StartAppNameProps) {
  return <p className='text-xs max-w-[10ch] text-center'>{children}</p>;
}
