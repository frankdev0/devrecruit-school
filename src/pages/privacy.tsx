import React, { useState } from 'react'

import Button from '@/components/buttons/Button'
import { PrivacyCard } from '@/components/cards'
import Layout from '@/components/layout/Layout'
import Seo from '@/components/Seo'

export default function Privacy() {
    const [agree, setAgree] = useState(false)

    const content = [
        {
            title: 'Introduction',
            body: `This policy is intended to provide you with an overview of how we gather, store, and use the data of our users. 
            We will explain in detail how we make use of the data we collect in this policy.
            This Policy shall be carried out following all applicable laws, policies, and regulations, as they may be changed 
            from time to time. This Policy's rules and administrative procedures are subject to modification 
            and will be updated as necessary to reflect any changes.
            `
        },
        {
            title: 'The Data We Collect ',
            body: `We will request the following information from the "user" or "visitor" after registration and payment on this site, in no particular order.`,
            bullets: ['Email', 'Mobile number', 'Full name', 'Credit/debit card details']
        },
        {
            title: 'Why We Collect the Information',
            body: `We consider this information to be a constitutional requirement for the activity you will perform on the site. 
            This data includes, but is not limited to, the items listed in section A. This activity is contingent on you 
            registering for and paying for the course, tutorial, certification, and so on.`
        },
        {
            title: 'How We Collect the Information',
            body: `Your data would be collected during your first course registration on the web page registration portal. 
            This will provide the company with the comprehensive information it requires and 
            will allow us to properly protect your information.`
        },
        {
            title: 'Use of Data and Third-Party Access',
            body: `We take great care to ensure that your information is not and cannot be obtained by any third party. 
            We have put safeguards in place to ensure that this does not happen. 
            
            In addition, we gather information as part of the process to help you customize your learning experience, 
            and we send you updates on training programs and syllabus details on any new developments.
            Moreover, we will keep data for as long as the user interacts with the company in any way. 
            This information will only be accessed by company-appointed personnel and used when necessary.
            `
        },
        {
            title: 'Privacy Policy Update ',
            body: `There may be an update on data collection or policy improvements in the coming months. If this happens, 
            you will be notified via email of the update and will be recommended to read the new policy.
            
            Also, if we need to use users' data because of this update, we will provide a clear reason to the user 
            and ensure that we continue to analyze data.
            We will always seek your permission before going 
            ahead with any use of your data.
            `
        },
        {
            title: 'How We Protect Your User Information',
            body: `We do not want hackers to steal or steal data your data, so we encrypt all details you 
            will provide on a different server backup.`
        },
    ]
    return (
        <Layout>
            {/* <Seo templateTitle='Home' /> */}
            <Seo />

            <main className='my-20'>
                <div className='text-[3.125rem] font-semibold pl-20 mt-10'>DevRecruit Training Privacy Policy</div>

                <div className='flex flex-row'>
                    {/* //#region  //*============== Data region */}
                    <div className='py-10 pl-20 pr-72'>
                        <div className='flex flex-col gap-y-10'>
                            {content.map((p, i) => (
                                <React.Fragment key={i}>
                                    <PrivacyCard id={String(i + 1)} title={p.title} body={p.body} bullets={p.bullets} />
                                </React.Fragment>
                            ))}
                        </div>

                        <div className='flex flex-col mt-20 gap-y-6'>
                            <div className='flex flex-row gap-x-6'>
                                <div className='my-auto'>
                                    <input checked={agree} onChange={(e) => setAgree(e.target.checked)} type="checkbox" name="" id="" />
                                </div>
                                <div className='my-auto'>I accept DevTraining&apos;s Terms of Use and Privacy Notice. </div>
                            </div>

                            <div>
                                <Button className='w-1/3' disabled={agree === false}>
                                    <div className='mx-auto'>I Agree</div>
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* //#endregion  //*============== Data region */}
                </div>
            </main>
        </Layout >
    )
}
