import React from 'react';

import ChatComponent from '@/components/chat';
import DashboardLayout from '@/components/layout/Dashboard';

import { userStore } from '@/store';


export default function Chat() {
  const { user_data } = userStore();

  return (
    <DashboardLayout>
      <div className='flex flex-col px-20'>
        <div className='mt-10 flex flex-row justify-start gap-x-20'>
          <ChatTopCard />
        </div>

        <div className='my-20'>
          <ChatComponent user_data={user_data} />
        </div>
      </div>
    </DashboardLayout>
  );
}

function ChatTopCard() {
    return (
      <div className='flex h-[8.5rem] w-[45.875rem] flex-row gap-x-[1.875rem] rounded-[0.625rem] bg-primary p-[1.875rem] relative overflow-hidden'>
        <div className='my-auto text-3xl font-medium'>Chats</div>
  
        <div className='my-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#E7F2F0F2]">
            <path fillRule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
          </svg>
        </div>
  
        <div className='my-auto mt-[2rem] -ml-6'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#308176]">
            <path fillRule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
          </svg>
        </div>
  
  
        <div className='absolute top-0 right-0 -mt-6 mr-6'>
          <img src='/images/wal1.png' alt='' />
        </div>
  
        <div className='absolute top-0 right-0 -mt-6 -mr-6'>
          <img src='/images/wal2.png' alt='' />
        </div>
  
        <div className='absolute top-0 right-0 mt-6 -mr-6'>
          <img src='/images/wal3.png' alt='' />
        </div>
      </div>
    );
  }
