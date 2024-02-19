import { ReactNode, useContext } from 'react';

import { AppContext } from '../../context/App';

import { XIcon } from 'lucide-react';

type ApplicationHeaderProps = {
  children: ReactNode;
};

export function ApplicationHeader({ children }: ApplicationHeaderProps) {
  const { closeApp } = useContext(AppContext);

  return (
    <header className='flex justify-between items-center'>
      <h2 className='text-2xl font-semibold'>{children}</h2>

      <XIcon
        className='cursor-pointer'
        onClick={closeApp}
      />
    </header>
  );
}
