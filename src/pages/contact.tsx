import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import Ellipse from '~/svg/Ellipse temp.svg';
import Green_Ellipse_Thin from '~/svg/Green_Ellipse_Thin.svg';
import Message from '~/svg/message.svg';
import Phone from '~/svg/phone.svg';
import Share from '~/svg/share.svg';
import Star from '~/svg/star.svg';

export default function Contact() {
    return (
        <Layout isActive={['Contact']}>
            {/* <Seo templateTitle='Home' /> */}
            <Seo />

            <main className='mt-20'>
                <section className='bg-white'>
                    <div className='flex min-h-screen flex-col'>
                        {/* //#region  //*============== Contact Banner */}
                        <div className='relative'>
                            <div className='mx-auto object-cover'>
                                <picture>
                                    <source
                                        srcSet='/images/getintouch.png'
                                        type='image/png'
                                        width='100%'
                                    />
                                    <img
                                        src='/images/getintouch.png'
                                        alt=''
                                        width='100%'
                                    />
                                </picture>
                            </div>

                            <div className='absolute inset-x-0 top-0 flex w-full my-20 flex-col gap-y-28 text-white'>

                                <div className='my-auto flex flex-col gap-y-4 px-20'>
                                    <div className='text-5xl font-semibold flex flex-col gap-y-4'>
                                        <div>Get In Touch</div>
                                    </div>

                                    <div className=''>
                                        <div>We would love to know how we can</div>
                                        <div>help you better.</div>
                                    </div>
                                </div>

                                <div className='flex flex-row justify-around w-screen mx-auto'>
                                    <div className='flex flex-col bg-white text-black justify-center rounded-[1.875rem] shadow-xl text-center gap-y-10 h-[26.25rem] w-[36.875rem] overflow-hidden'>
                                        <div className='text-3xl font-semibold'>Talk with our Program Manager</div>
                                        <div>
                                            <Phone className='w-10 h-10 mx-auto' />
                                        </div>
                                        <div>
                                            <div>Send an email to the programme</div>
                                            <div>anchor to get course clarity</div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col bg-white text-black justify-center rounded-[1.875rem] shadow-xl text-center gap-y-10 h-[26.25rem] w-[36.875rem] overflow-hidden'>
                                        <div className='text-3xl font-semibold'>Contact Customer Service</div>
                                        <div>
                                            <Message className='w-10 h-10 mx-auto' />
                                        </div>
                                        <div>
                                            <div>Speak with our help center for</div>
                                            <div>any complaint or query</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //#endregion  //*============== Contact Banner */}

                        {/* //#region  //*============== Course Outcome */}
                        <div className='layout mb-20'>
                            <div className='flex flex-col bg-black rounded-[1.25rem] w-full p-20 text-white gap-y-10'>
                                <div className='text-3xl font-semibold'>Send a message</div>

                                <div className='grid grid-cols-2 w-full gap-10'>
                                    <div className='flex flex-col w-full tex-2xl'>
                                        <div>First Name</div>
                                        <div>
                                            <input type='text' className='border-0 border-b border-white bg-black w-full' />
                                        </div>
                                    </div>

                                    <div className='flex flex-col w-full tex-2xl'>
                                        <div>Last Name</div>
                                        <div>
                                            <input type='text' className='border-0 border-b border-white bg-black w-full' />
                                        </div>
                                    </div>

                                    <div className='flex flex-col w-full tex-2xl'>
                                        <div>Phone number</div>
                                        <div>
                                            <input type='text' className='border-0 border-b border-white bg-black w-full' />
                                        </div>
                                    </div>

                                    <div className='flex flex-col w-full tex-2xl'>
                                        <div>Email address</div>
                                        <div>
                                            <input type='text' className='border-0 border-b border-white bg-black w-full' />
                                        </div>
                                    </div>

                                    <div className='flex flex-col w-full tex-2xl col-span-2'>
                                        <div>How can we help you?</div>
                                        <div>
                                            <textarea rows={10} className='border-0 border-b border-white bg-black w-full' />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <Button className='bg-white text-black'>Send Message</Button>
                                </div>
                            </div>
                        </div>
                        {/* //#endregion  //*============== Course Outcome */}
                    </div>
                </section>
            </main>
        </Layout>
    );
}
