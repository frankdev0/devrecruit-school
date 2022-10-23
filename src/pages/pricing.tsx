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

      <main className='mt-20'>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col'>
            {/* //#region  //*============== About Banner */}
            <div className='flex' id='pricing_banner'>
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

                      <div className='flex flex-row gap-x-6'>
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

                      <div className='flex flex-row gap-x-6'>
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
            <div className='mb-20 flex flex-col bg-black text-white'>
              <div className='flex flex-row justify-between px-10 pb-20 pt-40'>
                <div className='my-auto flex flex-col gap-y-4'>
                  <div className='text-3xl font-semibold'>
                    <div>Start learning to put yourself on the right</div>
                    <div>track for a seat at the table of Africa&apos;s</div>
                    <div>technology experts.</div>
                  </div>
                  <div>
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
