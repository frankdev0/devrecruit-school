/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import { InvestCard, Prepare } from '@/components/cards';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

import Ellipse_2 from '~/svg/Ellipse_2.svg';
import Green_Ellipse from '~/svg/Green_Ellipse.svg';
import Green_Ellipse_Thin from '~/svg/Green_Ellipse_Thin.svg';
import Outline_Ellipse from '~/svg/Outline_Ellipse.svg';
import Security_One from '~/svg/sec_1.svg';
import Security_Two from '~/svg/sec_2.svg';
import Security_Three from '~/svg/sec_3.svg';
import White_Ellipse from '~/svg/White_Ellipse.svg';

export default function HomePage() {
  return (
    <Layout isActive={['Home']}>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='mt-20'>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col'>
            {/* //#region  //*============== Home Banner */}
            <div className='layout flex flex-row justify-center lg:space-x-40'>
              <div className='hidden lg:flex'>
                <img src='/images/apply.png' alt='' width={480} height={300} />
              </div>

              <div className='flex flex-col'>
                <div className='text-5xl lg:leading-[3.7rem] font-header'>
                  <div className='hidden lg:block'>
                    <div>Kick-start Your</div>
                    <div>Career in IT</div>
                  </div>

                  <div className='flex flex-row text-4xl lg:hidden'>
                    <div className='flex flex-col'>
                      <div>Kick-start Your</div>
                      <div>Career in IT</div>
                    </div>

                    <div className='lg:hidden -mr-4'>
                      <img src='/images/ell_split.png' alt='' width={150} height={200} />
                    </div>
                  </div>
                </div>
                <div className='flex flex-row space-x-6 lg:text-2xl -mt-10 lg:mt-0'>
                  <div>
                    <div>Join the DevRecruit school to build</div>
                    <div>in-demand IT skills</div>
                  </div>

                  <Ellipse_2 className='hidden lg:flex h-20 w-20 -translate-y-6' />
                </div>
                <div className='mt-4 lg:mt:0'>
                  <ButtonLink
                    href='/register'
                    className='rounded-3xl font-light text-black'
                  >
                    Enroll Now
                  </ButtonLink>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Home Banner */}

            {/* //#region  //*============== Rewarding Career */}
            <div className='layout my-[3.75rem] lg:my-24 flex flex-col items-center gap-y-4'>
              <div className='text-center lg:text-left text-3xl font-semibold font-header'>
                Do You Want to Start a Rewarding Career in Cybersecurity?
              </div>

              <div className='text-center'>
                <div>
                  Here&apos;s a quick video to help you get started on your
                </div>
                <div>path to becoming a cybersecurity expert.</div>
              </div>

              <div className='mt-4 flex w-full justify-center'>
                <iframe
                  src={`https://www.youtube.com/embed/${'2C0lfBBUfFU'}?rel=0?playlist=2C0lfBBUfFU&version=3&autoplay=1&controls=0&&showinfo=0&loop=1`}
                  frameBorder='0'
                  allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  title='Embedded youtube'
                  className='h-[16.0625rem] w-[23.8125rem] lg:h-[23.5rem] lg:w-[55.379rem] rounded-lg'
                />

                <div className='absolute right-0 mr-72 mt-40'>
                  <Green_Ellipse className='h-12 w-12' />
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Rewarding Career */}

            {/* //#region  //*============== Vision, Mission and Goals */}
            {/* Desktop */}
            <div
              className='hidden relative mb-24 lg:flex h-[43.63rem] w-screen overflow-hidden'
              id='vision'
            >
              <div className='my-10 flex flex-col space-y-24 px-10'>
                {/*//** * First Circle */}
                <div className='flex lg:flex-row flex-col'>
                  <div className='relative flex flex-row'>
                    <div className='absolute z-10'>
                      <White_Ellipse className='h-[8.125rem] w-[8.125rem] lg:h-44 lg:w-44' />
                    </div>

                    <div className='z-20 font-header translate-x-1/2 translate-y-1/3 text-center text-3xl font-semibold leading-[2.813rem]'>
                      <div>Our</div>
                      <div>Vision</div>
                    </div>
                  </div>

                  <div className='hidden lg:flex z-20 my-auto mt-20 ml-28 mr-6 h-px w-80 bg-white'></div>

                  <div className='lg:hidden z-20 my-auto text-center h-[4.25rem] w-px bg-white'></div>

                  <div className='z-20 mt-10 text-xl font-semibold text-white'>
                    <div>We see a world in which anyone, anywhere</div>
                    <div>would obtain the necessary training to</div>
                    <div>
                      begin a career in the IT industry.
                    </div>
                  </div>
                </div>
                {/*//** * End First Circle */}

                {/*//** * Second Circle */}
                <div className='lg:ml-40 flex flex-row'>
                  <div className='relative flex flex-col gap-y-10 lg:flex-row '>
                    <div className='absolute z-10'>
                      <Outline_Ellipse className='h-[8.125rem] w-[8.125rem] lg:h-44 lg:w-44' />
                    </div>

                    <div className='z-20 font-header translate-x-1/3 translate-y-1/3 text-center text-3xl font-semibold leading-[2.813rem] text-white'>
                      <div>Our</div>
                      <div>Mission</div>
                    </div>
                  </div>

                  <div className='z-20 my-auto mt-20 ml-28 mr-6 h-px w-80 bg-white'></div>

                  <div className='z-20 mt-10 text-xl font-semibold text-white'>
                    <div>To ensure that the IT sector has capable</div>
                    <div>technical capacities that can compete on</div>
                    <div>international levels.</div>
                  </div>
                </div>
                {/*//** * End Second Circle */}

                {/*//** * Third Circle */}
                <div className='lg:ml-80 flex flex-row'>
                  <div className='relative flex flex-row '>
                    <div className='absolute z-10'>
                      <Outline_Ellipse className='h-[8.125rem] w-[8.125rem] lg:h-44 lg:w-44' />
                    </div>

                    <div className='z-20 font-header translate-x-[60%] translate-y-1/3 text-center text-3xl font-semibold leading-[2.813rem] text-white'>
                      <div>Our</div>
                      <div>Goals</div>
                    </div>
                  </div>

                  <div className='z-20 my-auto mt-20 ml-28 mr-6 h-px w-80 bg-white'></div>

                  <div className='z-20 mt-10 text-xl font-semibold text-white'>
                    <div>
                      To provide world-class training for technophiles,
                      establish
                    </div>
                    <div>
                      and grow the IT specialist community, and connect talents
                    </div>
                    <div>
                      with the best job opportunities to launch their careers.
                    </div>
                  </div>
                </div>
                {/*//** * End Third Circle */}
              </div>
            </div>

            {/* Mobile */}
            <div
              className='lg:hidden relative lg:mb-24 flex h-[60rem] w-screen overflow-hidden'
              id='vision_2'
            >
              <div className='my-10 flex flex-col gap-y-5 px-10'>
                {/*//** * First Circle */}
                <div className='flex flex-col items-center'>
                  <div className='relative flex flex-row -ml-14 mb-16'>
                    <div className='absolute z-10'>
                      <White_Ellipse className='h-[8.125rem] w-[8.125rem]' />
                    </div>

                    <div className='z-20 font-header translate-x-1/2 translate-y-1/2 text-center text-2xl font-semibold leading-[2rem]'>
                      <div>Our</div>
                      <div>Vision</div>
                    </div>
                  </div>

                  <div className='z-20 mt-5 text-center font-semibold text-white'>
                    <div>We see a world in which anyone, anywhere</div>
                    <div>would obtain the necessary training to</div>
                    <div>
                      begin a career in the IT industry.
                    </div>
                  </div>

                  <div className='lg:hidden mt-5 z-20 my-auto text-center h-[4.25rem] w-px bg-white'></div>
                </div>
                {/*//** * End First Circle */}

                {/*//** * Second Circle */}
                <div className='lg:ml-40 flex flex-col items-center gap-y-5'>
                  <div className='relative flex flex-col gap-y-10 lg:flex-row -ml-14 mb-10'>
                    <div className='absolute z-10'>
                      <Outline_Ellipse className='h-[8.125rem] w-[8.125rem] lg:h-44 lg:w-44' />
                    </div>

                    <div className='z-20 font-header translate-x-1/2 -ml-4 translate-y-1/2 text-center text-2xl font-semibold leading-[2rem] text-white'>
                      <div>Our</div>
                      <div>Mission</div>
                    </div>
                  </div>

                  <div className='z-20 mt-5 text-center font-semibold text-white'>
                    <div>To ensure that the IT sector has capable</div>
                    <div>technical capacities that can compete on</div>
                    <div>international levels.</div>
                  </div>

                  <div className='z-20 h-[4.25rem] w-px bg-white'></div>
                </div>
                {/*//** * End Second Circle */}

                {/*//** * Third Circle */}
                <div className='flex flex-col items-center gap-y-16'>
                  <div className='relative flex flex-row -ml-14'>
                    <div className='absolute z-10'>
                      <Outline_Ellipse className='h-[8.125rem] w-[8.125rem] lg:h-44 lg:w-44' />
                    </div>

                    <div className='z-20 font-header translate-x-1/2 translate-y-1/2 text-center text-2xl font-semibold leading-[2rem] text-white'>
                      <div>Our</div>
                      <div>Goals</div>
                    </div>
                  </div>

                  <div className='z-20 mt-5 text-center font-semibold text-white'>
                    <div>
                      To provide world-class training for technophiles,
                      establish
                    </div>
                    <div>
                      and grow the IT specialist community, and connect talents
                    </div>
                    <div>
                      with the best job opportunities to launch their careers.
                    </div>
                  </div>
                </div>
                {/*//** * End Third Circle */}
              </div>
            </div>
            {/* //#endregion  //*============== Vision, Mission and Goals */}

            {/* //#region  //*============== Dreams */}
            <div className='lg:layout mt-12 lg:mt-0 mb-20 flex flex-col'>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-col gap-y-4'>
                  <div className='text-2xl text-center lg:text-left lg:text-3xl font-medium font-header'>
                    Get The Job of Your Dreams
                  </div>
                  <div className='lg:text-2xl px-10 lg:px-0'>
                    <div>Enroll to begin taking live sessions and</div>
                    <div>tutorials on Cybersecurity and more</div>
                  </div>
                  <div className='px-10 lg:px-0'>
                    <ButtonLink
                      href='/register'
                      className='rounded-3xl font-light text-black'
                    >
                      Enroll Now
                    </ButtonLink>
                  </div>

                  <div className='lg:hidden flex flex-row'>
                  <img
                    src='/images/image 99.png'
                    width={950}
                    height={550}
                    alt=''
                  />
                </div>
                </div>

                <div className='hidden lg:block relative'>
                  <img
                    src='/images/image 99.png'
                    width={850}
                    height={450}
                    alt=''
                  />

                  <div className='absolute top-0 right-0'>
                    <img
                      src='/images/float1.png'
                      width={300}
                      height={80}
                      alt=''
                    />
                  </div>

                  <div className='absolute bottom-0 right-0 mr-6'>
                    <img
                      src='/images/float2.png'
                      width={300}
                      height={100}
                      alt=''
                    />
                  </div>

                  <div className='absolute left-0 -ml-20 -mt-32'>
                    <img
                      src='/images/float3.png'
                      width={300}
                      height={100}
                      alt=''
                    />
                  </div>
                </div>

              </div>

              <div className='hidden mt-36 lg:grid grid-cols-3'>
                <div className='col-span-1 flex flex-col gap-y-4'>
                  <div className='text-3xl font-medium font-header'>
                    Here’s Why You Should Enroll
                  </div>
                  <div className='text-2xl'>
                    <div>Our process is centered on quality and the</div>
                    <div>development of expert technical skills</div>
                  </div>
                  <div>
                    <ButtonLink
                      href='/register'
                      className='rounded-3xl font-light text-black'
                    >
                      Enroll Now
                    </ButtonLink>
                  </div>
                </div>

                <div className='relative col-span-2 -ml-80 -mt-14'>
                  {/* <img src='/images/thread.png' alt='' /> */}
                  <picture>
                    <source srcSet='/images/thread.png' type='image/png' />
                    <img src='/images/thread.png' alt='' width='80%' />
                  </picture>

                  <div className='absolute left-[22%] -mt-6 flex flex-col gap-y-2'>
                    <div className='flex flex-row'>
                      <div className='text-2xl font-semibold font-header'>
                        Level-Up Your Skills
                      </div>
                      <div className='-mt-4 text-[6.25rem] font-bold text-gray-300'>
                        1
                      </div>
                    </div>

                    <div className='text-lg'>
                      <div>Become more knowledgeable and</div>
                      <div>proficient in the newest models</div>
                      <div>and methods used in the tech business.</div>
                    </div>
                  </div>

                  <div className='absolute left-[59%] -mt-[11.4rem] flex flex-col gap-y-2'>
                    <div className='flex flex-row gap-x-2'>
                      <div className='text-2xl font-semibold font-header'>
                        Build a Portfolio
                      </div>
                      <div className='-mt-4 text-[6.25rem] font-bold text-gray-300'>
                        2
                      </div>
                    </div>

                    <div className='text-lg'>
                      <div>Work on projects and internships</div>
                      <div>to build your portfolio and</div>
                      <div>gain experience.</div>
                    </div>
                  </div>

                  <div className='absolute left-[76%] -mt-[26rem] flex flex-col gap-y-2'>
                    <div className='flex flex-row gap-x-2'>
                      <div className='text-2xl font-semibold font-header'>
                        Get your Dream Job
                      </div>
                      <div className='-mt-4 text-[6.25rem] font-bold text-gray-300'>
                        3
                      </div>
                    </div>

                    <div className='text-lg'>
                      <div>Apply to and work in any corporation</div>
                      <div>of your choice for a high</div>
                      <div>incentive and remuneration.</div>
                    </div>
                  </div>
                </div>

                <div className='mt-10'>
                  <Green_Ellipse className='h-10 w-10' />
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Dreams */}

            {/* //#region  //*============== Cyber */}
            <div className='relative'>
              <div className='mx-auto object-cover'>
                <picture>
                  <source srcSet='/images/home_curve.png' type='image/png' />
                  <img
                    src='/images/Black_Curve.png'
                    alt='Landscape picture'
                    className='h-[28.75rem] lg:h-auto'
                    width='100%'
                  />
                </picture>
                {/* <img className='w-screen h-1/6' src='/images/Black_Curve.png' width={0} height={0} alt='' /> */}
                {/* <Black_Curve className='w-screen h-[800px]' /> */}
              </div>

              <div className='absolute inset-x-0 top-0 my-16 flex w-full flex-row justify-between px-20 text-white'>
                <div className='hidden lg:flex w-1/2 flex-col gap-y-8'>
                  <div className='text-lg font-header'>OUR COURSES</div>
                  <div className='-mt-8 text-3xl font-header'>Open For Enrollment</div>
                  <div className='text-[2.5rem] font-semibold font-header'>
                    Cybersecurity
                  </div>
                  <div className='text-2xl'>
                    Learn the essential ideas required to recognize common
                    cyber-attacks and dangers and to defend your business and
                    yourself in this cybersecurity introductory training.
                    Additionally, you&apos;ll learn about network security
                    fundamentals, commonly used authentication and authorization
                    methods, and terminologies and policies.
                  </div>

                  <div className='-mt-2'>
                    <ButtonLink
                      href='/register'
                      className='rounded-[1.25rem] bg-white px-8 py-3 font-light text-primary'
                    >
                      Enroll Now
                    </ButtonLink>
                  </div>
                </div>

                <div className='flex flex-col space-y-10 lg:space-y-48'>
                  <div>
                    <div className='flex lg:h-20 w-[15.125rem] h-[3.3125rem] lg:w-[22.2rem] rounded-[1.9rem] bg-white bg-gradient-to-r from-gray-300 to-white px-10 lg:text-2xl font-extrabold text-primary'>
                      <div className='my-auto flex w-full flex-row justify-between'>
                        <div className='my-auto'>Security Principles</div>
                        <div className='my-auto'>
                          <Security_One className='w-8' />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='-ml-20 lg:-ml-80'>
                    <div className='flex lg:h-20 w-[15.125rem] h-[3.3125rem] lg:w-[22.2rem] rounded-[1.9rem] bg-white bg-gradient-to-r from-gray-300 to-white px-10 lg:text-2xl font-extrabold text-primary'>
                      <div className='my-auto flex w-full flex-row justify-between'>
                        <div className='my-auto'>Types of Security</div>
                        <div className='my-auto'>
                          <Security_Two className='w-8' />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='lg:-ml-[40rem]'>
                    <div className='flex lg:h-20 w-[15.125rem] h-[3.3125rem] lg:w-[22.2rem] rounded-[1.9rem] bg-white bg-gradient-to-r from-gray-300 to-white px-10 lg:text-2xl font-extrabold text-primary'>
                      <div className='my-auto flex w-full flex-row justify-between'>
                        <div className='my-auto'>Authentication</div>
                        <div className='my-auto'>
                          <Security_Three className='w-8' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Cyber */}

            {/* //#region  //*============== FAQ */}
            <div className='layout my-6 flex flex-col'>
              <div className='flex flex-row justify-between'>
                <div className='text-lg font-header'>Frequently Asked Questions</div>
                <div className='-ml-60'>
                  <Green_Ellipse_Thin className='-ml-[34rem] h-20 w-20' />
                </div>
              </div>

              <div className='flex flex-col lg:flex-row justify-between'>
                <div className='text-2xl lg:text-3xl font-light font-header'>
                  Not Sure Where To Begin?
                </div>
                <div>
                  <ButtonLink
                    href='/'
                    className='rounded-3xl px-10 font-light text-black'
                  >
                    See all
                  </ButtonLink>
                </div>
              </div>

              <div className='mt-6 lg:mt-2 text-2xl lg:text-3xl font-medium font-header'>
                Check Out Our Stories and Latest News
              </div>

              <div className='mt-14 flex flex-col gap-y-10 lg:flex-row'>
                <div className='lg:mr-6 flex flex-col gap-y-2'>
                  <div className='text-2xl font-semibold font-header'>
                    What will the training be like?
                  </div>
                  <div className='text-lg'>
                    Participants will take online classes and then participate
                    in live online sessions using smartphones, computers, and
                    other devices.
                  </div>
                </div>

                <div className='flex flex-col gap-y-2 lg:border-l lg:border-r lg:border-l-gray-400 lg:border-r-gray-400 lg:px-10'>
                  <div className='text-2xl font-semibold font-header'>
                    Is the training free?
                  </div>
                  <div className='text-lg'>
                    The training is entirely free, However, to be admitted to
                    the program, you must pay a non-refundable registration fee.
                  </div>
                </div>

                <div className='lg:ml-6 flex flex-col gap-y-2'>
                  <div className='text-2xl font-semibold font-header'>
                    Will the training be videotaped?
                  </div>
                  <div className='text-lg'>
                    No. Live classes will be held twice a week. In addition,
                    participants will have access to already recorded videos and
                    other materials.
                  </div>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== FAQ */}

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
