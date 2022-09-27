import React from 'react'

import Button from '@/components/buttons/Button'
import Layout from '@/components/layout/Layout'
import ArrowLink from '@/components/links/ArrowLink'
import UnstyledLink from '@/components/links/UnstyledLink'
import NextImage from '@/components/NextImage'
import Seo from '@/components/Seo'

import Apple from '~/svg/apple.svg';
import Google from '~/svg/google.svg';

export default function Login() {
    return (
        <>
            {/* <Seo templateTitle='Home' /> */}
            <Seo />

            <main className=''>
                <div className='flex flex-row h-screen'>
                    {/* //#region  //*============== Form region */}
                    <div className='w-3/5 py-40 px-[6.25rem]'>
                        <div className='flex flex-col gap-y-[1.875rem]'>
                            <div className='flex flex-row justify-between w-[41.375rem]'>
                                <div className='text-3xl font-semibold text-primary my-auto'>Login</div>
                                <div className='my-auto'>
                                    <ArrowLink
                                        as={UnstyledLink}
                                        className='inline-flex items-center my-auto'
                                        href='/register'
                                    >
                                        New to DevTraining? Register
                                    </ArrowLink>
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-[0.625rem]'>
                                <div className='text-2xl'>Email</div>
                                <div>
                                    <input type='email' className='rounded-[0.625rem] w-[41.375rem] h-[4.875rem] px-4 py-5 border border-[#333]' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-[0.625rem]'>
                                <div className='text-2xl'>Password</div>
                                <div>
                                    <input type='password' className='rounded-[0.625rem] w-[41.375rem] h-[4.875rem] px-4 py-5 border border-[#333]' />
                                </div>
                            </div>

                            <div>
                                <Button className='text-black w-[41.375rem]'>
                                    <div className='mx-auto'>Log In</div>
                                </Button>
                            </div>

                            <div className='flex flex-row w-[41.375rem] gap-x-4 justify-center'>
                                <div className='w-full h-[0.5px] bg-[#333] my-auto'></div>
                                <div className='my-auto text-2xl'>Or</div>
                                <div className='w-full h-[0.5px] bg-[#333] my-auto'></div>
                            </div>

                            <div className='flex flex-row gap-x-10 w-[41.375rem]'>
                                <div>
                                    <Button className='bg-white border border-black text-black hover:text-black w-[19.375rem] h-[4.875rem] rounded-[0.625rem]'>
                                        <div className='flex flex-row gap-x-4 m-auto'>
                                            <div>
                                                <Google className='w-[1.5075rem] h-[1.538125rem]' />
                                            </div>
                                            <div>Continue with Google</div>
                                        </div>
                                    </Button>
                                </div>

                                <div>
                                    <Button className='bg-white border border-black text-black hover:text-black w-[19.375rem] h-[4.875rem] rounded-[0.625rem]'>
                                        <div className='flex flex-row gap-x-4 m-auto'>
                                            <div>
                                                <Apple className='w-[1.5075rem] h-[1.538125rem]' />
                                            </div>
                                            <div>Continue with Apple ID</div>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //#endregion  //*============== Form region */}

                    {/* //#region  //*============== Content region */}
                    <div className='w-2/5 bg-primary-100 py-40 px-10'>
                        <div className='flex flex-col gap-y-10'>
                            {/* <NextImage className='mx-auto w-[16.39625rem] h-[33rem]' src='/images/device-frame.png' width={0} height={0} alt='' /> */}

                            <picture>
                                <source
                                    srcSet='/images/device-frame.png'
                                    type='image/png'
                                />
                                <img
                                    src='/images/device-frame.png'
                                    alt=''
                                    className='m-auto -mt-6'
                                />
                            </picture>
                            <div className='text-center'>
                                <ArrowLink
                                    as={UnstyledLink}
                                    className='inline-flex items-center my-auto'
                                    href='/contact'
                                >
                                    Having trouble logging in? Learner help center
                                </ArrowLink>
                            </div>
                        </div>

                    </div>
                    {/* //#endregion  //*============== Content region */}
                </div>
            </main>
        </>
    )
}
