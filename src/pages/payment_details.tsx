/* eslint-disable @next/next/no-img-element */
import { MailtrapClient } from 'mailtrap';
import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react';

import { userStore } from '@/store';

import { MAIL_ENDPOINT, MAIL_TOKEN } from '@/constant/env';


export default function Test() {
  const router = useRouter();
  const { payment_details } = userStore();

  if (payment_details?.amount === 0) {
    router.push('/register');
    return <div>Loading...</div>
  }

  const client = new MailtrapClient({ endpoint: MAIL_ENDPOINT, token: MAIL_TOKEN });

  const sender = {
    email: 'training@devrecruitschool.com',
    name: 'Devrecruit Training',
  };

  const recipients = [
    {
      // email: payment_details?.customer.email ? payment_details?.customer.email : 'training@devrecruitschool.com',
      email: 'oyinkansolababatunde30@gmail.com'
    },
  ];

  client
    .send({
      from: sender,
      to: recipients,
      subject: 'Payment Confirmation & Registration',
      html:
        `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">

        <head>
          <title>Devcrecruit Training School Receipt</title>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width" />

          <style type="text/css">
            .invoice_body {
              font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
              text-align: center;
              color: #777;
              margin: 10rem auto;
            }

            .invoice_body h1 {
              font-weight: 300;
              margin-bottom: 0px;
              padding-bottom: 0px;
              color: #000;
            }

            .invoice_body h3 {
              font-weight: 300;
              margin-top: 10px;
              margin-bottom: 20px;
              font-style: italic;
              color: #555;
            }

            .invoice_body a {
              color: #06f;
            }

            .invoice-box {
              max-width: 800px;
              margin: auto;
              padding: 30px;
              border: 1px solid #eee;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
              font-size: 16px;
              line-height: 24px;
              font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
              color: #555;
            }

            .invoice-box table {
              width: 100%;
              line-height: inherit;
              text-align: left;
              border-collapse: collapse;
            }

            .invoice-box table td {
              padding: 5px;
              vertical-align: top;
            }

            .invoice-box table tr td:nth-child(2) {
              text-align: right;
            }

            .invoice-box table tr.top table td {
              padding-bottom: 20px;
            }

            .invoice-box table tr.top table td.title {
              font-size: 45px;
              line-height: 45px;
              color: #333;
            }

            .invoice-box table tr.information table td {
              padding-bottom: 40px;
            }

            .invoice-box table tr.heading td {
              background: #eee;
              border-bottom: 1px solid #ddd;
              font-weight: bold;
            }

            .invoice-box table tr.details td {
              padding-bottom: 20px;
            }

            .invoice-box table tr.item td {
              border-bottom: 1px solid #eee;
            }

            .invoice-box table tr.item.last td {
              border-bottom: none;
            }

            .invoice-box table tr.total td:nth-child(2) {
              border-top: 2px solid #eee;
              font-weight: bold;
            }

            @media only screen and (max-width: 600px) {
              .invoice-box table tr.top table td {
                width: 100%;
                display: block;
                text-align: center;
              }

              .invoice-box table tr.information table td {
                width: 100%;
                display: block;
                text-align: center;
              }
            }
          </style>
        </head>

        <body class='invoice_body'>
        <div class="invoice-box">
          <table>
            <tr class="top">
              <td>
                <table>
                  <tr>
                    <td class="title">
                      <img src="https://devrecruitschool.com/images/logo.png" alt="Devrecruit logo" style="width: 30%; maxWidth: 300px" />
                    </td>
  
                    <td>
                      Ref #: ${payment_details?.reference}<br />
                      Date: ${moment(payment_details?.created_at).format('YYYY-MM-DD')}<br />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
  
            <tr class="information">
              <td>
                <table>
                  <tr>
                    <td>
                      Devrecruit School.<br />
                      21, Ibrahim Nyesi Tella<br />
                      Lekki, Lagos, Nigeria
                    </td>
  
                    <td>
                    ${payment_details?.customer.name}
                    <br />
                    ${payment_details?.customer.email}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <br />
            <br />
  
            <tr class="heading">
              <td>
                Dear  ${payment_details?.customer.name},
              </td>
  
              <td></td>
            </tr>
  
            <tr class="details">
              <td>
                <div>Your Registration and Payment for the Cybersecurity Training has been confirmed.</div>
  
                <div>Please find Payment Details below:</div>
  
                <br />
  
                <div>Course: Cybersecurity Training</div>
                <div>Amount: ₦${payment_details?.amount}</div>
                <div>Ref Number: ${payment_details?.reference}</div>
                <div>Customer Name: ${payment_details?.customer.name}</div>
                <div>Phone Number: ${payment_details?.customer.phone_number}</div>
                <div>Email: ${payment_details?.customer.email}</div>
  
                <br />
  
                <div>
                  Begin your journey into tech. We will communicate and notify you as we progress.
                  Please check your email for any further information, Thank you.
                </div>
  
                <br />
                <div>Regards</div>
  
                <div>Community Manager</div>
                <div>DevRecruit Training School</div>
              </td>
  
              <td></td>
            </tr>

            <br />
  
            <tr class="heading">
              <td>Item</td>
  
              <td>Price</td>
            </tr>
  
            <tr class="item">
              <td>Introduction to Information/Cyber Security</td>
  
              <td>₦15,000.00</td>
            </tr>
  
            <tr class="total">
              <td></td>
  
              <td>Total: ₦15,000.00</td>
            </tr>
          </table>
        </div>
      </body>
  </html>
        `,
      category: 'Payment Confirmation & Registration',
    })
    .then((response) => console.log(response))
    .catch((err) => console.error(err))

  return (
    <body className='invoice_body'>
      <div className="invoice-box">
        <table>
          <tr className="top">
            <td colSpan={2}>
              <table>
                <tr>
                  <td className="title">
                    <img src="./images/logo.png" alt="Devrecruit logo" style={{ "width": '100%', 'maxWidth': '300px' }} />
                  </td>

                  <td>
                    Ref #: {payment_details?.reference}<br />
                    Date: {moment(payment_details?.created_at).format('YYYY-MM-DD')}<br />
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className="information">
            <td colSpan={2}>
              <table>
                <tr>
                  <td>
                    Devrecruit School.<br />
                    21, Ibrahim Nyesi Tella<br />
                    Lekki, Lagos, Nigeria
                  </td>

                  <td>
                    {payment_details?.customer.name}
                    <br />
                    {payment_details?.customer.email}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className="heading">
            <td>
              Dear  {payment_details?.customer.name},
            </td>

            <td></td>
          </tr>

          <tr className="details">
            <td>
              <div>You Registration and Payment for the Cybersecurity Training has be confirmed.</div>

              <div>Please find Payment Details below:</div>

              <br />

              <div>Course: Cybersecurity Training</div>
              <div>Amount: N15,000</div>
              <div>Ref Number: {payment_details?.reference}</div>
              {/* <div>Your Community Manager</div> */}
              <div>Customer Name: {payment_details?.customer.name}</div>
              <div>Phone Number: {payment_details?.customer.phone_number}</div>
              <div>Email: {payment_details?.customer.email}</div>

              <br />

              <div>
                Thank you. Begin your journey into tech. We will communicate and notify you as we progress.
                Please check your email for any further information.
              </div>

              <br />
              <div>Regards</div>

              <div>Community Manager</div>
              <div>DevRecruit Training School</div>
            </td>

            <td></td>
          </tr>

          <tr className="heading">
            <td>Item</td>

            <td>Price</td>
          </tr>

          <tr className="item">
            <td>Introduction to Information/Cyber Security</td>

            <td>₦15,000.00</td>
          </tr>

          <tr className="total">
            <td></td>

            <td>Total: ₦15,000.00</td>
          </tr>
        </table>
      </div>
    </body>
  )
}
