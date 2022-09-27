
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
                    <div className='w-3/5 py-10 px-20'>
                        <div className='flex flex-col gap-y-10'>
                            <div className='flex flex-row justify-between'>
                                <div className='text-3xl font-semibold text-primary my-auto'>Sign up</div>
                                <div>
                                    <ArrowLink
                                        as={UnstyledLink}
                                        className='inline-flex items-center my-auto'
                                        href='/login'
                                    >
                                        Already on DevTraining? Log in
                                    </ArrowLink>
                                </div>
                            </div>

                            <div className='text-gray-400'>Personal Information</div>

                            <div className='flex flex-col gap-y-4'>
                                <div className='text-2xl'>Full Name</div>
                                <div>
                                    <input type='text' className='rounded-2xl w-2/3 px-4 py-5 border border-primary' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-4'>
                                <div className='text-2xl'>Email</div>
                                <div>
                                    <input type='email' className='rounded-2xl w-2/3 px-4 py-5 border border-primary' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-4'>
                                <div className='text-2xl'>Phone Number</div>
                                <div>
                                    <input type='text' className='rounded-2xl w-2/3 px-4 py-5 border border-primary' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-4'>
                                <div className='text-2xl'>Gender</div>
                                <div>
                                    <input type='text' className='rounded-2xl w-2/3 px-4 py-5 border border-primary' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-4'>
                                <div className='text-2xl'>Country</div>
                                <div>
                                    <input type='text' className='rounded-2xl w-2/3 px-4 py-5 border border-primary' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-4'>
                                <div className='text-2xl'>Password</div>
                                <div>
                                    <input type='password' className='rounded-2xl w-2/3 px-4 py-5 border border-primary' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-4'>
                                <div className='text-2xl'>Confirm Password</div>
                                <div>
                                    <input type='password' className='rounded-2xl w-2/3 px-4 py-5 border border-primary' />
                                </div>
                            </div>

                            <div className='flex flex-row gap-x-10'>
                                <div className='my-auto'>
                                    <input className='rounded-md p-3' type="checkbox" name="" id="" />
                                </div>

                                <div className='my-auto'>
                                    I accept DevTraining&apos;s Terms of Use and Privacy Notice.
                                </div>
                            </div>

                            <div>
                                <Button className='text-black w-2/3'>
                                    <div className='mx-auto'>Proceed to Pay</div>
                                </Button>
                            </div>
                        </div>
                    </div>


                    <div className='w-2/5 bg-primary-100 p-10'>
                        <div className='flex flex-col gap-y-10'>
                            <NextImage className='mx-auto' src='/images/device-frame.png' width={250} height={500} alt='' />

                            <div className='flex flex-col leading-7 text-center'>
                                <div>By signing up you will earn an introductory certificate in</div>
                                <div>Cyber security. Join the DevRecruit training school</div>
                                <div>to build industry demand technological skill set.</div>
                            </div>

                            <div className='w-2/3 mx-auto -mt-6 h-px bg-primary-800'></div>

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
                </div>
            </main>
        </>

    )
}
