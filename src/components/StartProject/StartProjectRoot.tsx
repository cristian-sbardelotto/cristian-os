import { ReactNode } from 'react';

type StartProjectRootProps = {
  children: ReactNode;
  projectUrl: string;
};

export function StartProjectRoot({
  children,
  projectUrl,
}: StartProjectRootProps) {
  return (
    <li>
      <a
        href={projectUrl}
        target='_blank'
        rel='noreferrer'
        className='p-2 sm:w-fit flex items-center gap-2 rounded-2xl hover:bg-white/10 transition-colors duration-300'
      >
        {children}
      </a>
    </li>
  );
}
