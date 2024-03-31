import { ReactNode } from 'react';

type StartProjectInfoProps = {
  children: ReactNode;
  projectTechnology: string;
  projectLanguage: string;
};

export function StartProjectInfo({
  children,
  projectTechnology,
  projectLanguage,
}: StartProjectInfoProps) {
  return (
    <div>
      <p>{children}</p>

      <p className='text-xs'>
        {projectTechnology} | {projectLanguage}
      </p>
    </div>
  );
}
