import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Message from '~/svg/message.svg';
import Phone from '~/svg/phone.svg';

export default function Contact() {
  return (
    <Layout isActive={['Contact']}>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='mt-20'>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col'>
            {/* //#region  //*============== Contact Banner */}
            <div className='relative'>
              <div className='mx-auto object-cover'>
                <picture>
                  <source
                    srcSet='/images/getintouch.png'
                    type='image/png'
                    width='100%'
                  />
                  <img src='/images/getintouch.png' alt='' width='100%' />
                </picture>
              </div>

              <div className='absolute inset-x-0 top-0 my-20 flex w-full flex-col gap-y-28 text-white'>
                <div className='my-auto flex flex-col gap-y-4 px-20'>
                  <div className='flex flex-col gap-y-4 text-5xl font-semibold'>
                    <div>Get In Touch</div>
                  </div>

                  <div className=''>
                    <div>We would love to know how we can</div>
                    <div>help you better.</div>
                  </div>
                </div>

                <div className='mx-auto flex w-screen flex-row justify-around'>
                  <div className='flex h-[26.25rem] w-[36.875rem] flex-col justify-center gap-y-10 overflow-hidden rounded-[1.875rem] bg-white text-center text-black shadow-xl'>
                    <div className='text-3xl font-semibold'>
                      Talk with our Program Manager
                    </div>
                    <div>
                      <Phone className='mx-auto h-10 w-10' />
                    </div>
                    <div>
                      <div>Send an email to the programme</div>
                      <div>anchor to get course clarity</div>
                    </div>
                  </div>

                  <div className='flex h-[26.25rem] w-[36.875rem] flex-col justify-center gap-y-10 overflow-hidden rounded-[1.875rem] bg-white text-center text-black shadow-xl'>
                    <div className='text-3xl font-semibold'>
                      Contact Customer Service
                    </div>
                    <div>
                      <Message className='mx-auto h-10 w-10' />
                    </div>
                    <div>
                      <div>Speak with our help center for</div>
                      <div>any complaint or query</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Contact Banner */}

            {/* //#region  //*============== Course Outcome */}
            <div className='layout mb-20'>
              <div className='flex w-full flex-col gap-y-10 rounded-[1.25rem] bg-black p-20 text-white'>
                <div className='text-3xl font-semibold'>Send a message</div>

                <div className='grid w-full grid-cols-2 gap-10'>
                  <div className='tex-2xl flex w-full flex-col'>
                    <div>First Name</div>
                    <div>
                      <input
                        type='text'
                        className='w-full border-0 border-b border-white bg-black'
                      />
                    </div>
                  </div>

                  <div className='tex-2xl flex w-full flex-col'>
                    <div>Last Name</div>
                    <div>
                      <input
                        type='text'
                        className='w-full border-0 border-b border-white bg-black'
                      />
                    </div>
                  </div>

                  <div className='tex-2xl flex w-full flex-col'>
                    <div>Phone number</div>
                    <div>
                      <input
                        type='text'
                        className='w-full border-0 border-b border-white bg-black'
                      />
                    </div>
                  </div>

                  <div className='tex-2xl flex w-full flex-col'>
                    <div>Email address</div>
                    <div>
                      <input
                        type='text'
                        className='w-full border-0 border-b border-white bg-black'
                      />
                    </div>
                  </div>

                  <div className='tex-2xl col-span-2 flex w-full flex-col'>
                    <div>How can we help you?</div>
                    <div>
                      <textarea
                        rows={10}
                        className='w-full border-0 border-b border-white bg-black'
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Button className='bg-white text-black'>Send Message</Button>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Course Outcome */}
          </div>
        </section>
      </main>
    </Layout>
  );
}
