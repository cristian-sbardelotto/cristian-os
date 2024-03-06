import { ExternalLinkIcon } from 'lucide-react';
import { Button } from './Button';

type ExternalLinkProps = {
  url: string;
};

export function ExternalLink({ url }: ExternalLinkProps) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer'
      className='hidden lg:block'
    >
      <Button className='group w-fit px-4 gap-2 bg-gray-200/20 rounded-full border-none hover:brightness-200'>
        <ExternalLinkIcon className='group-hover:scale-110 transition-all duration-300' />
      </Button>
    </a>
  );
}
