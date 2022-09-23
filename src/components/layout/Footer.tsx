import React from 'react';
import { ImInstagram } from 'react-icons/im';
import { RiFacebookCircleFill, RiMailFill } from 'react-icons/ri';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import Ellipse from '~/svg/Ellipse.svg';

export default function Footer() {
  return (
    <div className='relative'>
      <footer className='layout absolute bottom-2 flex flex-row justify-between text-gray-700'>
        <div className='flex flex-col items-center space-y-12'>
          <div>
            <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
              <NextImage
                useSkeleton
                className='z-10 -mb-10 w-36'
                src='/images/logo.png'
                width='200'
                height='100'
                alt='Icon'
              />
            </UnstyledLink>
          </div>

          <div className='z-20 w-2/3 text-center'>
            <span className='text-primary'>©</span> Copyright DevRecruit
            Training School {new Date().getFullYear()}
          </div>

          <div className='flex w-full flex-row justify-center space-x-10'>
            <UnstyledLink href='/' openNewTab>
              <RiMailFill className='h-6 w-6' />
            </UnstyledLink>

            <UnstyledLink href='/' openNewTab>
              <ImInstagram className='h-6 w-6' />
            </UnstyledLink>

            <UnstyledLink href='/' openNewTab>
              <RiFacebookCircleFill className='h-6 w-6' />
            </UnstyledLink>
          </div>
        </div>

        <div className='my-auto flex flex-col gap-y-6'>
          <div className='text-2xl font-medium'>About Us</div>

          <div className='flex flex-col gap-y-4'>
            <UnstyledLink href='/enrollment'>Enrollment</UnstyledLink>
            <UnstyledLink href='/careers'>Careers</UnstyledLink>
            <UnstyledLink href='/faq'>FAQs</UnstyledLink>
          </div>
        </div>

        <div className='my-auto flex flex-col gap-y-6'>
          <div className='text-2xl font-medium'>Our Service</div>

          <div className='flex flex-col gap-y-4'>
            <UnstyledLink href='/courses'>Courses</UnstyledLink>
            <UnstyledLink href='/'>Recruitment</UnstyledLink>
            <UnstyledLink href='/event'>Event</UnstyledLink>
          </div>
        </div>

        <div className='my-auto flex flex-col gap-y-6'>
          <div className='text-2xl font-medium'>Information</div>

          <div className='flex flex-col gap-y-4'>
            <UnstyledLink href='/privacy'>Privacy & Policy </UnstyledLink>
            <UnstyledLink href='/pricing'>Pricing</UnstyledLink>
            <UnstyledLink href='/'>Terms & Condition</UnstyledLink>
          </div>
        </div>

        {/* <div className='relative'> */}
        <Ellipse className='absolute right-0 -mr-64 mt-24 h-56 w-56' />
        {/* </div> */}
      </footer>
    </div>
  );
}
