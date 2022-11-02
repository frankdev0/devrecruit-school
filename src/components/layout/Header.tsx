/* eslint-disable @next/next/no-img-element */
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link';
import * as React from 'react';
import { Fragment } from 'react'

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/pricing', label: 'Pricing' },
];

interface Props {
  isActive: string[] | undefined;
}

export default function Header({ isActive }: Props) {
  return (
    <>
      <header className='top-0 z-50 hidden lg:flex'>
        <div className='layout flex h-14 items-center justify-between pt-10 text-xl font-semibold'>
          <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
            <img
              className='w-32 md:w-40'
              src='/images/logo.png'
              width='185'
              height='90'
              alt='Icon'
            />
          </UnstyledLink>

          <nav>
            <ul className='ml-16 flex items-center justify-between space-x-20'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnstyledLink
                    href={href}
                    className={`hover:text-primary-600 ${isActive?.includes(label) &&
                      'text-primary-600 hover:text-white'
                      }`}
                  >
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className='flex flex-row gap-x-6'>
            <div
              className={`my-auto hover:text-primary-600 ${isActive?.includes('Login') && 'text-gray-600'
                }`}
            >
              <UnstyledLink href='/login'>Log In</UnstyledLink>
            </div>

            <div className='my-auto h-8 w-px bg-black'></div>

            <div>
              <ButtonLink
                href='/register'
                className='rounded-3xl font-light text-black'
              >
                Enroll Now
              </ButtonLink>
            </div>
          </div>
        </div>
      </header>

      <MobileNav />
    </>
  );
}

export function HeaderDark({ isActive }: Props) {
  return (
    <>
      <header className='top-0 z-50 hidden lg:flex'>
        <div className='layout flex h-14 items-center justify-between pt-10 text-xl font-semibold'>
          <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
            <img
              className='w-32 md:w-40'
              src='/images/logo.png'
              width='185'
              height='90'
              alt='Icon'
            />
          </UnstyledLink>

          <nav>
            <ul className='ml-16 flex items-center justify-between space-x-20'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnstyledLink
                    href={href}
                    className={`text-white hover:text-primary-600 ${isActive?.includes(label) && 'text-primary-600'
                      }`}
                  >
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className='flex flex-row gap-x-6'>
            <div className='my-auto text-gray-500 hover:text-primary-600'>
              <UnstyledLink href='/login'>Log In</UnstyledLink>
            </div>

            <div className='my-auto h-8 w-px bg-black'></div>

            <div>
              <ButtonLink
                href='/register'
                className='rounded-3xl font-light text-black'
              >
                Enroll Now
              </ButtonLink>
            </div>
          </div>
        </div>
      </header>

      <MobileNav />
    </>
  );
}

const mobile_links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Courses',
    href: '/courses',
  },
  {
    name: 'Pricing',
    href: '/pricing'
  },
]

function MobileNav() {
  return (
    <div className="lg:hidden z-50 w-full">
      <Popover className="relative">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href='/'>
                <img
                  className="h-10 w-auto sm:h-20"
                  src="/images/logo.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <Link href='/'>
                    <div>
                      <img
                        className="h-10 w-auto"
                        src="/images/logo.png"
                        alt="Your Company"
                      />
                    </div>
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 -mt-4">
                  {mobile_links.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div>
                  <Link href='/register'>
                    <div
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700"
                    >
                      Enroll Now
                    </div>
                  </Link>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing user?{' '}
                    <Link href='/login'>
                      <div className="text-primary-600 hover:text-primary-500">
                        Log In
                      </div>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}
