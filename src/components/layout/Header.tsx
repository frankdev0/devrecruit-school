/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

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


      <nav className="lg:hidden bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded w-full">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center">
            <UnstyledLink href='/'>
              <img
                className="mr-3 h-16 sm:h-9"
                src='/images/logo.png'
                alt='Icon'
              />
            </UnstyledLink>
          </div>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto relative" id="navbar-default">
            <ul className="flex flex-col w-full p-4 mt-4 bg-gray-50 absolute rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <UnstyledLink href='/'>
                <li>
                  <div className="block py-2 pr-4 pl-3 text-gray-700 rounded md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</div>
                </li>
              </UnstyledLink>
              <UnstyledLink href='/about'>
                <li>
                  <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">About</div>
                </li>
              </UnstyledLink>
              <UnstyledLink href='/courses'>
                <li>
                  <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Courses</div>
                </li>
              </UnstyledLink>
              <UnstyledLink href='/pricing'>
                <li>
                  <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Pricing</div>
                </li>
              </UnstyledLink>
              <UnstyledLink href='/login'>
                <li>
                  <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Login</div>
                </li>
              </UnstyledLink>
              <UnstyledLink href='/register'>
                <li>
                  <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Enroll Now</div>
                </li>
              </UnstyledLink>
            </ul>
          </div>
        </div>
      </nav>

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

      <nav className="lg:hidden z-50  px-2 sm:px-4 py-2.5 rounded w-full">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center">
            <UnstyledLink href='/'>
              <img
                className="mr-3 h-16 sm:h-9"
                src='/images/logo.png'
                alt='Icon'
              />
            </UnstyledLink>
          </div>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto relative" id="navbar-default">
            <ul className="flex flex-col w-full p-4 mt-4 bg-gray-50 absolute rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <UnstyledLink href='/'>
                <li>
                  <div className="block py-2 pr-4 pl-3 text-gray-700 rounded md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</div>
                </li>
              </UnstyledLink>
              <UnstyledLink href='/about'>
                <li>
                  <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">About</div>
                </li>
              </UnstyledLink>
              <UnstyledLink href='/courses'>
                <li>
                  <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Courses</div>
                </li>
              </UnstyledLink>
              <UnstyledLink href='/pricing'>
                <li>
                  <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Pricing</div>
                </li>
              </UnstyledLink>
              <UnstyledLink href='/login'>
                <li>
                  <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Login</div>
                </li>
              </UnstyledLink>
              <UnstyledLink href='/register'>
                <li>
                  <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Enroll Now</div>
                </li>
              </UnstyledLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
