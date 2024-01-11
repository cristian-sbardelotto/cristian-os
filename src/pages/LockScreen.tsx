import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

import turnOffIcon from '/turn-off-icon.svg';
import wifiIcon from '/wifi-icon.svg';
import batteryIcon from '/battery-icon.svg';

export function LockScreenPage() {
  return (
    <main className='h-full flex flex-col'>
      <header className='flex items-center justify-between px-5 pt-5 md:px-[50px] md:pt-10 animate-appear'>
        <p className='flex flex-col md:inline-block text-xs md:text-base text-zinc-300 font-semibold'>
          Made by{' '}
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
              title='Turn Off'
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
          />

          <img
            src={batteryIcon}
            alt='Battery Icon'
            className='w-[28px] md:w-[34px] h-[15px] md:h-[21px]'
          />
        </div>
      </header>
    </main>
  );
}
