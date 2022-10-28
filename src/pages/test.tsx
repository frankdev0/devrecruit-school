import { MAIL_ENDPOINT, MAIL_TOKEN } from '@/constant/env';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { MailtrapClient } from 'mailtrap';
import React, { useEffect } from 'react';

export default function Test() {


  // const client = new MailtrapClient({ endpoint: MAIL_ENDPOINT, token: MAIL_TOKEN });

  // const sender = {
  //   email: 'training@devrecruitschool.com',
  //   name: 'Mailtrap Test',
  // };
  // const recipients = [
  //   {
  //     email: 'oyinkansolababatunde30@gmail.com',
  //   },
  // ];

  // client
  //   .send({
  //     from: sender,
  //     to: recipients,
  //     subject: 'You are awesome * 100000!',
  //     text: 'Congrats for sending test email with Mailtrap!',
  //     category: 'Integration Test',
  //   })
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err))



  return <div>test</div>;
}
