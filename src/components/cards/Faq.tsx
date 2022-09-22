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
        if (id === '1') setOpen(true)
    }, [id])


    return (
        <div className='flex flex-row gap-x-4 bg-primary-100 p-10 rounded-[0.625rem] overflow-hidden relative'>
            <div className='text-[3.125rem] text-gray-400 mt-2 mr-4'>{Number(id) < 10 ? `0${id}` : id}</div>

            <div className='flex flex-col gap-y-4 mr-10'>
                <div className='text-2xl'>{title}</div>
                {check && <div className='text-gray-500'>{body}</div>}
            </div>

            <div className='absolute right-0 mr-6'>
                {
                    !open
                        ? <Close onClick={toggleFaq} className='w-10 h-10 cursor-pointer' />
                        : <Add onClick={toggleFaq} className='w-10 h-10 cursor-pointer' />
                }
            </div>
        </div>
    );
}