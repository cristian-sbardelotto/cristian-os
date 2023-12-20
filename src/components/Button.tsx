import { ComponentProps } from 'react';

import { twMerge } from 'tailwind-merge';

type ButtonProps = ComponentProps<'button'> & {
  children: React.ReactNode;
};

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'py-4 px-36 flex justify-center items-center cursor-pointer text-gray-200 text-lg rounded-full border-2 border-[#bcbcbcbd] bg-[#ffffff33] shadow-button backdrop-blur-xl transition duration-500 hover:brightness-125',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
