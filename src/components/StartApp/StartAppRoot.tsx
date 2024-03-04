import { ReactNode } from 'react';

type StartAppRootProps = {
  children: ReactNode;
  openApp: () => void;
};

export function StartAppRoot({ children, openApp }: StartAppRootProps) {
  return (
    <li
      className='w-[72px] h-[72px] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-200/20 transition-colors rounded-md'
      onClick={openApp}
    >
      {children}
    </li>
  );
}
