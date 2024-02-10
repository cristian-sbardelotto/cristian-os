import { useEffect, useState } from 'react';

import { StartMenu } from '../components/StartMenu';
import { Taskbar } from '../components/Taskbar';

import { apps } from '../data/apps';
import { Apps } from '../types/apps';

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openedApp, setOpenedApp] = useState<Apps | 'none'>('none');

  function toggleMenu() {
    setIsMenuOpen(previous => !previous);
  }

  function openApp(app: Apps) {
    setOpenedApp(app);
  }

  useEffect(() => {
    setIsMenuOpen(false);
  }, [openedApp]);

  return (
    <>
      {isMenuOpen && <StartMenu openApp={openApp} />}

      {openedApp !== 'none' && apps[openedApp]}

      <footer className='absolute bottom-0 w-full'>
        <Taskbar onStartClick={toggleMenu} />
      </footer>
    </>
  );
}
