import { XIcon } from 'lucide-react';
import { ReactNode } from 'react';

type ApplicationHeaderProps = {
  children: ReactNode;
  onClose: () => void;
};

export function ApplicationHeader({
  children,
  onClose,
}: ApplicationHeaderProps) {
  return (
    <header className='flex justify-between items-center'>
      <h2 className='text-2xl font-semibold'>{children}</h2>

      <XIcon onClick={onClose} />
    </header>
  );
}
