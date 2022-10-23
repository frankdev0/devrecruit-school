/* eslint-disable @next/next/no-img-element */
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import router from 'next/router';
import React from 'react';
import { Fragment } from 'react'
import { toast } from 'react-toastify';

import { userStore } from '@/store';

import { logOut } from '@/modules';

export default function MenuDropdown() {
  const { remove_user } = userStore();

  const handleLogout = async () => {
    const response = await logOut();

    if (response === "Success") {
      remove_user();
      router.push('/');
      toast.success('Logout Successful')
    }
  }

  return (
    <div className="z-100 w-[12.9375rem] h-[3.625rem] text-right">
      <Menu as="div" className="relative inline-block text-left w-full">
        <div className='flex'>
          <Menu.Button className="inline-flex w-full gap-x-5 h-[3.625rem] justify-center rounded-md bg-[#EDF8F6] px-4 py-2 text-base font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <div className='my-auto'>
              <img src='/images/user.png' alt='' className='w-10 h-10' />
            </div>
            <div className='my-auto text-[#447175]'>
              Admin
            </div>
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-[#447175] hover:text-[#579ca2] my-auto"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <Link href='/profile'>
                  <button
                    className={`${'hover:bg-primary text-black hover:text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm gap-x-6`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>


                    Profile
                  </button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href='/settings'>
                  <button
                    className={`${'hover:bg-primary text-black hover:text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm gap-x-6`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    Settings
                  </button>
                </Link>

              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>

                <button
                  onClick={handleLogout}
                  className={`${'hover:bg-primary text-black hover:text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm gap-x-6`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg>


                  Logout
                </button>

              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}



