import * as React from 'react';

import Button from '@/components/buttons/Button';
import { InvestCard, Prepare } from '@/components/cards';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function Careers() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='mt-20'>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col'>
            {/* //#region  //*============== Career Banner */}
            <div className='relative'>
              <div className='absolute ml-[30rem] mt-20'>
                <img
                  src='/images/career_small_3.png'
                  alt=''
                  width={50}
                  height={50}
                />
              </div>

              <div className='absolute right-0 mr-[34rem] mt-28'>
                <img
                  src='/images/career_small_2.png'
                  alt=''
                  width={50}
                  height={50}
                />
              </div>

              <div className='absolute right-0 mr-72 mt-16'>
                <img
                  src='/images/career_small_1.png'
                  alt=''
                  width={50}
                  height={50}
                />
              </div>

              <div className='mx-auto object-cover'>
                <picture>
                  <source
                    srcSet='/images/career_banner.png'
                    type='image/png'
                    width='100%'
                  />
                  <img src='/images/career_banner.png' alt='' width='100%' />
                </picture>
              </div>

              <div className='absolute inset-x-0 top-0 flex w-full flex-row justify-center text-center text-white'>
                <div className='my-auto mt-10 flex flex-col justify-center gap-y-10 px-20'>
                  <div className='flex flex-col gap-y-4 text-5xl font-semibold text-black'>
                    <div>We Make Your</div>
                    <div>Dream A Reality</div>
                  </div>

                  <div className='text-black'>
                    <div>
                      Start learning to put yourself on the right track for
                    </div>
                    <div>
                      a seat at the table of Africa&apos;s technology experts
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Career Banner */}

            {/* //#region  //*============== Partnership */}
            <div className='layout my-20 flex flex-row justify-between'>
              <div className='mt-16 flex flex-col gap-y-4'>
                <div className='text-3xl font-semibold'>
                  <div>In Partnership With DevRecruit</div>
                </div>

                <div className='text-2xl'>
                  <div>
                    We will put you on the right track for hiring at top
                  </div>
                  <div>
                    firms in Africa by leveraging on our shared services
                  </div>
                  <div>and expert knowledge in the technology field.</div>
                </div>

                <div>
                  <Button className='rounded-3xl px-8 py-3 font-light text-black'>
                    Enroll Now
                  </Button>
                </div>
              </div>

              <div>
                <img src='/images/suit.png' alt='' width={650} height={400} />
              </div>
            </div>
            {/* //#endregion  //*============== Partnership */}

            {/* //#region  //*============== Open Positions */}
            <div className='relative'>
              <div className='mx-auto object-cover'>
                <picture>
                  <source
                    srcSet='/images/careers_green.png'
                    type='image/png'
                    width='100%'
                  />
                  <img src='/images/careers_green.png' alt='' width='100%' />
                </picture>
              </div>

              <div className='absolute inset-x-0 top-0 right-0 my-4 flex w-full translate-y-[30%] flex-row justify-between px-10 text-white'>
                <div className=''>
                  <img
                    src='/images/position_open.png'
                    width={700}
                    height={450}
                    alt=''
                  />
                </div>

                <div className='my-auto flex flex-col gap-y-2 px-20 text-black'>
                  <div className='text-3xl font-semibold'>Open Positions</div>

                  <div className='flex flex-col text-2xl'>
                    <div>Job vacancies with an A-list organization with a</div>
                    <div>proven track record in the tech space.</div>
                  </div>

                  <div className='mt-6 flex flex-col gap-y-6'>
                    <Button className='w-full rounded-[0.625rem] border-0 bg-white px-4 py-4 text-2xl font-normal text-black shadow-2xl'>
                      Cyber Security
                    </Button>
                    <Button className='w-full rounded-[0.625rem] border-0 bg-white px-4 py-4 text-2xl font-normal text-black shadow-2xl'>
                      Data Science
                    </Button>
                    <Button className='w-full rounded-[0.625rem] border-0 bg-white px-4 py-4 text-2xl font-normal text-black shadow-2xl'>
                      Software Engineering
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Open Positions */}

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
