import React from 'react'

import Button from '@/components/buttons/Button'
import { FaqCard } from '@/components/cards'
import Layout from '@/components/layout/Layout'
import ArrowLink from '@/components/links/ArrowLink'
import UnstyledLink from '@/components/links/UnstyledLink'
import NextImage from '@/components/NextImage'
import Seo from '@/components/Seo'

export default function Faq() {
    const faqs = [
        {
            title: 'What will the training be like?',
            body: 'Participants will take online classes and then participate in live online sessions using smartphones, computers, and other devices.'
        },
        {
            title: 'How will talents get on the training?',
            body: 'Participants will take online classes and then participate in live online sessions using smartphones, computers, and other devices.'
        },
        {
            title: 'Is the training free?',
            body: 'Participants will take online classes and then participate in live online sessions using smartphones, computers, and other devices.'
        },
        {
            title: 'Who can sign up for this training?',
            body: 'Participants will take online classes and then participate in live online sessions using smartphones, computers, and other devices.'
        },
        {
            title: 'What do participants stand to gain from this training?',
            body: 'Participants will take online classes and then participate in live online sessions using smartphones, computers, and other devices.'
        },
        {
            title: 'Is the training only going to be recorded?',
            body: 'Participants will take online classes and then participate in live online sessions using smartphones, computers, and other devices.'
        },
        {
            title: 'Will you be able to find work after completing this introductory course?',
            body: 'Participants will take online classes and then participate in live online sessions using smartphones, computers, and other devices.'
        },
        {
            title: 'Is the cyber security course going to be challenging?',
            body: 'Participants will take online classes and then participate in live online sessions using smartphones, computers, and other devices.'
        },
        {
            title: 'How often will DevRecruit be conducting cybersecurity training?',
            body: 'Participants will take online classes and then participate in live online sessions using smartphones, computers, and other devices.'
        },
        {
            title: 'Who are the instructors for this training?',
            body: 'Participants will take online classes and then participate in live online sessions using smartphones, computers, and other devices.'
        },
    ]
    return (
        <Layout>
            {/* <Seo templateTitle='Home' /> */}
            <Seo />

            <main className='my-20'>
                <div className='flex flex-row'>
                    {/* //#region  //*============== Data region */}
                    <div className='w-3/5 py-10 px-20'>
                        <div className='flex flex-col gap-y-10'>
                            {faqs.map((faq, i) => (
                                <React.Fragment key={i}>
                                    <FaqCard id={String(i + 1)} title={faq.title} body={faq.body} />
                                </React.Fragment>
                            ))}
                        </div>

                        <div className='flex flex-col gap-y-4 mt-10'>
                            <div>Can&apos;t find an answer to your question?</div>

                            <div>
                                <Button>Send Message</Button>
                            </div>
                        </div>
                    </div>
                    {/* //#endregion  //*============== Data region */}


                    {/* //#region  //*============== Content region */}
                    <div className='w-2/5 bg-primary-100 p-10'>
                        <div className='flex flex-col gap-y-10'>
                            <NextImage className='mx-auto' src='/images/device-frame.png' width={250} height={500} alt='' />
                        </div>

                    </div>
                    {/* //#endregion  //*============== Content region */}
                </div>
            </main>
        </Layout >
    )
}
