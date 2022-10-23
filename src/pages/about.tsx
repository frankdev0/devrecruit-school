import * as React from 'react';
import SwiperCore, { Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { InvestCard, Prepare } from '@/components/cards';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

import Green_Ellipse_Thin from '~/svg/Green_Ellipse_Thin.svg';

SwiperCore.use([Autoplay]);

export default function About() {
  return (
    <Layout isActive={['About']}>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='mt-20'>
        <div className='absolute top-0 right-0 z-0 -mt-20'>
          <img src='/images/about_curve.png' alt='' width={750} height={750} />
        </div>

        <div>
          <Green_Ellipse_Thin className='absolute top-0 left-0 z-50 mt-24 -ml-4 h-20 w-20' />
        </div>

        <section className='bg-white'>
          <div className='flex min-h-screen flex-col'>
            {/* //#region  //*============== About Banner */}
            <div className='layout my-20 flex flex-col gap-y-10'>
              <div className='text-[3.15rem] font-semibold'>Who We Are</div>
              <div className='w-1/2 text-justify text-2xl'>
                DevRecruit is a rapidly expanding recruitment corporation that
                integrates tech talent with the best organizations where their
                skills are needed. We have expanded over the years and now have
                up to 5000+ talents in our system, with many working in various
                sectors in technical roles. The goal of our training and
                eLearning is to provide upcoming talents with the resources,
                platform, and community they need to launch their careers.
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
            {/* //#endregion  //*============== About Banner */}

            {/* //#region  //*============== Admission */}
            <div className='layout my-20 flex flex-row justify-between px-20'>
              <div className='my-auto'>
                <img src='/images/apply.png' alt='' width={480} height={300} />
              </div>

              <div className='my-auto flex flex-col gap-y-14'>
                <div className='text-[2.813rem] font-medium'>
                  How the Admission Process Works
                </div>

                <div className='flex flex-col gap-y-16'>
                  <div className='flex flex-row gap-x-6'>
                    <div className='my-auto text-[4.38rem] font-bold text-[#DDD]'>
                      1
                    </div>
                    <div className='text-2xl'>
                      Fill and submit the application form
                    </div>
                  </div>

                  <div className='flex flex-row gap-x-6'>
                    <div className='my-auto text-[4.38rem] font-bold text-[#DDD]'>
                      2
                    </div>
                    <div className='text-2xl'>
                      Pay the required registration fee
                    </div>
                  </div>

                  <div className='flex flex-row gap-x-6'>
                    <div className='my-auto text-[4.38rem] font-bold text-[#DDD]'>
                      3
                    </div>
                    <div className='text-2xl'>
                      Complete enrolment and start taking classes
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Admission */}

            {/* //#region  //*============== Why */}
            <div className='relative'>
              <div className='mx-auto object-cover'>
                <picture>
                  <source srcSet='/images/about_merged.png' type='image/png' />
                  <img src='/images/about_merged.png' alt='' width='100%' />
                </picture>
              </div>

              <div className='absolute inset-x-0 top-0 my-16 flex w-full translate-y-1/2 flex-row justify-between text-white'>
                <div className=''>
                  <img
                    src='/images/devp5.jpg'
                    width={600}
                    height={400}
                    alt=''
                  />
                </div>

                <div className='my-auto -mt-28 flex flex-col gap-y-14 pr-20'>
                  <div className='text-3xl font-medium'>Why Choose Us</div>

                  <div className='flex flex-col gap-y-16'>
                    <div className='flex flex-row gap-x-6'>
                      <div className='my-auto flex flex-col items-center gap-y-8 text-[2.875rem] font-semibold text-[#DDD]'>
                        <div>1400+</div>
                        <div className='text-lg'>Students</div>
                      </div>
                      <div className='my-auto text-lg'>
                        <div>
                          We have provided talent from all over Africa with
                        </div>
                        <div>
                          tech skill coaching as well as eLearning courses
                        </div>
                        <div>and curriculum.</div>
                      </div>
                    </div>

                    <div className='flex flex-row gap-x-6'>
                      <div className='my-auto flex flex-col items-center gap-y-8 text-[2.875rem] font-semibold text-[#DDD]'>
                        <div>1000+</div>
                        <div className='text-lg'>Courses</div>
                      </div>
                      <div className='my-auto text-lg'>
                        <div>
                          From cybersecurity to programming to product design,
                        </div>
                        <div>
                          our tutorial base contains a wide range of courses for
                        </div>
                        <div>students to learn and obtain certification.</div>
                      </div>
                    </div>

                    <div className='flex flex-row gap-x-6'>
                      <div className='my-auto flex flex-col items-center gap-y-8 text-[2.875rem] font-semibold text-[#DDD]'>
                        <div>200+</div>
                        <div className='text-lg'>Instructors</div>
                      </div>
                      <div className='my-auto text-lg'>
                        <div>
                          Our instructors are well-known mentors and veterans in
                        </div>
                        <div>
                          the software industry with many years of experience.
                        </div>
                        <div>and curriculum.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //#endregion  //*============== Why */}

            {/* //#region  //*============== Swiper */}
            <div className='my-20 w-screen'>
              <Swiper
                slidesPerView={4}
                // spaceBetween={5}
                freeMode
                slidesPerGroup={4}
                loop={true}
                centeredSlides
                modules={[FreeMode]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                // loopFillGroupWithBlank={true}
                className='custom_swiper mySwiper'
              >
                <SwiperSlide className='custom_swiper_size my-8'>
                  <img
                    src='/images/sendbox2.png'
                    alt='sendbox'
                    width={180}
                    height={50}
                  />
                </SwiperSlide>

                <SwiperSlide className='custom_swiper_size'>
                  <img
                    src='/images/smartfow.png'
                    alt='smartfow'
                    width={350}
                    height={100}
                  />
                </SwiperSlide>

                <SwiperSlide className='custom_swiper_size my-6'>
                  <img
                    src='/images/tenecy.png'
                    alt='tenecy'
                    width={200}
                    height={50}
                  />
                </SwiperSlide>

                <SwiperSlide className='custom_swiper_size my-6'>
                  <img
                    src='/images/gtb.png'
                    alt='gtb'
                    width={200}
                    height={50}
                  />
                </SwiperSlide>

                <SwiperSlide className='custom_swiper_size my-6'>
                  <img
                    src='/images/capriconlogo.png'
                    alt='capriconlogo'
                    width={200}
                    height={50}
                  />
                </SwiperSlide>

                <SwiperSlide className='custom_swiper_size my-8 w-[26.25rem]'>
                  <img
                    src='/images/wallx.png'
                    alt='wallx'
                    width={180}
                    height={50}
                  />
                </SwiperSlide>

                <SwiperSlide className='custom_swiper_size my-8'>
                  <img
                    src='/images/sendbox2.png'
                    alt='sendbox'
                    width={180}
                    height={50}
                  />
                </SwiperSlide>

                <SwiperSlide className='custom_swiper_size'>
                  <img
                    src='/images/smartfow.png'
                    alt='smartfow'
                    width={350}
                    height={100}
                  />
                </SwiperSlide>

                <SwiperSlide className='custom_swiper_size my-6'>
                  <img
                    src='/images/tenecy.png'
                    alt='tenecy'
                    width={200}
                    height={50}
                  />
                </SwiperSlide>

                <SwiperSlide className='custom_swiper_size my-6'>
                  <img
                    src='/images/gtb.png'
                    alt='gtb'
                    width={200}
                    height={50}
                  />
                </SwiperSlide>

                <SwiperSlide className='custom_swiper_size my-6'>
                  <img
                    src='/images/capriconlogo.png'
                    alt='capriconlogo'
                    width={200}
                    height={50}
                  />
                </SwiperSlide>

                <SwiperSlide className='custom_swiper_size my-8 w-[26.25rem]'>
                  <img
                    src='/images/wallx.png'
                    alt='wallx'
                    width={180}
                    height={50}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            {/* //#endregion  //*============== Swiper */}

            {/* //#region  //*============== Transform */}
            <div className='layout mb-20 flex flex-col'>
              <div className='flex flex-row justify-between'>
                <div>
                  <img
                    src='/images/devp6.jpg'
                    width={600}
                    height={400}
                    alt=''
                  />
                </div>

                <div className='my-auto flex flex-col gap-y-4'>
                  <div className='text-3xl font-medium'>
                    Transform Your Life Through Education
                  </div>
                  <div className='text-2xl'>
                    <div>Our wish for you is to learn the necessary skills</div>
                    <div>to accelerate your career as a techie.</div>
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
