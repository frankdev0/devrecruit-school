/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { userStore } from '@/store';

import { logOut } from '@/modules';

import Nav from './Nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user_data, remove_user } = userStore();

  useEffect(() => {
    const isLoggedIn = () => {
      if (Object.keys(user_data).length === 0) {
        router.push('/')
        toast.info('You are not logged In.');
      }
    }

    isLoggedIn();
  }, [router, user_data])


  const handleLogout = async () => {
    const response = await logOut();

    if (response === "Success") {
      remove_user();
      router.push('/');
      toast.success('Logout Successful')
    }
  }

  // Put Header or Footer Here
  return (
    <div className='flex h-screen flex-row'>
      <div className='flex w-[15.4375rem] flex-col justify-start'>
        <div className='ml-10 '>
          <img
            src='/images/DevrRecruit Training Logo.png'
            width='50%'
            height='0%'
            alt='logo'
          />
        </div>

        <div className='flex h-screen w-[15.4375rem] flex-col rounded-tr-[6.625rem] border-r bg-[#447175] py-8'>
          <div className='mt-[4.6875rem] flex flex-1 flex-col justify-between'>
            <nav>
              <Link href='/users/dashboard'>
                <div className={clsx(
                  router.asPath === '/users/dashboard' ? 'bg-gray-100 text-[#447175]' : 'text-white transition-colors duration-300 hover:bg-white hover:font-semibold hover:text-[#447175]',
                  'mt-5 flex transform items-center rounded-tr-[0.625rem] px-4 py-2 cursor-pointer'
                )}>
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>

                  <span className='mx-4'>Profile</span>
                </div>
              </Link>

              <Link href='/users/chat'>
                <div className={clsx(
                  router.asPath === '/users/chat' ? 'bg-gray-100 text-[#447175]' : 'text-white transition-colors duration-300 hover:bg-white hover:font-semibold hover:text-[#447175]',
                  'mt-5 flex transform items-center rounded-tr-[0.625rem] px-4 py-2 cursor-pointer'
                )}>

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                  </svg>


                  <span className='mx-4'>Chat</span>
                </div>
              </Link>
            </nav>

            <div className='-mx-2 flex items-center px-4'>
              <div onClick={handleLogout} className='mx-2 font-medium text-gray-800 hover:underline dark:text-gray-200 cursor-nw-resize'>
                <div className='flex flex-row gap-x-[1.375rem]'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                  </div>

                  <div>Logout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-full flex-col'>
        <Nav />
        {children}
      </div>
    </div>
  );
}
