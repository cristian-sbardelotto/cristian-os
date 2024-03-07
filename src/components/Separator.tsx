type SeparatorProps = {
  orientation: 'vertical' | 'horizontal';
};

export function Separator({ orientation }: SeparatorProps) {
  return orientation === 'vertical' ? (
    <div className='w-[1px] bg-white h-full' />
  ) : (
    <div className='h-[1px] bg-white w-full' />
  );
}
