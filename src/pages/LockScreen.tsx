import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { useTranslation } from 'react-i18next';

import { Github, Linkedin } from 'lucide-react';

import turnOffIcon from '/turn-off-icon.svg';
import wifiIcon from '/wifi-icon.svg';
import batteryIcon from '/battery-icon.svg';
import { Separator } from '../components/Separator';

export function LockScreenPage() {
  const { t } = useTranslation();

  return (
    <main className='pt-5 pb-10 h-full flex flex-col justify-between md:pb-16 animate-appear'>
      <header className='flex items-center justify-between px-5 md:px-[50px] md:pt-10'>
        <p className='flex flex-col md:inline-block text-xs md:text-base text-zinc-300 font-semibold'>
          {t('lock-screen.header.copyright')}{' '}
          <a
            href='https://linkedin.com/in/cristian-k-sbardelotto'
            target='_blank'
            rel='noreferrer'
            className='text-white transition-all duration-300 hover:underline'
          >
            Cristian Sbardelotto.
          </a>
        </p>

        <div className='flex items-center gap-2 md:gap-4'>
          <Link to='/'>
            <Button
              className='px-3 py-2'
              title={t('title.turn-off')}
            >
              <img
                src={turnOffIcon}
                alt='Turn off Icon'
                className='w-[14px] md:w-[16px] h-[14px] md:h-[16px]'
              />
            </Button>
          </Link>

          <img
            src={wifiIcon}
            alt='Wi-fi Icon'
            className='w-[20px] md:w-[26px] h-[14px] md:h-[20px]'
            title={t('title.wi-fi')}
          />

          <img
            src={batteryIcon}
            alt='Battery Icon'
            className='hidden sm:block w-[28px] md:w-[34px] h-[15px] md:h-[21px]'
            title={t('title.battery')}
          />
        </div>
      </header>

      <section className='flex flex-col items-center justify-center flex-1 gap-5 md:gap-7'>
        <img
          src='https://github.com/cristian-sbardelotto.png'
          alt='Profile Image'
          className='rounded-full shadow-profile-img w-36 h-36 md:w-48 md:h-48'
        />

        <h1 className='text-3xl font-semibold md:text-4xl'>Cristian OS</h1>

        <p className='-mt-4 text-[#A8A2A2] font-light text-lg md:text-xl'>
          {t('lock-screen.main.subtitle')}
        </p>

        <Link to='/home'>
          <Button className='px-6 py-3 text-sm md:text-lg md:px-12'>
            {t('lock-screen.main.button')}
          </Button>
        </Link>
      </section>

      <footer className='flex justify-center'>
        <Button className='px-7 py-3 gap-5 hover:scale-100'>
          <a
            href='https://github.com/cristian-sbardelotto'
            target='_blank'
            rel='noreferrer'
            className='transition-all hover:scale-[1.2]'
          >
            <Github />
          </a>

          <div className='h-[15px]'>
            <Separator orientation='vertical' />
          </div>

          <a
            href='https://linkedin.com/in/cristian-k-sbardelotto'
            target='_blank'
            rel='noreferrer'
            className='transition-all hover:scale-[1.2]'
          >
            <Linkedin />
          </a>
        </Button>
      </footer>
    </main>
  );
}
