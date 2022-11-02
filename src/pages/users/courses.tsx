import React from 'react';

import DashboardLayout from '@/components/layout/Dashboard';
import ButtonLink from '@/components/links/ButtonLink';

export default function Courses() {
    return (
        <DashboardLayout>
            <div className='flex flex-col px-20 mt-20'>
                <div className='text-primary-700 font-header text-3xl'>All Courses</div>


            <div className='flex flex-col mt-10'>
                <div
                    className='relative w-[65%] h-[13.75rem] lg:h-[12.5rem] overflow-hidden rounded-[0.625rem] bg-black'
                >
                    <div className='mx-auto object-cover'>
                        <picture>
                            <source
                                srcSet="/images/courses_1.png"
                                type='image/png'
                                width='100%'
                            />
                            <img
                                src="/images/courses_1.png"
                                alt=''
                                width='100%'
                                className='h-[13.75rem] lg:h-[12.5rem]'
                            />
                        </picture>
                    </div>

                    <div className='absolute inset-x-0 top-[12%] lg:top-[40%] bottom-[33.3%] flex w-full flex-row justify-between px-10 text-white'>
                        <div className='flex lg:w-3/4 flex-col gap-y-[0.825rem] lg:gap-y-4'>
                            <div className='text-[1.25rem] lg:text-2xl font-semibold font-header my-auto'>
                                Introduction to Information/Cyber Security
                            </div>
                            {/* <div className='text-xs lg:text-base'>Learn the fundamental concepts required to recognize typical cyber threats and assaults and to defend yourself.</div> */}
                        </div>
                        <div className='my-auto'>
                            <ButtonLink
                                href='/users/courses'
                                className='rounded-3xl font-light text-black'
                            >
                                Go To Course
                            </ButtonLink>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </DashboardLayout>
    );
}


