import { useContext, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { getCurrentDate } from '../utils/getCurrentDate';
import { getCurrentTime } from '../utils/getCurrentTime';

import { appsIcons, appsNames } from '../data/apps';
import { AppContext } from '../context/App';

import { XIcon } from 'lucide-react';

import startMenuIcon from '/start-menu-icon.svg';
import wifiIcon from '/wifi-icon.svg';
import notificationsIcon from '/notifications-icon.svg';

type TaskbarProps = {
  onStartClick: () => void;
  isMenuOpen: boolean;
};

export function Taskbar({ onStartClick, isMenuOpen }: TaskbarProps) {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const { openedApp, closeApp } = useContext(AppContext);

  const ONE_SECOND_IN_MILLISECONDS = 1000;
  setInterval(
    () => setCurrentTime(getCurrentTime()),
    ONE_SECOND_IN_MILLISECONDS
  );

  function handleChangeLanguage() {
    const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';

    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  }

  return (
    <section className='group p-4 flex items-center justify-between bg-[#2222] backdrop-blur-[50px] sm:h-[78px] animate-appear-down'>
      <div className='flex items-center gap-4'>
        <img
          src={startMenuIcon}
          alt='Start Menu Icon'
          title='Start'
          className={`h-fit cursor-pointer hover:brightness-200 hover:shadow-start-menu transition-all duration-[500ms] ${
            isMenuOpen && 'shadow-start-menu'
          }`}
          onClick={onStartClick}
        />

        {openedApp !== 'none' && (
          <div className='hidden relative p-1 bg-white/10 rounded-lg sm:block'>
            <div
              className='flex flex-col items-center gap-1'
              title={appsNames[openedApp]}
            >
              {appsIcons[openedApp]}

              <div className='w-[15px] bg-white h-[3px] rounded-full' />
            </div>

            <div
              title='Close App'
              onClick={closeApp}
            >
              <XIcon className='hidden group-hover:block absolute inset-0 left-[125%] top-1/4 cursor-pointer rounded-md hover:bg-red-400 hover:bg-opacity-30 transition-colors' />
            </div>
          </div>
        )}
      </div>

      <div className='flex items-center gap-4'>
        <button
          className='hover:bg-gray-200/10 rounded-xl px-2 py-1 transition-colors duration-200'
          onClick={handleChangeLanguage}
        >
          {language === 'pt' ? 'PT-BR' : 'EN-US'}
        </button>

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
