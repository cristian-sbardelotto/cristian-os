import { ReactNode } from 'react';

type ApplicationHeaderProps = {
  children: ReactNode;
};

export function ApplicationHeader({ children }: ApplicationHeaderProps) {
  return (
    <div>
      <p>{children}</p>
    </div>
  );
}
