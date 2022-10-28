/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

import Button from '@/components/buttons/Button';
import { InvestCard, Prepare } from '@/components/cards';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

import Green_Ellipse_Thin from '~/svg/Green_Ellipse_Thin.svg';
import Share from '~/svg/share.svg';
import Star from '~/svg/star.svg';

export default function Courses() {
  const content = [
    {
      title: 'Introduction to Information/Cyber Security',
      body: 'Learn the fundamental concepts required to recognize typical cyber threats and assaults and to defend yourself.',
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
    },
  ];

  return (
    <Layout isActive={['Courses']} isDark>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='mt-20'>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col'>
            {/* //#region  //*============== About Banner */}
            <div className='relative -mt-[10.3rem] lg:-mt-36 h-[31.25rem]'>
              <div className='mx-auto object-cover'>
                <picture>
                  <source
                    srcSet='/images/applly.png'
                    type='image/png'
                    width='100%'
                  />
                  <img
                    src='/images/applly.png' alt='' width='100%'
                    className='h-[31.25rem] lg:h-auto'
                  />
                </picture>
              </div>

              <div className='absolute px-6 lg:px-0 inset-x-0 top-0 lg:my-16 flex w-full translate-y-32 lg:translate-y-1/2 flex-row justify-between text-white'>
                <div className='my-auto mx-auto mt-10 flex flex-col gap-y-7 lg:gap-y-10'>
                  <div className='flex flex-col gap-y-4 text-3xl lg:text-5xl font-semibold'>
                    <div className='font-header'>Become an Expert In CyberSecurity</div>
                    {/* <div>In CyberSecurity</div> */}
                  </div>

                  <div className='flex flex-row gap-x-6 lg:mx-auto'>
                    <div className='my-auto flex flex-row gap-x-2'>
                      {Array(5)
                        .fill(0)
                        .map((i) => (
                          <Star key={i} className='h-6 w-6' />
                        ))}
                    </div>

                    <div className='my-auto text-3xl font-semibold'>4,75</div>

                    <div className='hidden lg:block my-auto'>(1023 Reviews) 20327 Student</div>
                  </div>

                  <div className='lg:hidden my-auto'>(1023 Reviews) 20327 Student</div>

                  <div className='flex flex-row gap-x-10 lg:mx-auto'>
                    <ButtonLink
                      href='/register'
                      className='rounded-3xl font-light text-black'
                    >
                      Enroll Now
                    </ButtonLink>

                    <CopyToClipboard
                      onCopy={() => {
                        toast.info('URL Copied')
                      }}
                      text="https://devrecruitschool.com/register"
                    >
                      <Button className='bg-white text-black'>
                        <div className='flex flex-row gap-x-4'>
                          <div className='my-auto'>Share</div>
                          <div className='my-auto'>
                            <Share className='h-4 w-4' />
                          </div>
                        </div>
                      </Button>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== About Banner */}

            {/* //#region  //*============== Course Module */}
            <div className='mt-10 lg:mt-20 flex w-full flex-col lg:px-20 px-[1.875rem]'>
              <div className='flex flex-col justify-between gap-y-6'>
                <div className='flex flex-row justify-between'>
                  <div className='text-3xl font-header'>Course Module</div>
                  {/* <div className='my-auto text-2xl text-[#828282]'>See All</div> */}
                </div>

                {content.map((content, i) => (
                  <div
                    key={i}
                    className='relative h-[13.75rem] lg:h-[12.5rem] overflow-hidden rounded-[0.625rem] bg-black'
                  >
                    <div className='mx-auto object-cover'>
                      <picture>
                        <source
                          srcSet={`/images/courses_${i + 1}.png`}
                          type='image/png'
                          width='100%'
                        // height='200px'
                        />
                        <img
                          src={`/images/courses_${i + 1}.png`}
                          alt=''
                          width='100%'
                          // height='200px'
                          className='h-[13.75rem] lg:h-[12.5rem]'
                        />
                      </picture>
                    </div>

                    <div className='absolute inset-x-0 top-[12%] lg:top-[33.3%] bottom-[33.3%] flex w-full flex-row justify-between px-10 text-white'>
                      <div className='flex lg:w-3/4 flex-col gap-y-[0.825rem] lg:gap-y-4'>
                        <div className='text-[1.25rem] lg:text-2xl font-semibold font-header'>
                          {content.title}
                        </div>
                        <div className='text-xs lg:text-base'>{content.body}</div>

                        <div className='lg:hidden'>
                        <ButtonLink
                          href='/register'
                          className='rounded-3xl h-[2rem] font-light text-black'
                        >
                          Enroll Now
                        </ButtonLink>
                      </div>
                      </div>
                      {/* <div className='my-auto'>
                        <Button>View Details</Button>
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* //#endregion  //*============== Course Module */}

            {/* //#region  //*============== Course Outcome */}
            <div className='layout my-10 lg:my-20 flex flex-row justify-between px-6 lg:px-0 lg:pr-24'>
              <div className='my-auto flex flex-col gap-y-5 lg:gap-y-6'>
                <div className='text-2xl lg:text-5xl font-semibold font-header'>What To Expect</div>

                <div className='lg:text-2xl'>
                  <div>
                    After completing this course, you will earn a cybersecurity
                  </div>
                  <div>
                    certificate of participation for the key competencies and
                    learning
                  </div>
                  <div>outcomes listed below:</div>
                </div>

                <div className='flex flex-col gap-y-5 lg:gap-y-16'>
                  <div className='flex flex-row gap-x-6'>
                    <div className='my-auto text-[2.5rem] lg:text-[4.38rem] font-bold text-[#DDD]'>
                      1
                    </div>
                    <div className='lg:text-2xl'>
                      <div>
                        To secure an IT infrastructure and evaluate and fix
                      </div>
                      <div>
                        security issues in computers and network systems.
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-row gap-x-6'>
                    <div className='my-auto text-[2.5rem] lg:text-[4.38rem] font-bold text-[#DDD]'>
                      2
                    </div>
                    <div className='lg:text-2xl'>
                      <div>Create policies and procedures for addressing</div>
                      <div>enterprise security risks.</div>
                    </div>
                  </div>

                  <div className='flex flex-row gap-x-6'>
                    <div className='my-auto text-[2.5rem] lg:text-[4.38rem] font-bold text-[#DDD]'>
                      3
                    </div>
                    <div className='lg:text-2xl'>
                      <div>Defend and protect networks and computer</div>
                      <div>systems from cybersecurity threats.</div>
                    </div>
                  </div>

                  <div className='flex flex-row gap-x-6'>
                    <div className='my-auto text-[2.5rem] lg:text-[4.38rem] font-bold text-[#DDD]'>
                      4
                    </div>
                    <div className='lg:text-2xl'>
                      <div>Diagnose cybersecurity incidents or crimes</div>
                      <div>
                        involving computer systems and digital evidence.
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-row gap-x-6'>
                    <div className='my-auto text-[2.5rem] lg:text-[4.38rem] font-bold text-[#DDD]'>
                      5
                    </div>
                    <div className='lg:text-2xl'>
                      <div>Communicating effectively in a professional</div>
                      <div>context to address information security issues.</div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col mt-14 gap-y-2'>
                  <div className='text-2xl lg:text-4xl font-semibold font-header'>
                    Registration Fee
                    <span className='text-lg text-gray-400 font-semibold ml-2'>(Not a Tuition Fee)</span>
                  </div>

                  <div className='text-2xl'>
                    <span className='text-3xl font-semibold font-header'>₦ 20,000</span>
                    <span className='italics text-primary-800 italic text-xl'> (Early Bird <span className='text-2xl font-header'>₦ 15,000</span>)</span>
                  </div>
                </div>

                <hr className='bg-gray-500 w-2/3' />

                <div className='flex flex-col gap-y-2'>
                  <div className='text-2xl lg:text-3xl font-semibold font-header'>Course Duration</div>

                  <div className='text-xl lg:text-2xl'>
                    4 - 5 Weeks <span className='italics text-primary-800 font-header'>(Mock Exams Inclusive)</span>
                  </div>
                </div>

                <div className='mt-4'>
                  <ButtonLink
                    href='/register'
                    className='rounded-3xl font-light text-black lg:px-40 text-2xl'
                  >
                    Enroll Now
                  </ButtonLink>
                </div>
              </div>

              <div className='hidden lg:block relative -mt-10 translate-y-1/4'>
                <img
                  src='/images/device-frame.png'
                  width={320}
                  height={650}
                  alt=''
                />

                <div
                  style={{
                    background:
                      'linear-gradient(103.97deg, rgba(65, 131, 122, 0.49) 5.76%, #86C9C0 85.6%)',
                    backdropFilter: 'blur(5px)',
                  }}
                  className='absolute top-0 -ml-32 -mt-8 flex h-[5.5rem] w-[21.3125rem] rounded-[1.875rem] text-center text-xl'
                >
                  <div className='m-auto'>Submit application form</div>
                </div>

                <div
                  style={{
                    background:
                      'linear-gradient(103.97deg, rgba(65, 131, 122, 0.49) 5.76%, #86C9C0 85.6%)',
                    backdropFilter: 'blur(5px)',
                  }}
                  className='absolute right-0 -mr-48 -mt-[25rem] flex h-[5.5rem] w-[21.3125rem] rounded-[1.875rem] text-center text-xl'
                >
                  <div className='m-auto'>Pay registration fee</div>
                </div>

                <div
                  style={{
                    background:
                      'linear-gradient(103.97deg, rgba(65, 131, 122, 0.49) 5.76%, #86C9C0 85.6%)',
                    backdropFilter: 'blur(5px)',
                  }}
                  className='absolute left-0 -ml-64 -mt-16 flex h-[5.5rem] w-[21.3125rem] rounded-[1.875rem] text-center text-xl'
                >
                  <div className='m-auto'>Start taking classes</div>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Course Outcome */}

            {/* //#region  //*============== Understanding Security */}
            <div className='relative h-[32.6875rem] lg:h-auto'>
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
                    className='h-[32.6875rem] lg:h-auto'
                  />
                </picture>
              </div>

              <div className='absolute inset-x-0 top-0 lg:my-16 flex w-full translate-y-20 lg:translate-y-1/2 flex-row justify-between text-white'>
                <div className='my-auto flex flex-col gap-y-6 px-[1.875rem] lg:px-20'>
                  <div className='text-2xl lg:text-5xl font-semibold font-header'>
                    Understanding Security Fundamentals
                  </div>

                  <div className='flex flex-col lg:text-2xl'>
                    <div>
                      Cybersecurity is a fast-growing field that addresses the
                      security risks
                    </div>
                    <div>
                      of our increasingly connected digital world. Learn
                      cybersecurity,
                    </div>
                    <div>
                      and you will learn how users, companies, and even
                      governments
                    </div>
                    <div>
                      protect themselves and recover from cyber threats and
                      attacks.
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Green_Ellipse_Thin className='hidden lg:block absolute bottom-0 right-0 z-50 mr-40 h-20 w-20' />
              </div>
            </div>
            {/* //#endregion  //*============== Understanding Security */}

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
