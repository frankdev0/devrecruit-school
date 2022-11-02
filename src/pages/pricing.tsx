/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import { InvestCard, Prepare } from '@/components/cards';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

export default function Pricing() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='-mt-[5.5rem] lg:mt-20'>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col'>
            {/* //#region  //*============== About Banner */}
            
            {/* Mobile */}
            <div className='lg:hidden flex' id='pricing_banner'>
              <div className='layout my-24 flex flex-col gap-y-10'>
                <div className='z-10 mx-auto flex h-[71.5625rem] w-full lg:h-[67.25rem] lg:w-[82.125rem] flex-col justify-center gap-6 lg:gap-10 bg-primary-600 py-20 text-center'>
                  <div className='flex px-10 leading-0 lg:leading-normal lg:w-full text-left flex-col lg:gap-y-10 text-3xl lg:text-[3.15rem] font-header'>
                    <div>Launch A Career Pathway to Cyber</div>
                    <div>Security – An Awareness Training.</div>
                  </div>

                  <div className='lg:w-full w-3/4 text-left pl-10 lg:text-2xl font-light font-header'>
                    COURSE DURATION – 5-Weeks with Certification.
                  </div>

                  <div className='flex flex-col lg:flex-row justify-center gap-x-20 gap-y-[1.875rem] px-10'>
                    <div className='flex w-full h-[16rem] lg:w-[34.5rem] flex-col gap-y-2 lg:gap-y-10 bg-white p-8 lg:p-20 shadow-2xl'>
                      <div className='text-left text-3xl font-header'>Early Bird</div>

                      <div className='flex flex-row gap-x-2'>
                        <div className='flex flex-col gap-y-2 text-left text-primary-800'>
                          <div className='text-2xl font-semibold font-header'>
                          ₦ 15,000
                          </div>
                          <div>Nigeria</div>
                        </div>

                        <div className='text-primary-400'>/</div>

                        <div className='flex flex-col gap-y-2 text-left text-primary-800'>
                          <div className='text-2xl font-semibold font-header'>
                            $ 35
                          </div>
                          <div>International</div>
                        </div>
                      </div>

                      <div className='text-left lg:text-lg'>
                        Register and pay for your course in advance to receive
                        incredible full-payee benefits and early bird discounts.
                      </div>
                    </div>

                    <div className='flex w-full h-[16rem] lg:h-[28rem] lg:w-[34.5rem] flex-col gap-y-2 lg:gap-y-10 bg-white p-8 lg:p-20 shadow-2xl'>
                      <div className='text-left text-2xl font-header'>
                        Late Registration
                      </div>

                      <div className='flex flex-row gap-x-2'>
                        <div className='flex flex-col gap-y-2 text-left text-primary-800'>
                          <div className='text-2xl font-semibold font-header'>
                          ₦ 20,000
                          </div>
                          <div>Nigeria</div>
                        </div>

                        <div className='text-primary-400'>/</div>

                        <div className='flex flex-col gap-y-2 text-left text-primary-800'>
                          <div className='text-2xl font-semibold font-header'>
                            $ 50
                          </div>
                          <div>International</div>
                        </div>
                      </div>

                      <div className='text-left lg:text-lg'>
                        After the early bird promotion, all registrations and
                        payments are regarded as late registrations.
                      </div>
                    </div>
                  </div>

                  <div className='text-3xl font-semibold font-header'>
                    Got any Questions?
                  </div>

                  <div className='flex flex-col gap-y-4 lg:flex-row justify-center gap-x-4 px-10'>
                    <div className='my-auto'>Our team is here to help.</div>
                    <ArrowLink
                      as={ButtonLink}
                      variant='primary'
                      href='/contact'
                      className='my-auto lg:text-2xl'
                    >
                      Contact us
                    </ArrowLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop */}
            <div className='hidden lg:flex' id='pricing_banner'>
              <div className='layout my-20 flex flex-col gap-y-10'>
                <div className='z-10 mx-auto flex h-[67.25rem] w-[82.125rem] flex-col justify-center gap-10 bg-primary-600 py-20 text-center'>
                  <div className='flex flex-col gap-y-10 text-[3.15rem]'>
                    <div>Launch A Career Pathway to Cyber</div>
                    <div>Security – An Awareness Training.</div>
                  </div>

                  <div className='text-2xl font-light'>
                    COURSE DURATION – 5-Weeks with Certification.
                  </div>

                  <div className='flex flex-row justify-center gap-x-20 px-10'>
                    <div className='flex h-[28rem] w-[34.5rem] flex-col gap-y-10 bg-white p-20 shadow-2xl'>
                      <div className='text-left text-3xl'>Early bird</div>

                      <div className='flex flex-row gap-x-2'>
                        <div className='flex flex-col gap-y-2 text-left text-primary-800'>
                          <div className='text-[2.5rem] font-semibold'>
                            N 15,000
                          </div>
                          <div>Nigeria</div>
                        </div>

                        <div className='text-primary-400'>/</div>

                        <div className='flex flex-col gap-y-2 text-left text-primary-800'>
                          <div className='text-[2.5rem] font-semibold'>
                            $ 35
                          </div>
                          <div>International</div>
                        </div>
                      </div>

                      <div className='text-left text-lg'>
                        Register and pay for your course in advance to receive
                        incredible full-payee benefits and early bird discounts.
                      </div>
                    </div>

                    <div className='flex h-[28rem] w-[34.5rem] flex-col gap-y-10 bg-white p-20 shadow-2xl'>
                      <div className='text-left text-3xl'>
                        Late registration
                      </div>

                      <div className='flex flex-row gap-x-2'>
                        <div className='flex flex-col gap-y-2 text-left text-primary-800'>
                          <div className='text-[2.5rem] font-semibold'>
                            N 20,000
                          </div>
                          <div>Nigeria</div>
                        </div>

                        <div className='text-primary-400'>/</div>

                        <div className='flex flex-col gap-y-2 text-left text-primary-800'>
                          <div className='text-[2.5rem] font-semibold'>
                            $ 50
                          </div>
                          <div>International</div>
                        </div>
                      </div>

                      <div className='text-left text-lg'>
                        After the early bird promotion, all registrations and
                        payments are regarded as late registrations.
                      </div>
                    </div>
                  </div>

                  <div className='text-3xl font-semibold'>
                    Got any Questions?
                  </div>

                  <div className='flex flex-row justify-center gap-x-4'>
                    <div className='my-auto'>Our team is here to help.</div>
                    <ArrowLink
                      as={ButtonLink}
                      variant='primary'
                      href='/contact'
                      className='my-auto text-2xl'
                    >
                      Contact us
                    </ArrowLink>
                  </div>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== About Banner */}

            {/* //#region  //*============== Transform */}
            <div className='lg:mb-20 flex flex-col bg-black text-white'>
              <div className='flex flex-col lg:flex-row justify-between px-10 pb-20 pt-[35rem] lg:pt-40 gap-y-6'>
                <div className='my-auto flex flex-col gap-y-4'>
                  <div className='text-2xl lg:text-3xl font-semibold'>
                    <div>Start learning to put yourself on the right</div>
                    <div>track for a seat at the table of Africa&apos;s</div>
                    <div>technology experts.</div>
                  </div>
                  <div className='hidden lg:block'>
                    <ButtonLink
                      href='/register'
                      className='rounded-[1.25rem] px-8 py-3 font-light text-black'
                    >
                      Enroll Now
                    </ButtonLink>
                  </div>
                </div>

                <div>
                  <img
                    src='/images/devp6.jpg'
                    width={600}
                    height={400}
                    alt=''
                  />
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Transform */}

            {/* //#region  //*============== Prepare */}
            <Prepare />
            {/* //#endregion  //*============== Prepare */}

            {/* //#region  //*============== Invest */}
            <InvestCard />
            {/* //#endregion  //*============== Invest */}
          </div>
        </section>
      </main>
    </Layout>
  );
}
