import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import Ellipse from '~/svg/Ellipse temp.svg';
import Green_Ellipse_Thin from '~/svg/Green_Ellipse_Thin.svg';
import Share from '~/svg/share.svg';
import Star from '~/svg/star.svg';

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
                                    <img
                                        src='/images/enroll4.png'
                                        alt=''
                                        width='100%'
                                    />
                                </picture>
                            </div>

                            <div className='absolute inset-x-0 top-0 flex w-full translate-y-1/2 flex-row justify-center text-center text-white'>

                                <div className='my-auto flex flex-col gap-y-10 px-20 mt-10 justify-center'>
                                    <div className='text-5xl font-semibold flex flex-col gap-y-4 text-primary-500'>
                                        <div>Make an Impact in the</div>
                                        <div>Tech Eco-system</div>
                                    </div>

                                    <div className='text-2xl'>
                                        <div>Start learning to put yourself on the right track for</div>
                                        <div>a seat at the table of Africa&apos;s technology experts.</div>
                                    </div>

                                    <div>
                                        <Button className='rounded-[1.25rem] px-6 py-3 text-black'>Enroll Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //#endregion  //*============== Enrollment Banner */}

                        {/* //#region  //*============== Specialised Courses */}
                        <div className='flex flex-col my-20 gap-y-14 layout'>
                            <div className='text-3xl font-semibold'>Explore Our Specialized Courses</div>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                                <div className='relative cursor-default'>
                                    <NextImage className='mx-auto object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' src='/images/Vector1.png' alt='' width={250} height={250} />

                                    <div className='text-gray-200 hover:text-white absolute inset-x-0 top-[23%] flex w-full translate-y-1/2 flex-row justify-center text-center'>
                                        <div className='text-3xl font-bold'>
                                            <div>IT Business</div>
                                            <div>Analysis</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='relative cursor-default'>
                                    <NextImage className='mx-auto object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' src='/images/Vector3.png' alt='' width={250} height={250} />

                                    <div className='text-gray-200 hover:text-white absolute inset-x-0 top-[33%] flex w-full translate-y-1/2 flex-row justify-center text-center'>
                                        <div className='text-3xl font-bold'>Frontend</div>
                                    </div>
                                </div>

                                <div className='relative cursor-default'>
                                    <NextImage className='mx-auto object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' src='/images/Vecto3r3.png' alt='' width={250} height={250} />

                                    <div className='text-gray-200 hover:text-white absolute inset-x-0 top-[33%] flex w-full translate-y-1/2 flex-row justify-center text-center'>
                                        <div className='text-3xl font-bold'>Cyber Security</div>
                                    </div>
                                </div>

                                <div className='relative cursor-default'>
                                    <NextImage className='mx-auto object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' src='/images/Vect3or.png' alt='' width={250} height={250} />

                                    <div className='text-gray-200 hover:text-white absolute inset-x-0 top-[23%] flex w-full translate-y-1/2 flex-row justify-center text-center'>
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
                        <div className='flex flex-col layout gap-y-6 my-6'>
                            <div className='text-3xl font-semibold'>
                                <div>Obtain a physical and electronic certification that</div>
                                <div>can be share on social media, and among your</div>
                                <div>networks to get your foot in the tech space.</div>
                            </div>

                            <div>
                                <div>You can share your Certificate in the Certifications section of your</div>
                                <div>LinkedIn profile, on printed resumes, CVs, or other documents.</div>
                            </div>

                            <div className='flex flex-row mt-6'>
                                <div>
                                    <NextImage src='/images/suit.png' alt='' width={750} height={500} />
                                </div>

                                <div className='flex flex-col gap-y-4 lg:gap-y-10 bg-primary-800 text-white p-4 lg:p-10 min-w-[35rem] w-[44.5rem] h-[20.5rem] my-auto -ml-20 z-20 overflow-hidden'>
                                    <div className='text-2xl'>
                                        Cybersecurity is a rapidly growing discipline that identifies the security risks associated with our increasingly networked digital world.
                                        Join the others to learn more on how to become an expert in technology security.
                                    </div>

                                    <div>
                                        <Button className='rounded-[1.25rem] px-6 py-3 text-black bg-white'>Enroll Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //#endregion  //*============== Course Module */}

                        {/* //#region  //*============== Admission Process */}
                        <div className='layout mt-20 flex flex-row justify-between px-20'>
                            <div className='my-auto flex flex-col gap-y-14 mt-14'>
                                <div className='text-3xl font-medium'>
                                    How the Admission Process Works
                                </div>

                                <div className='flex flex-col gap-y-16'>
                                    <div className='flex flex-row gap-x-6'>
                                        <div className='text-[4.38rem] font-bold text-[#DDD] my-auto'>
                                            1
                                        </div>
                                        <div className='text-2xl'>
                                            <div>Fill and submit the application form</div>
                                        </div>
                                    </div>

                                    <div className='flex flex-row gap-x-6'>
                                        <div className='text-[4.38rem] font-bold text-[#DDD] my-auto'>
                                            2
                                        </div>
                                        <div className='text-2xl'>
                                            <div>Pay the required registration fee</div>
                                        </div>
                                    </div>

                                    <div className='flex flex-row gap-x-6'>
                                        <div className='text-[4.38rem] font-bold text-[#DDD] my-auto'>
                                            3
                                        </div>
                                        <div className='text-2xl'>
                                            <div>Complete enrolment and start taking classes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='translate-y-1/'>
                                <NextImage src='/images/enroll2.png' width={650} height={400} alt='' />
                            </div>
                        </div>
                        {/* //#endregion  //*============== Admission Process */}

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
                                        alt=''
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
