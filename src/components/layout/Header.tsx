import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className='top-0 z-50 bg-white'>
      <div className='layout flex h-14 items-center justify-between pt-10'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          <NextImage
            useSkeleton
            className='w-32 md:w-40'
            src='/images/logo.png'
            width='185'
            height='90'
            alt='Icon'
          />
        </UnstyledLink>

        <nav>
          <ul className='flex items-center justify-between space-x-20'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex flex-row gap-x-6'>
          <div className='my-auto'>
            <UnstyledLink href='/login'>Log In</UnstyledLink>
          </div>

          <div className='my-auto h-8 w-px bg-black'></div>

          <div>
            <ButtonLink href='/register' className='rounded-3xl font-light text-black'>
              Enroll Now
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
