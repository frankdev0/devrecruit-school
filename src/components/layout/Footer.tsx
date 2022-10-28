/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ImFacebook, ImInstagram, ImLinkedin, ImTwitter } from 'react-icons/im';

import UnstyledLink from '@/components/links/UnstyledLink';

import Ellipse from '~/svg/Ellipse.svg';

export default function Footer() {
  return (
    <div className='hidden relative mt-20 lg:flex flex-col'>
      <footer className='w-full absolute bottom-2 flex flex-row gap-x-24 text-gray-700'>
        <div className='flex flex-col items-center space-y-12'>
          <div>
            <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
              <img
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

          <div className='flex w-full flex-row justify-center space-x-6'>
            <UnstyledLink href='https://ng.linkedin.com/company/devrecruit' openNewTab>
              <ImLinkedin className='h-6 w-6' />
            </UnstyledLink>

            <UnstyledLink href='https://www.instagram.com/devrecruit.tech' openNewTab>
              <ImInstagram className='h-6 w-6' />
            </UnstyledLink>

            <UnstyledLink href='https://www.facebook.com/devrecruit.tech' openNewTab>
              <ImFacebook className='h-6 w-6' />
            </UnstyledLink>

            <UnstyledLink href='https://twitter.com/devrecruit_tech' openNewTab>
              <ImTwitter className='h-6 w-6' />
            </UnstyledLink>
          </div>
        </div>

        <div className='my-auto flex flex-col gap-y-6'>
          <div className='text-2xl font-medium font-header'>About Us</div>

          <div className='flex flex-col gap-y-4'>
            <UnstyledLink href='/enrollment'>Enrollment</UnstyledLink>
            <UnstyledLink href='/careers'>Careers</UnstyledLink>
            <UnstyledLink href='/faq'>FAQs</UnstyledLink>
          </div>
        </div>

        <div className='my-auto flex flex-col gap-y-6'>
          <div className='text-2xl font-medium font-header'>Our Service</div>

          <div className='flex flex-col gap-y-4'>
            <UnstyledLink href='/courses'>Courses</UnstyledLink>
            <UnstyledLink href='/'>Recruitment</UnstyledLink>
            <UnstyledLink href='/event'>Event</UnstyledLink>
          </div>
        </div>

        <div className='my-auto flex flex-col gap-y-6'>
          <div className='text-2xl font-medium font-header'>Information</div>

          <div className='flex flex-col gap-y-4'>
            <UnstyledLink href='/privacy'>Privacy & Policy </UnstyledLink>
            <UnstyledLink href='/pricing'>Pricing</UnstyledLink>
            <UnstyledLink href='/'>Terms & Condition</UnstyledLink>
          </div>
        </div>


        <div className='my-auto flex flex-col gap-y-6'>
          <div className='text-2xl font-medium font-header'>Contact</div>

          <div className='flex flex-col gap-y-4'>
            <div className='my-auto'>+234 816 2159 419</div>
            <div className='my-auto'>training@devrecruitschool.com</div>
            <div className='my-auto'>&nbsp;</div>
          </div>
        </div>



        {/* <div className='flex flex-row gap-x-6 font-semibold'>
          <div className='flex flex-row gap-x-2 mx-auto'>
            <div className='my-auto'>+234 816 2159 419</div>
          </div>

          <div className='flex flex-row gap-x-2 mx-auto'>
            <div className='my-auto'>training@devrecruitschool.com</div>
          </div>
        </div> */}

        {/* <div className='relative'> */}
        <Ellipse className='hidden xl:flex absolute right-0 mt-24 h-56 w-56' />
        {/* </div> */}
      </footer>
    </div>
  );
}
