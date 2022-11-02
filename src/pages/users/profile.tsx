import React from 'react';

import DashboardLayout from '@/components/layout/Dashboard';

import { userStore } from '@/store';

export default function Profile() {
  const { user_data } = userStore();

  return (
    <DashboardLayout>
      <div className='flex flex-col lg:px-20 my-auto'>
        <div className="p-6 lg:p-16">
          <div className="px-6 py-20 lg:p-8 bg-white shadow lg:mt-24">
            <div className="flex justify-center">
              <div className="">
                <div className="h-20 w-20 lg:w-48 lg:h-48 bg-primary-100 mx-auto rounded-full shadow-2xl inset-x-0 top-0 -mt-24 flex items-center justify-center text-primary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 lg:h-24 lg:w-24" viewBox="0 0 20 20" fill="currentColor">  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-20 text-center lg:pb-12">
              <h1 className="text-2xl lg:text-4xl font-medium text-gray-700">{user_data.full_name}</h1>
              <p className="font-light text-gray-600 mt-3">{user_data.email}</p>
              <p className="mt-2 text-gray-500">{user_data.paid ? (
                <div className='text-primary'>Paid</div>
              ) : (
                <div className='text-red-500'>Not Paid</div>
              )}</p>
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}


