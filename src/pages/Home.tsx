import { useEffect, useState } from 'react';

import { StartMenu } from '../components/StartMenu';
import { Taskbar } from '../components/Taskbar';

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openedApp, setOpenedApp] = useState('');

  function toggleMenu() {
    setIsMenuOpen(previous => !previous);
  }

  function openApp(app: string) {
    setOpenedApp(app);
  }

  useEffect(() => {
    setIsMenuOpen(false);
  }, [openedApp]);

  return (
    <>
      {isMenuOpen && <StartMenu openApp={openApp} />}

      {openedApp === 'about-me' && <div>about me</div>}

      <footer className='absolute bottom-0 w-full'>
        <Taskbar onStartClick={toggleMenu} />
      </footer>
    </>
  );
}
