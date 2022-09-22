import React from 'react'

import Button from '@/components/buttons/Button'
import Layout from '@/components/layout/Layout'
import ArrowLink from '@/components/links/ArrowLink'
import UnstyledLink from '@/components/links/UnstyledLink'
import NextImage from '@/components/NextImage'
import Seo from '@/components/Seo'

export default function Login() {
    return (
        <Layout>
            {/* <Seo templateTitle='Home' /> */}
            <Seo />

            <main className='my-20'>
                <div className='flex flex-row'>
                    {/* //#region  //*============== Form region */}
                    <div className='w-3/5 py-10 px-20'>
                        <div className='flex flex-col gap-y-10'>
                            <div className='flex flex-row justify-between'>
                                <div className='text-3xl font-semibold text-primary my-auto'>Login</div>
                                <div>
                                    <ArrowLink
                                        as={UnstyledLink}
                                        className='inline-flex items-center my-auto'
                                        href='/'
                                    >
                                        New to DevTraining? Log in
                                    </ArrowLink>
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-4'>
                                <div className='text-2xl'>Email</div>
                                <div>
                                    <input type='email' className='rounded-2xl w-2/3 px-4 py-5 border border-primary' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-4'>
                                <div className='text-2xl'>Password</div>
                                <div>
                                    <input type='password' className='rounded-2xl w-2/3 px-4 py-5 border border-primary' />
                                </div>
                            </div>

                            <div>
                                <Button className='text-black w-2/3'>
                                    <div className='mx-auto'>Log In</div>
                                </Button>
                            </div>

                            <div className='flex flex-row w-2/3 gap-x-4'>
                                <div className='w-1/3 h-px bg-black my-auto'></div>
                                <div className='my-auto'>Or</div>
                                <div className='w-1/3 h-px bg-black my-auto'></div>
                            </div>

                            <div className='flex flex-row gap-x-10'>
                                <div>
                                    <Button className='bg-white border border-black text-black hover:text-black py-4'>
                                        <div className='flex flex-row gap-x-4'>
                                            <div>G</div>
                                            <div>Continue with Google</div>
                                        </div>
                                    </Button>
                                </div>

                                <div>
                                    <Button className='bg-white border border-black text-black hover:text-black py-4'>
                                        <div className='flex flex-row gap-x-4'>
                                            <div>A</div>
                                            <div>Continue with Apple ID</div>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //#endregion  //*============== Form region */}

                    {/* //#region  //*============== Content region */}
                    <div className='w-2/5 bg-primary-100 p-10'>
                        <div className='flex flex-col gap-y-10'>
                            <NextImage className='mx-auto' src='/images/device-frame.png' width={250} height={500} alt='' />

                            <div className='text-center'>
                                <ArrowLink
                                    as={UnstyledLink}
                                    className='inline-flex items-center my-auto'
                                    href='/'
                                >
                                    Having trouble logging in? Learner help center
                                </ArrowLink>
                            </div>
                        </div>

                    </div>
                    {/* //#endregion  //*============== Content region */}
                </div>
            </main>
        </Layout>
    )
}
