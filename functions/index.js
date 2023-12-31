/* eslint-disable camelcase */
/* eslint-disable max-len */
const cors = require("cors")({origin: true});

const functions = require("firebase-functions");

const moment = require("moment");
const commaNumber = require("comma-number");

const {MailtrapClient} = require("mailtrap");
const MAIL_TOKEN = "51651f76f2def2cd4bd12c9645092abb";
const MAIL_ENDPOINT = "https://send.api.mailtrap.io/";

// The Firebase Admin SDK to access Firestore.
// const admin = require("firebase-admin");
// admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendTransactionEmail = functions.https.onRequest(
    (request, response) => {
      cors(request, response, () => {
        // your function body here - use the provided req and res from cors
        const client = new MailtrapClient({
          endpoint: MAIL_ENDPOINT,
          token: MAIL_TOKEN,
        });

        const payment_details = request.body;

        const sender = {
          email: "training@devrecruitschool.com",
          name: "Devrecruit Training",
        };

        const recipients = [
          {
            email: payment_details.customer.email,
          },
        ];

        client
            .send({
              from: sender,
              to: recipients,
              subject: "Payment Confirmation & Registration",
              html: `
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
      
                  .align_right {
                      text-align: right;
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
                            Ref #: ${payment_details.reference}<br />
                            Date: ${moment(payment_details.created_at).format("YYYY-MM-DD")}
                            <br />
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
      
                          <td class="align_right">
                          ${payment_details.customer.name}
                          <br />
                          ${payment_details.customer.email}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
      
                  <br />
                  <br />
      
                  <tr class="heading">
                    <td>
                      Dear  ${payment_details.customer.name},
                    </td>
      
                    <td></td>
                  </tr>
      
                  <tr class="details">
                    <td>
                      <div>Your Registration and Payment for the Cybersecurity Training has been confirmed.</div>
      
                      <div>Please find Payment Details below:</div>
      
                      <br />
      
                      <div>Course: Cybersecurity Training</div>
                      <div>Amount: ₦${commaNumber(payment_details.amount)}</div>
                      <div>Ref Number: ${payment_details.reference}</div>
                      <div>Customer Name: ${payment_details.customer.name}</div>
                      <div>Phone Number: ${payment_details.customer.phone_number}</div>
                      <div>Email: ${payment_details.customer.email}</div>
      
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
      
                    <td>₦${commaNumber(payment_details.amount)}</td>
                  </tr>
      
                  <tr class="total">
                    <td></td>
      
                    <td>Total: ₦${commaNumber(payment_details.amount)}</td>
                  </tr>
                </table>
              </div>
            </body>
        </html>
              `,
              category: "Payment Confirmation & Registration",
            })
            .then((res) => {
              console.log(res);
              response.json({
                sent: true,
                message: `Transaction Email Sent to ${payment_details.customer.email}`,
              });
            })
            .catch((err) => {
              console.error(err);
              response.json({
                sent: false,
                message: `Transaction Email failed to send to ${payment_details.customer.email}`,
              });
            });
      });
    }
);
