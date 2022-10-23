import React from 'react';

import ChatComponent from '@/components/chat';
import DashboardLayout from '@/components/layout/Dashboard';

import { userStore } from '@/store';


export default function Chat() {
  const { user_data } = userStore();
  console.log(user_data);
  

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
    <div className='flex h-[8.5rem] w-[45.875rem] flex-row gap-x-[1.875rem] rounded-[0.625rem] bg-primary p-[1.875rem]'>
      <div className='my-auto text-3xl font-medium'>Chats</div>

      <div className='my-auto mb-[1.25rem]'></div>
    </div>
  );
}
