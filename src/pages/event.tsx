import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink'
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
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
                                {Array(3).fill(5).map((i) => (
                                    <div key={i} className='rounded-[0.625rem] bg-black relative h-[18.75rem] overflow-hidden' id='event'>
                                        <div className='absolute inset-x-0 top-[23.3%] bottom-[33.3%] flex w-full px-10 flex-row justify-between text-white'>
                                            <div className='flex flex-row gap-x-10'>
                                                <div className='flex flex-row text-gray-400 gap-x-2'>
                                                    <div className='text-7xl'>31</div>
                                                    <div className='text-lg translate-y-1/3'>Aug</div>
                                                </div>

                                                <div className='flex flex-col w-3/4 gap-y-4'>
                                                    <div className='text-3xl font-semibold'>Cybersecurity Live Class</div>
                                                    <div>
                                                        Due to the abundance of sensitive information online, businesses require cybersecurity experts to safeguard it. Anyone interested in cybersecurity
                                                        but is unsure of where to begin should take this course.
                                                    </div>

                                                    <div className='my-auto'>
                                                        <Button className='rounded-[1.25rem] px-8 py-3 font-light text-black'>Register</Button>
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
                        <div className='layout my-20 flex flex-row justify-between px-20'>
                            <div className='my-auto flex flex-col gap-y-4'>
                                <div className='text-3xl'>Prepare Yourself For The Future</div>
                                <div className='w-1/2 text-lg'>
                                    With the DevRecruit e-learning and coaching school, you can
                                    improve your abilities and prepare for that dream IT job.
                                </div>
                            </div>

                            <div className='my-auto'>
                                <NextImage src='/images/apply.png' alt='' width={480} height={300} />
                            </div>
                        </div>
                        {/* //#endregion  //*============== Prepare */}

                        {/* //#region  //*============== Invest */}
                        <div className='layout relative mb-10'>
                            <div className='mx-auto object-cover'>
                                <picture>
                                    <source
                                        srcSet='/images/investing.jpg'
                                        type='image/png'
                                    />
                                    <img
                                        src='/images/investing.jpg'
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
