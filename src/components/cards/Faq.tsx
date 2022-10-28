import { useEffect, useState } from 'react';

import Add from '~/svg/add.svg';
import Close from '~/svg/close.svg';

interface Props {
  id: string;
  title: string;
  body: string;
  isOpen?: boolean;
}

export default function FaqCard({ id, title, body, isOpen }: Props) {
  const [open, setOpen] = useState(false);
  const check = isOpen || open;

  const toggleFaq = () => setOpen(!open);

  useEffect(() => {
    //* Make sure that the first faq is open by default */
    id === '1' && setOpen(true);
  }, [id]);

  return (
    <div className='relative flex flex-row gap-x-4 overflow-hidden rounded-[0.625rem] bg-primary-100 p-10'>
      <div className='mt-2 mr-4 text-[3.125rem] text-gray-400'>
        {Number(id) < 10 ? `0${id}` : id}
      </div>

      <div className='mr-10 flex flex-col gap-y-4'>
        <div className='text-2xl font-header'>{title}</div>
        {check && <div className='text-gray-500'>{body}</div>}
      </div>

      <div className='absolute right-0 mr-6'>
        {open ? (
          <Close onClick={toggleFaq} className='h-10 w-10 cursor-pointer' />
        ) : (
          <Add onClick={toggleFaq} className='h-10 w-10 cursor-pointer' />
        )}
      </div>
    </div>
  );
}
