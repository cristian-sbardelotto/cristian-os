import { useState } from 'react';

import startMenuIcon from '/start-menu-icon.svg';
import wifiIcon from '/wifi-icon.svg';
import notificationsIcon from '/notifications-icon.svg';

const date = new Date();
const currentDate = date.toLocaleDateString('en-US');

function getCurrentTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const currentHour = hour < 10 ? `0${hour}` : hour;
  const currentMinute = minute < 10 ? `0${minute}` : minute;

  return `${currentHour}:${currentMinute}`;
}

export function Taskbar() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  const ONE_SECOND_IN_MILLISECONDS = 1000;
  setInterval(
    () => setCurrentTime(getCurrentTime()),
    ONE_SECOND_IN_MILLISECONDS
  );

  return (
    <footer className='p-4 flex items-center justify-between bg-[#2222] backdrop-blur-[50px]'>
      <img
        src={startMenuIcon}
        alt='Start Menu Icon'
        title='Start'
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
          <p className='font-sans cursor-default select-none'>{currentDate}</p>
        </div>

        <img
          src={notificationsIcon}
          alt='Notifications Icon'
          title='You have no notifications'
          className='w-5 h-5'
        />
      </div>
    </footer>
  );
}
