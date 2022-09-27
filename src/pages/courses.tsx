import * as React from 'react';

import Button from '@/components/buttons/Button';
import { InvestCard, Prepare } from '@/components/cards';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import Green_Ellipse_Thin from '~/svg/Green_Ellipse_Thin.svg';
import Share from '~/svg/share.svg';
import Star from '~/svg/star.svg';

export default function Courses() {
  const content = [
    {
      title: 'Introduction to Information/Cyber Security',
      body: 'Learn the fundamental concepts required to recognize typical cyber threats and assaults and to defend yourself.'
    },
    {
      title: `Evolution & Importance of Security`,
      body: `Learn the fundamental concepts required to understand Evolution & Importance of Security.`,
    },
    {
      title: `Types of Security Threats`,
      body: `Get in-depth understanding and increase your knowledge of threats and cyber security information.`,
    },
    {
      title: `Cyber Security Domain Map`,
      body: `Learn the fundamental concepts of Telecommunications and Network Security. Information Security Governance and Risk Management. `,
    },
    {
      title: `Security Principles`,
      body: `Learn the fundamental concepts required to define the basic building blocks of any good security program.`,
    }
  ];

  return (
    <Layout isActive={['Courses']} isDark>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='mt-20'>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col'>
            {/* //#region  //*============== About Banner */}
            <div className='relative -mt-36'>
              <div className='mx-auto object-cover'>
                <picture>
                  <source
                    srcSet='/images/applly.png'
                    type='image/png'
                    width='100%'
                  />
                  <img
                    src='/images/applly.png'
                    alt=''
                    width='100%'
                  />
                </picture>
              </div>

              <div className='absolute inset-x-0 top-0 my-16 flex w-full translate-y-1/2 flex-row justify-between text-white'>

                <div className='my-auto flex flex-col gap-y-10 px-20 mt-10'>
                  <div className='text-5xl font-semibold flex flex-col gap-y-4'>
                    <div>Become an Expert</div>
                    <div>In CyberSecurity</div>
                  </div>

                  <div className='flex flex-row gap-x-6'>
                    <div className='flex flex-row gap-x-2 my-auto'>
                      {Array(5).fill(0).map(i => (
                        <Star key={i} className='w-6 h-6' />
                      ))}
                    </div>

                    <div className='text-3xl font-semibold my-auto'>4,75</div>

                    <div className='my-auto'>(1023 Reviews)  20327 Student</div>
                  </div>

                  <div className='flex flex-row gap-x-10'>
                    <Button className='text-black'>
                      <div className='flex flex-row gap-x-4'>
                        <div className='my-auto'>Add To Wishlist</div>
                        <div className='my-auto'>+</div>
                      </div>
                    </Button>

                    <Button className='bg-white text-black'>
                      <div className='flex flex-row gap-x-4'>
                        <div className='my-auto'>Share</div>
                        <div className='my-auto'>
                          <Share className='w-4 h-4' />
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== About Banner */}

            {/* //#region  //*============== Course Outcome */}
            <div className='layout my-20 flex flex-row justify-between px-20'>
              <div className='my-auto flex flex-col gap-y-14'>
                <div className='text-3xl font-medium'>
                  Course Outcome
                </div>

                <div className='text-2xl'>
                  <div>After completing this course, you will earn a cyberwarfare</div>
                  <div>introductory certificate for the key competencies and learning</div>
                  <div>goals listed below:</div>
                </div>

                <div className='flex flex-col gap-y-16'>
                  <div className='flex flex-row gap-x-6'>
                    <div className='text-[4.38rem] font-bold text-[#DDD] my-auto'>
                      1
                    </div>
                    <div className='text-2xl'>
                      <div>To secure an IT infrastructure and evaluate and fix</div>
                      <div>security issues in computers and network systems.</div>
                    </div>
                  </div>

                  <div className='flex flex-row gap-x-6'>
                    <div className='text-[4.38rem] font-bold text-[#DDD] my-auto'>
                      2
                    </div>
                    <div className='text-2xl'>
                      <div>Create policies and procedures for addressing</div>
                      <div>enterprise security risks.</div>
                    </div>
                  </div>

                  <div className='flex flex-row gap-x-6'>
                    <div className='text-[4.38rem] font-bold text-[#DDD] my-auto'>
                      3
                    </div>
                    <div className='text-2xl'>
                      <div>Defend and protect networks and computer</div>
                      <div>systems from cybersecurity threats.</div>
                    </div>
                  </div>

                  <div className='flex flex-row gap-x-6'>
                    <div className='text-[4.38rem] font-bold text-[#DDD] my-auto'>
                      4
                    </div>
                    <div className='text-2xl'>
                      <div>Diagnose cybersecurity incidents or crimes</div>
                      <div>involving computer systems and digital evidence.</div>
                    </div>
                  </div>

                  <div className='flex flex-row gap-x-6'>
                    <div className='text-[4.38rem] font-bold text-[#DDD] my-auto'>
                      5
                    </div>
                    <div className='text-2xl'>
                      <div>Communicating effectively in a professional</div>
                      <div>context to address information security issues.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='translate-y-1/4 -mt-10 relative'>
                <NextImage src='/images/device-frame.png' width={320} height={650} alt='' />

                <div
                  style={{
                    background: 'linear-gradient(103.97deg, rgba(65, 131, 122, 0.49) 5.76%, #86C9C0 85.6%)',
                    backdropFilter: 'blur(5px)'
                  }}
                  className='flex rounded-[1.875rem] h-[5.5rem] w-[21.3125rem] text-xl text-center absolute top-0 -ml-32 -mt-8'>
                  <div className='m-auto'>Submit application form</div>
                </div>

                <div
                  style={{
                    background: 'linear-gradient(103.97deg, rgba(65, 131, 122, 0.49) 5.76%, #86C9C0 85.6%)',
                    backdropFilter: 'blur(5px)'
                  }}
                  className='flex rounded-[1.875rem] h-[5.5rem] w-[21.3125rem] text-xl text-center absolute right-0 -mr-48 -mt-[25rem]'>
                  <div className='m-auto'>Pay registration fee</div>
                </div>

                <div
                  style={{
                    background: 'linear-gradient(103.97deg, rgba(65, 131, 122, 0.49) 5.76%, #86C9C0 85.6%)',
                    backdropFilter: 'blur(5px)'
                  }}
                  className='flex rounded-[1.875rem] h-[5.5rem] w-[21.3125rem] text-xl text-center absolute left-0 -ml-64 -mt-16'>
                  <div className='m-auto'>Start taking classes</div>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Course Outcome */}

            {/* //#region  //*============== Understanding Security */}
            <div className='relative'>
              <div className='mx-auto object-cover'>
                <picture>
                  <source
                    srcSet='/images/Courses_Rectangle.png'
                    type='image/png'
                    width='100%'
                  />
                  <img
                    src='/images/Courses_Rectangle.png'
                    alt=''
                    width='100%'
                  />
                </picture>
              </div>

              <div className='absolute inset-x-0 top-0 my-16 flex w-full translate-y-1/2 flex-row justify-between text-white'>

                <div className='my-auto flex flex-col gap-y-6 px-20'>
                  <div className='text-5xl font-semibold'>Understanding Security Fundamentals</div>

                  <div className='flex text-2xl flex-col'>
                    <div>Cybersecurity is a fast-growing field that addresses the security risks</div>
                    <div>of our increasingly connected digital world. Learn cybersecurity,</div>
                    <div>and you will learn how users, companies, and even governments</div>
                    <div>protect themselves and recover from cyber threats and attacks.</div>
                  </div>
                </div>
              </div>

              <div>
                <Green_Ellipse_Thin className='absolute bottom-0 right-0 mr-40 z-50 h-20 w-20' />
              </div>
            </div>
            {/* //#endregion  //*============== Understanding Security */}

            {/* //#region  //*============== Course Module */}
            <div className='pl-20 my-20 flex flex-col w-2/3'>
              <div className='flex flex-col justify-between gap-y-6'>
                <div className='flex flex-row justify-between'>
                  <div className='text-3xl'>Course Module</div>
                  <div className='text-[#828282] text-2xl my-auto'>See All</div>
                </div>


                {content.map((content, i) => (
                  <div key={i} className='rounded-[0.625rem] bg-black relative h-[200px] overflow-hidden'>
                    <div className='mx-auto object-cover'>
                      <picture>
                        <source
                          srcSet={`/images/courses_${i + 1}.png`}
                          type='image/png'
                          width='100%'
                          height='200px'
                        />
                        <img
                          src={`/images/courses_${i + 1}.png`}
                          alt=''
                          width='100%'
                          height='200px'
                        />
                      </picture>
                    </div>

                    <div className='absolute inset-x-0 top-[33.3%] bottom-[33.3%] flex w-full px-10 flex-row justify-between text-white'>
                      <div className='flex flex-col w-3/4 gap-y-4'>
                        <div className='text-2xl font-semibold'>{content.title}</div>
                        <div>{content.body}</div>
                      </div>

                      <div className='my-auto'>
                        <Button>View Details</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* //#endregion  //*============== Course Module */}

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
