import { useContext, useEffect, useState } from 'react';

import { StartMenu } from '../components/StartMenu';
import { Taskbar } from '../components/Taskbar';

import { AppContext } from '../context/App';
import { apps } from '../data/apps';

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openedApp, openApp } = useContext(AppContext);

  function toggleMenu() {
    setIsMenuOpen(previous => !previous);
  }

  useEffect(() => {
    setIsMenuOpen(false);
  }, [openedApp]);

  return (
    <>
      {isMenuOpen && <StartMenu openApp={openApp} />}

      {openedApp !== 'none' && apps[openedApp]}

      <footer className='absolute bottom-0 w-full h-[72px]'>
        <Taskbar onStartClick={toggleMenu} />
      </footer>
    </>
  );
}
