import { useState } from 'react';

import { StartMenu } from '../components/StartMenu';
import { Taskbar } from '../components/Taskbar';

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(previous => !previous);
  }

  return (
    <>
      {isMenuOpen && <StartMenu />}

      <footer className='absolute bottom-0 w-full'>
        <Taskbar onStartClick={toggleMenu} />
      </footer>
    </>
  );
}
