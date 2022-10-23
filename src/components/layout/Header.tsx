import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/contact', label: 'Contact' },
];

interface Props {
  isActive: string[] | undefined;
}

export default function Header({ isActive }: Props) {
  return (
    <header className='top-0 z-50'>
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
                  className={`hover:text-primary-600 ${
                    isActive?.includes(label) &&
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
            className={`my-auto hover:text-primary-600 ${
              isActive?.includes('Login') && 'text-gray-600'
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
  );
}

export function HeaderDark({ isActive }: Props) {
  return (
    <header className='top-0 z-50'>
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
                  className={`text-white hover:text-primary-600 ${
                    isActive?.includes(label) && 'text-primary-600'
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
  );
}
