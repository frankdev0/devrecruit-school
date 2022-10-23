import * as React from 'react';

import Button from '@/components/buttons/Button';
import { InvestCard, Prepare } from '@/components/cards';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function Enrollment() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='mt-20'>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col'>
            {/* //#region  //*============== Enrollment Banner */}
            <div className='relative'>
              <div className='mx-auto object-cover'>
                <picture>
                  <source
                    srcSet='/images/enroll4.png'
                    type='image/png'
                    width='100%'
                  />
                  <img src='/images/enroll4.png' alt='' width='100%' />
                </picture>
              </div>

              <div className='absolute inset-x-0 top-0 flex w-full translate-y-1/2 flex-row justify-center text-center text-white'>
                <div className='my-auto mt-10 flex flex-col justify-center gap-y-10 px-20'>
                  <div className='flex flex-col gap-y-4 text-5xl font-semibold text-primary-500'>
                    <div>Make an Impact in the</div>
                    <div>Tech Eco-system</div>
                  </div>

                  <div className='text-2xl'>
                    <div>
                      Start learning to put yourself on the right track for
                    </div>
                    <div>
                      a seat at the table of Africa&apos;s technology experts.
                    </div>
                  </div>

                  <div>
                    <Button className='rounded-[1.25rem] px-6 py-3 text-black'>
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Enrollment Banner */}

            {/* //#region  //*============== Specialised Courses */}
            <div className='layout my-20 flex flex-col gap-y-14'>
              <div className='text-3xl font-semibold'>
                Explore Our Specialized Courses
              </div>

              <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
                <div className='relative cursor-default'>
                  <img
                    className='mx-auto object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
                    src='/images/Vector1.png'
                    alt=''
                    width={250}
                    height={250}
                  />

                  <div className='absolute inset-x-0 top-[23%] flex w-full translate-y-1/2 flex-row justify-center text-center text-gray-200 hover:text-white'>
                    <div className='text-3xl font-bold'>
                      <div>IT Business</div>
                      <div>Analysis</div>
                    </div>
                  </div>
                </div>

                <div className='relative cursor-default'>
                  <img
                    className='mx-auto object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
                    src='/images/Vector3.png'
                    alt=''
                    width={250}
                    height={250}
                  />

                  <div className='absolute inset-x-0 top-[33%] flex w-full translate-y-1/2 flex-row justify-center text-center text-gray-200 hover:text-white'>
                    <div className='text-3xl font-bold'>Frontend</div>
                  </div>
                </div>

                <div className='relative cursor-default'>
                  <img
                    className='mx-auto object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
                    src='/images/Vecto3r3.png'
                    alt=''
                    width={250}
                    height={250}
                  />

                  <div className='absolute inset-x-0 top-[33%] flex w-full translate-y-1/2 flex-row justify-center text-center text-gray-200 hover:text-white'>
                    <div className='text-3xl font-bold'>Cyber Security</div>
                  </div>
                </div>

                <div className='relative cursor-default'>
                  <img
                    className='mx-auto object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
                    src='/images/Vect3or.png'
                    alt=''
                    width={250}
                    height={250}
                  />

                  <div className='absolute inset-x-0 top-[23%] flex w-full translate-y-1/2 flex-row justify-center text-center text-gray-200 hover:text-white'>
                    <div className='text-3xl font-bold'>
                      <div>Cloud</div>
                      <div>Engineering</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Specialised Courses */}

            {/* //#region  //*============== Course Module */}
            <div className='layout my-6 flex flex-col gap-y-6'>
              <div className='text-3xl font-semibold'>
                <div>Obtain a physical and electronic certification that</div>
                <div>can be share on social media, and among your</div>
                <div>networks to get your foot in the tech space.</div>
              </div>

              <div>
                <div>
                  You can share your Certificate in the Certifications section
                  of your
                </div>
                <div>
                  LinkedIn profile, on printed resumes, CVs, or other documents.
                </div>
              </div>

              <div className='mt-6 flex flex-row'>
                <div>
                  <img src='/images/suit.png' alt='' width={750} height={500} />
                </div>

                <div className='z-20 my-auto -ml-20 flex h-[20.5rem] w-[44.5rem] min-w-[35rem] flex-col gap-y-4 overflow-hidden bg-primary-800 p-4 text-white lg:gap-y-10 lg:p-10'>
                  <div className='text-2xl'>
                    Cybersecurity is a rapidly growing discipline that
                    identifies the security risks associated with our
                    increasingly networked digital world. Join the others to
                    learn more on how to become an expert in technology
                    security.
                  </div>

                  <div>
                    <Button className='rounded-[1.25rem] bg-white px-6 py-3 text-black'>
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Course Module */}

            {/* //#region  //*============== Admission Process */}
            <div className='layout mt-20 flex flex-row justify-between px-20'>
              <div className='my-auto mt-14 flex flex-col gap-y-14'>
                <div className='text-3xl font-medium'>
                  How the Admission Process Works
                </div>

                <div className='flex flex-col gap-y-16'>
                  <div className='flex flex-row gap-x-6'>
                    <div className='my-auto text-[4.38rem] font-bold text-[#DDD]'>
                      1
                    </div>
                    <div className='text-2xl'>
                      <div>Fill and submit the application form</div>
                    </div>
                  </div>

                  <div className='flex flex-row gap-x-6'>
                    <div className='my-auto text-[4.38rem] font-bold text-[#DDD]'>
                      2
                    </div>
                    <div className='text-2xl'>
                      <div>Pay the required registration fee</div>
                    </div>
                  </div>

                  <div className='flex flex-row gap-x-6'>
                    <div className='my-auto text-[4.38rem] font-bold text-[#DDD]'>
                      3
                    </div>
                    <div className='text-2xl'>
                      <div>Complete enrolment and start taking classes</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='translate-y-1/'>
                <img
                  src='/images/enroll2.png'
                  width={650}
                  height={400}
                  alt=''
                />
              </div>
            </div>
            {/* //#endregion  //*============== Admission Process */}

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
