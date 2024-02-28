import { useState } from 'react';

import { getCurrentDate } from '../utils/getCurrentDate';
import { getCurrentTime } from '../utils/getCurrentTime';

import startMenuIcon from '/start-menu-icon.svg';
import wifiIcon from '/wifi-icon.svg';
import notificationsIcon from '/notifications-icon.svg';

type TaskbarProps = {
  onStartClick: () => void;
  isMenuOpen: boolean;
};

export function Taskbar({ onStartClick, isMenuOpen }: TaskbarProps) {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  const ONE_SECOND_IN_MILLISECONDS = 1000;
  setInterval(
    () => setCurrentTime(getCurrentTime()),
    ONE_SECOND_IN_MILLISECONDS
  );

  return (
    <section className='p-4 flex items-center justify-between bg-[#2222] backdrop-blur-[50px]'>
      <img
        src={startMenuIcon}
        alt='Start Menu Icon'
        title='Start'
        className={`cursor-pointer hover:brightness-200 hover:shadow-start-menu transition-all duration-[500ms] ${
          isMenuOpen && 'shadow-start-menu'
        }`}
        onClick={onStartClick}
      />

      <div className='flex items-center gap-4'>
        <img
          src={wifiIcon}
          alt='Wi-fi Icon'
          className='w-5 h-5'
          title='Connected'
        />

        <div className='text-sm text-end tracking-wide'>
          <p className='font-sans cursor-default select-none'>{currentTime}</p>
          <p className='font-sans cursor-default select-none'>
            {getCurrentDate()}
          </p>
        </div>

        <img
          src={notificationsIcon}
          alt='Notifications Icon'
          title='You have no notifications'
          className='w-5 h-5'
        />
      </div>
    </section>
  );
}
