import { ReactNode } from 'react';

type StartProjectInfoProps = {
  children: ReactNode;
  projectTechnology: string;
  projectArea: string;
};

export function StartProjectInfo({
  children,
  projectTechnology,
  projectArea,
}: StartProjectInfoProps) {
  return (
    <div>
      <p>{children}</p>

      <p className='text-xs'>
        {projectTechnology} | {projectArea}
      </p>
    </div>
  );
}
