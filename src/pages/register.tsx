
import Button from '@/components/buttons/Button'
import Layout from '@/components/layout/Layout'
import ArrowLink from '@/components/links/ArrowLink'
import UnstyledLink from '@/components/links/UnstyledLink'
import NextImage from '@/components/NextImage'
import Seo from '@/components/Seo'

export default function Register() {
    return (
        <>
            <Seo />

            <main className=''>
                <div className='flex flex-row'>
                    <div className='w-3/5 py-[3.75rem] px-[6.25rem]'>
                        <div className='flex flex-col gap-y-[1.875rem]'>
                            <div className='flex flex-row justify-between w-[41.375rem]'>
                                <div className='text-3xl font-semibold text-primary my-auto'>Sign up</div>
                                <div className='my-auto'>
                                    <ArrowLink
                                        as={UnstyledLink}
                                        className='inline-flex items-center my-auto'
                                        href='/login'
                                    >
                                        Already on DevTraining? Log in
                                    </ArrowLink>
                                </div>
                            </div>

                            <div className='text-gray-400 mt-[1.5625rem]'>Personal Information</div>

                            <div className='flex flex-col gap-y-[0.625rem]'>
                                <div className='text-2xl'>Full Name</div>
                                <div>
                                    <input type='text' className='rounded-[0.625rem] w-[41.375rem] h-[4.875rem] px-4 py-5 border border-[#333]' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-[0.625rem]'>
                                <div className='text-2xl'>Email</div>
                                <div>
                                    <input type='email' className='rounded-[0.625rem] w-[41.375rem] h-[4.875rem] px-4 py-5 border border-[#333]' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-[0.625rem]'>
                                <div className='text-2xl'>Phone Number</div>
                                <div>
                                    <input type='text' className='rounded-[0.625rem] w-[41.375rem] h-[4.875rem] px-4 py-5 border border-[#333]' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-[0.625rem]'>
                                <div className='text-2xl'>Gender</div>
                                <div>
                                    <input type='text' className='rounded-[0.625rem] w-[41.375rem] h-[4.875rem] px-4 py-5 border border-[#333]' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-[0.625rem]'>
                                <div className='text-2xl'>Country</div>
                                <div>
                                    <input type='text' className='rounded-[0.625rem] w-[41.375rem] h-[4.875rem] px-4 py-5 border border-[#333]' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-[0.625rem]'>
                                <div className='text-2xl'>Password</div>
                                <div>
                                    <input type='password' className='rounded-[0.625rem] w-[41.375rem] h-[4.875rem] px-4 py-5 border border-[#333]' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-[0.625rem]'>
                                <div className='text-2xl'>Confirm Password</div>
                                <div>
                                    <input type='password' className='rounded-[0.625rem] w-[41.375rem] h-[4.875rem] px-4 py-5 border border-[#333]' />
                                </div>
                            </div>

                            <div className='flex flex-row gap-x-10 mt-[0.8125rem] mb-[1.25rem]'>
                                <div className='my-auto'>
                                    <input className='rounded-md p-3' type="checkbox" name="" id="" />
                                </div>

                                <div className='my-auto'>
                                    I accept DevTraining&apos;s Terms of Use and Privacy Notice.
                                </div>
                            </div>

                            <div>
                                <Button className='text-black w-[41.375rem] h-[4.1875rem] text-2xl'>
                                    <div className='mx-auto'>Proceed to Pay</div>
                                </Button>
                            </div>
                        </div>
                    </div>


                    <div className='w-2/5 bg-primary-100 px-10 py-[10rem]'>
                        <div className='flex flex-col'>
                            {/* <NextImage className='mx-auto' src='/images/device-frame.png' width={250} height={500} alt='' /> */}
                            <picture>
                                <source
                                    srcSet='/images/device-frame.png'
                                    type='image/png'
                                />
                                <img
                                    src='/images/device-frame.png'
                                    alt=''
                                    className='m-auto'
                                />
                            </picture>

                            <div className='flex flex-col leading-[1.7025rem] text-center mt-[5.1875rem] text-xl h-[5.8125rem]'>
                                <div>By signing up you will earn an introductory certificate in</div>
                                <div>Cyber security. Join the DevRecruit training school</div>
                                <div>to build industry demand technological skill set.</div>
                            </div>

                            <div className='w-2/3 mx-auto mt-[0.4375rem] mb-[2.125rem] h-px bg-primary-800'></div>

                            <div className='grid grid-cols-2 gap-y-2 gap-x-20 px-20 mx-auto'>
                                <div className='flex flex-row gap-x-2'>
                                    <div>»</div>
                                    <div>24 Modules</div>
                                </div>

                                <div className='flex flex-row gap-x-2'>
                                    <div>»</div>
                                    <div>Full Time Access</div>
                                </div>

                                <div className='flex flex-row gap-x-2'>
                                    <div>»</div>
                                    <div>12 Exercises</div>
                                </div>

                                <div className='flex flex-row gap-x-2'>
                                    <div>»</div>
                                    <div>Certificate</div>
                                </div>

                                <div className='flex flex-row gap-x-2'>
                                    <div>»</div>
                                    <div>20 Resources</div>
                                </div>

                            </div>

                            <div className='text-center mt-[16rem]'>
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
                </div>
            </main>
        </>

    )
}
