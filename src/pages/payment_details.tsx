/* eslint-disable @next/next/no-img-element */
import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react';

import Header from '@/components/layout/Header';

import { userStore } from '@/store';


export default function Test() {
  const router = useRouter();
  const { payment_details } = userStore();

  if (payment_details?.amount === 0) {
    router.push('/register');
    return <div>Loading...</div>
  }

  return (
    <>
    <Header isActive={undefined} />
    
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
              <div>Amount: ₦15,000</div>
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
    </>
  )
}
