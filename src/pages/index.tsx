import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import Ellipse from '~/svg/Ellipse temp.svg';
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
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='mt-20'>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col'>
            {/* //#region  //*============== Home Banner */}
            <div className='layout flex flex-row justify-center space-x-40'>
              <div>
                <Ellipse className='h-72 w-72' />
              </div>

              <div className='flex flex-col'>
                <div className='text-5xl leading-[4.7rem]'>
                  <div>Kickstart Your Career</div>
                  <div>in the IT Industry</div>
                </div>
                <div className='flex flex-row space-x-6 text-2xl'>
                  <div>
                    <div>Join the DevRecruit training school to build</div>
                    <div>industry demand technological skillset</div>
                  </div>
                  <Ellipse_2 className='h-20 w-20' />
                </div>
                <div>
                  <ButtonLink
                    href='/'
                    className='rounded-3xl font-light text-black'
                  >
                    Enroll Now
                  </ButtonLink>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Home Banner */}

            {/* //#region  //*============== Rewarding Career */}
            <div className='layout my-24 flex flex-col items-center space-y-6'>
              <div className='text-3xl font-semibold'>
                Do You Want to Start a Rewarding Career in Cybersecurity?
              </div>
              <div className='text-center'>
                <div>
                  Here&apos;s a quick video to help you get started on your
                </div>
                <div>path to becoming a cybersecurity expert.</div>
              </div>

              <NextImage
                src='/images/Rectangle 83.png'
                width={800}
                height={400}
                alt='Video'
              />
            </div>
            {/* //#endregion  //*============== Rewarding Career */}

            {/* //#region  //*============== Vision, Mission and Goals */}
            <div className='relative flex h-[800px] w-screen'>
              <div className='absolute'>
                <NextImage
                  src='/images/Black_Rectangle.png'
                  width={1700}
                  height={700}
                  alt=''
                />
              </div>

              <div className='my-10 flex flex-col space-y-24 px-10'>
                {/*//** * First Circle */}
                <div className='flex flex-row'>
                  <div className='relative flex flex-row '>
                    <div className='absolute z-10'>
                      <White_Ellipse className='h-44 w-44' />
                    </div>

                    <div className='z-20 translate-x-1/2 translate-y-1/3 text-center text-3xl font-semibold leading-[2.813rem]'>
                      <div>Our</div>
                      <div>Vision</div>
                    </div>
                  </div>

                  <div className='z-20 my-auto mt-20 ml-28 mr-6 h-px w-80 bg-white'></div>

                  <div className='z-20 mt-10 text-xl font-semibold text-white'>
                    <div>We see a world in which anyone, anywhere</div>
                    <div>would obtain the necessary training to build</div>
                    <div>
                      a portfolio and begin a career in the IT industry.
                    </div>
                  </div>
                </div>
                {/*//** * End First Circle */}

                {/*//** * Second Circle */}
                <div className='ml-40 flex flex-row'>
                  <div className='relative flex flex-row '>
                    <div className='absolute z-10'>
                      <Outline_Ellipse className='h-44 w-44' />
                    </div>

                    <div className='z-20 translate-x-1/3 translate-y-1/3 text-center text-3xl font-semibold leading-[2.813rem] text-white'>
                      <div>Our</div>
                      <div>Mission</div>
                    </div>
                  </div>

                  <div className='z-20 my-auto mt-20 ml-28 mr-6 h-px w-80 bg-white'></div>

                  <div className='z-20 mt-10 text-xl font-semibold text-white'>
                    <div>To ensure that the IT sector has capable</div>
                    <div>technical capacities that can compete on</div>
                    <div>both the national and international levels.</div>
                  </div>
                </div>
                {/*//** * End Second Circle */}

                {/*//** * Third Circle */}
                <div className='ml-80 flex flex-row'>
                  <div className='relative flex flex-row '>
                    <div className='absolute z-10'>
                      <Outline_Ellipse className='h-44 w-44' />
                    </div>

                    <div className='z-20 translate-x-[60%] translate-y-1/3 text-center text-3xl font-semibold leading-[2.813rem] text-white'>
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
            {/* //#endregion  //*============== Vision, Mission and Goals */}

            {/* //#region  //*============== Dreams */}
            <div className='layout mb-20 flex flex-col'>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-col gap-y-4'>
                  <div className='text-3xl font-medium'>
                    Get The Job of Your Dreams
                  </div>
                  <div className='text-2xl'>
                    <div>Enroll to begin taking live sessions and</div>
                    <div>tutorials on Cybersecurity and more</div>
                  </div>
                  <div>
                    <ButtonLink
                      href='/'
                      className='rounded-3xl font-light text-black'
                    >
                      Enroll Now
                    </ButtonLink>
                  </div>
                </div>

                <div>
                  <NextImage
                    src='/images/image 99.png'
                    width={700}
                    height={400}
                    alt=''
                  />
                </div>
              </div>

              <div className='mt-10 flex flex-col'>
                <div className='flex flex-col gap-y-4'>
                  <div className='text-3xl font-medium'>
                    Here’s Why You Should Enroll
                  </div>
                  <div className='text-2xl'>
                    <div>Our process is centered on quality and the</div>
                    <div>development of expert technical skills</div>
                  </div>
                  <div>
                    <ButtonLink
                      href='/'
                      className='rounded-3xl font-light text-black'
                    >
                      Enroll Now
                    </ButtonLink>
                  </div>
                </div>

                <div></div>

                <div className='mt-40'>
                  <Green_Ellipse className='h-10 w-10' />
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Dreams */}

            {/* //#region  //*============== Cyber */}
            <div className='relative'>
              <div className='mx-auto object-cover'>
                <picture>
                  <source srcSet='/images/Black_Curve.png' type='image/png' />
                  <img
                    src='/images/Black_Curve.png'
                    alt='Landscape picture'
                    width='100%'
                  />
                </picture>
                {/* <NextImage className='w-screen h-1/6' src='/images/Black_Curve.png' width={0} height={0} alt='' /> */}
                {/* <Black_Curve className='w-screen h-[800px]' /> */}
              </div>

              <div className='absolute inset-x-0 top-0 my-16 flex w-full flex-row justify-between px-20 text-white'>
                <div className='flex w-1/2 flex-col gap-y-10'>
                  <div className='text-lg'>OUR COURSES</div>
                  <div className='-mt-8 text-3xl'>Open For Enrollment</div>
                  <div className='text-[2.5rem] font-semibold'>
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

                  <div>
                    <ButtonLink
                      href='/'
                      className='rounded-[1.25rem] bg-white px-8 py-3 font-light text-primary'
                    >
                      Enroll Now
                    </ButtonLink>
                  </div>
                </div>

                <div className='flex flex-col space-y-48'>
                  <div>
                    <ButtonLink
                      href='/'
                      className='h-20 w-[22.2rem] rounded-[1.9rem] bg-white px-10 text-2xl font-extrabold text-primary'
                    >
                      <div className='flex w-full flex-row justify-between'>
                        <div className='my-auto'>Security Principles</div>
                        <div className='my-auto'>
                          <Security_One className='w-8' />
                        </div>
                      </div>
                    </ButtonLink>
                  </div>

                  <div className='-ml-80'>
                    <ButtonLink
                      href='/'
                      className='h-20 w-[22.2rem] rounded-[1.9rem] bg-white px-10 text-2xl font-extrabold text-primary'
                    >
                      <div className='flex w-full flex-row justify-between'>
                        <div className='my-auto'>Types of Security</div>
                        <div className='my-auto'>
                          <Security_Two className='w-8' />
                        </div>
                      </div>
                    </ButtonLink>
                  </div>

                  <div className='-ml-[40rem]'>
                    <ButtonLink
                      href='/'
                      className='h-20 w-[22.2rem] rounded-[1.9rem] bg-white px-10 text-2xl font-extrabold text-primary'
                    >
                      <div className='flex w-full flex-row justify-between'>
                        <div className='my-auto'>Authentication</div>
                        <div className='my-auto'>
                          <Security_Three className='w-8' />
                        </div>
                      </div>
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Cyber */}

            {/* //#region  //*============== FAQ */}
            <div className='layout my-10 flex flex-col'>
              <div className='flex flex-row justify-between'>
                <div className='text-lg'>Frequently Asked Questions</div>
                <div className='-ml-60'>
                  <Green_Ellipse_Thin className='-ml-96 h-14 w-14' />
                </div>
              </div>

              <div className='flex flex-row justify-between'>
                <div className='text-3xl font-light'>
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

              <div className='mt-6 text-3xl font-medium'>
                Check Out Our Stories and Latest News
              </div>

              <div className='mt-14 flex flex-row'>
                <div className='mr-6 flex flex-col gap-y-4'>
                  <div className='text-2xl font-semibold'>
                    What will the training be like?
                  </div>
                  <div className='text-lg'>
                    Participants will take online classes and then participate
                    in live online sessions using smartphones, computers, and
                    other devices.
                  </div>
                </div>

                <div className='flex flex-col gap-y-4 border-l border-r border-l-gray-400 border-r-gray-400 px-10'>
                  <div className='text-2xl font-semibold'>
                    Is the training free?
                  </div>
                  <div className='text-lg'>
                    The training is entirely free, However, to be admitted to
                    the program, you must pay a non-refundable registration fee.
                  </div>
                </div>

                <div className='ml-6 flex flex-col gap-y-4'>
                  <div className='text-2xl font-semibold'>
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
            <div className='layout my-20 flex flex-row justify-between px-20'>
              <div className='my-auto flex flex-col gap-y-4'>
                <div className='text-3xl'>Prepare Yourself For The Future</div>
                <div className='w-1/2 text-lg'>
                  With the DevRecruit e-learning and coaching school, you can
                  improve your abilities and prepare for that dream IT job.
                </div>
              </div>

              <div className='my-auto'>
                <Ellipse className='h-72 w-72' />
              </div>
            </div>
            {/* //#endregion  //*============== Prepare */}

            {/* //#region  //*============== Invest */}
            <div className='layout relative mb-10'>
              <div className='mx-auto object-cover'>
                <picture>
                  <source
                    srcSet='/images/Rectangle_Temp.png'
                    type='image/png'
                  />
                  <img
                    src='/images/Rectangle_Temp.png'
                    alt='Landscape picture'
                    width='100%'
                  />
                </picture>
              </div>

              <div className='absolute inset-x-0 top-0 my-16 flex w-full flex-row justify-between px-60 text-white'>
                <div className='my-auto text-right text-4xl font-extrabold leading-[3.84rem]'>
                  <div>It&apos;s Time to Start</div>
                  <div>Investing in Your Dream</div>
                </div>

                <div className='mt-10 flex flex-col gap-y-6'>
                  <div className='text-2xl'>
                    <div>Begin your journey of a long career by</div>
                    <div>acquiring expertise and technical</div>
                    <div>knowledge to enter the IT sector.</div>
                  </div>

                  <div>
                    <ButtonLink
                      href='/'
                      className='rounded-[1.25rem] bg-white px-8 py-3 font-light text-primary'
                    >
                      Enroll Now
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Invest */}
          </div>
        </section>
      </main>
    </Layout>
  );
}
