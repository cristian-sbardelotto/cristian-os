import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

import turnOffIcon from '/turn-off-icon.svg';

export function OffPage() {
  return (
    <main className='h-full flex items-center justify-center bg-off-screen bg-center bg-no-repeat bg-cover'>
      <Link to='/home'>
        <Button
          className='px-14 py-8 hover:brightness-150 hover:shadow-button-light hover:scale-[1.01]'
          title='Turn On'
        >
          <img
            src={turnOffIcon}
            alt='Turn off Icon'
            className='w-[105px] h-[120px] sm:h-full sm:w-full'
          />
        </Button>
      </Link>
    </main>
  );
}
