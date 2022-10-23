import * as React from 'react';

import Button from '@/components/buttons/Button';
import { InvestCard, Prepare } from '@/components/cards';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function Event() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='mt-10'>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col'>
            {/* //#region  //*============== Transform */}
            <div className='layout my-20 flex flex-col'>
              <div className='flex flex-col justify-between gap-y-6'>
                {Array(3)
                  .fill(5)
                  .map((i) => (
                    <div
                      key={i}
                      className='relative h-[18.75rem] overflow-hidden rounded-[0.625rem] bg-black'
                      id='event'
                    >
                      <div className='absolute inset-x-0 top-[23.3%] bottom-[33.3%] flex w-full flex-row justify-between px-10 text-white'>
                        <div className='flex flex-row gap-x-10'>
                          <div className='flex flex-row gap-x-2 text-gray-400'>
                            <div className='text-7xl'>31</div>
                            <div className='translate-y-1/3 text-lg'>Aug</div>
                          </div>

                          <div className='flex w-3/4 flex-col gap-y-4'>
                            <div className='text-3xl font-semibold'>
                              Cybersecurity Live Class
                            </div>
                            <div>
                              Due to the abundance of sensitive information
                              online, businesses require cybersecurity experts
                              to safeguard it. Anyone interested in
                              cybersecurity but is unsure of where to begin
                              should take this course.
                            </div>

                            <div className='my-auto'>
                              <Button className='rounded-[1.25rem] px-8 py-3 font-light text-black'>
                                Register
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
