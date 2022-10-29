import { MailtrapClient } from 'mailtrap';
import React from 'react';

import { MAIL_ENDPOINT, MAIL_TOKEN } from '@/constant/env';

export default function Test() {


  const client = new MailtrapClient({ endpoint: MAIL_ENDPOINT, token: MAIL_TOKEN });

  const sender = {
    email: 'training@devrecruitschool.com',
    name: 'Devrecruit Training',
  };
  const recipients = [
    {
      email: 'oyinkansolababatunde30@gmail.com',
    },
  ];

  client
    .send({
      from: sender,
      to: recipients,
      subject: 'Payment Confirmation & Registration',
      text: `
      Dear name
      
      Your Registration Payment for Cyber security 
      Introductory Course has been received and 
      confirmed for processing.
      
      Kindly find below the link to complete your
      Registration on the Learning Management System.
      
      *Link*____________
      

      Payment Reference: ref

    Regards
      
    (*Community Manager*)
    DevRecruit Training School.
      `,
      category: 'Payment Confirmation & Registration',
    })
    .then((response) => console.log(response))
    .catch((err) => console.error(err))



  return <div>test</div>;
}
