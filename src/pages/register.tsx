// eslint-disable-next-line simple-import-sort/imports
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from 'init_firebase';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import uniqid from 'uniqid';

import Button from '@/components/buttons/Button';
import Header from '@/components/layout/Header';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import { sendTransactionalMail } from '@/modules';
import { MAIL_ENDPOINT, MAIL_TOKEN } from '@/constant/env';
import { MailtrapClient } from 'mailtrap';

export default function Register() {
  const [page, setPage] = useState(0);
  const [accept, setAccept] = useState(false);
  // const certificate = useRef(false);
  const [certificate, setCertificate] = useState(false);

  const client = new MailtrapClient({
    endpoint: MAIL_ENDPOINT,
    token: MAIL_TOKEN,
  });

  const sender = {
    email: 'training@devrecruitschool.com',
    name: 'Devrecruit Training',
  };

  const [userData, setUserData] = useState<any>({
    full_name: '',
    email: '',
    country: "",
    gender: "",
    phone: "",
    fun: '',
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  if (router.query.status) {
    const id = toast.loading('Processing Payment...');

    if (router.query.status === 'success') {
      fetch(
        `https://portal.blacbox.app/v1/api/payment/verify/${router.query.reference}/`,
        {
          headers: {
            Authorization:
              'Bearer dc_test_2832868d2e9528e2c6eed55f56ff6790df2f68ab',
          },
        }
      )
        .then((res) => res.json())
        .then(async (response) => {
          // console.log(response);
          if (response.status) {
            const email = response.data.customer.email;
            const amount = response.data.amount;
            const name = response.data.customer.name;
            const ref = response.data.reference;

            toast.update(id, { render: "Payment completed Successfully!", type: "success", isLoading: false, autoClose: 3000 })
            await sendTransactionalMail('oyinkansolababatunde30@gmail.com', amount, name, ref)

            const recipients = [
              {
                email: 'oyinkansolababatunde30@gmail.com',
              },
            ];
          
            await client
              .send({
                from: sender,
                to: recipients,
                subject: `Payment Confirmation & Registration`,
                text: `
                Dear ${name}
                
                Your Registration Payment for Cyber security Introductory Course has been received and confirmed for processing.
                
                Kindly find below the link to complete your Registration on the Learning Management System.
                
                 *Link*____________
                
          
                 Payment Reference: ${ref}
          
                Regards
                
                (*Community Manager*)
                DevRecruit Training School.
                `,
                category: 'Payment Confirmation & Registration',
              })
              .then((response) => {
                console.log(response)
                // return response
              })
              .catch((err) => {
                console.error(err)
                // return err;
              });

            // .then(async() => {
              const user = query(
                collection(db, 'users'),
                where('email', '==', email)
              );
  
              const querySnapshot = await getDocs(user);
              querySnapshot.forEach(async (d) => {
                // d.data() is never undefined for query d snapshots
                const usersRef = doc(db, 'users', d.id);
  
                await updateDoc(usersRef, {
                  paid: true,
                  payment_details: response.data,
                }).then(() => {
                  toast.info('Redirecting to login.');
                  // setTimeout(() => {
                  //   router.push('/login');
                  // }, 3000);
                });
              });
            // })
            
          }
        })
        .catch((error) => console.log(error));
    } else {
      toast.update(id, { render: "Payment failed!", type: "error", isLoading: false, autoClose: 3000 })

      const notice = toast.loading('Running checks');
      toast.update(notice, { render: "Login to complete payment | Redirecting to login", type: "error", isLoading: false, autoClose: 3000 })

      setTimeout(() => {
        router.push('/login');
      }, 3000);
    }
  }

  const onSubmit = async (data: { [key: string]: any }) => {
    if (data.password.length < 8 || data.confirm_password.length < 8) {
      toast.error('Password must be at least 8 characters!');
      return;
    }

    if (data.password !== data.confirm_password) {
      toast.error('Enter Matching Passwords!');
      return;
    }

    data.custom_id = uniqid.time('DRS-');

    const id = toast.loading('Processing...');

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        data.uid = user.uid;
        data.type = 'user';
        data.paid = false;

        //* Remove passwords before storing data in firestore
        delete data.password
        delete data.confirm_password

        toast.update(id, { render: "Account created successfully", type: "success", isLoading: false, autoClose: 3000 })

        try {
          await addDoc(collection(db, 'users'), data);
        } catch (e: any) {
          toast.update(id, { render: e.code || 'Error adding User Biodata', type: "error", isLoading: false, autoClose: 3000 })
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
      });

    setUserData(data);
    setPage(1);
    window.scrollTo(0, 0);
  };

  const handlePayment = async () => {
    // data: { [key: string]: string } //Type formerly declared in arguments.

    const data = userData;

    fetch(`https://portal.blacbox.app/v1/api/payment/initialize/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer dc_test_2832868d2e9528e2c6eed55f56ff6790df2f68ab',
        // dc_test_2832868d2e9528e2c6eed55f56ff6790df2f68ab
        // dc_live_a81016200d09659c31ffa5890fcf884ae2b248e2
      },
      body: JSON.stringify({
        currency: data.country === 'Nigeria' ? 'NGN' : 'USD',
        email: data.email,
        amount: data.country === 'Nigeria' ? 50 : 35,
        name: data.full_name,
        mobile: data.phone,
        title: 'Training School Fee',
        callback_url: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/register' : 'https://devrecruitschool.com/register',
        logo: 'https://www.devrecruitschool.com/images/DevrRecruit%20Training%20Logo.png',
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        location.assign(response.data.modal_link);
      })
      .catch((err) => console.log(err));
  };

  const RegistrationForm = () => {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-y-[1.875rem]'
      >
        <div className='flex lg:w-[41.375rem] flex-row justify-between'>
          <div className='my-auto text-5xl font-semibold text-primary'>
            Enroll Now
          </div>
          {/* <div className='my-auto'>
            <ArrowLink
              as={UnstyledLink}
              className='my-auto inline-flex items-center'
              href='/login'
            >
              Already on DevTraining? Log in
            </ArrowLink>
          </div> */}
        </div>

        <div className='mt-3 text-gray-400'>
          Personal Information
        </div>

        <div className='flex flex-col gap-y-[0.625rem]'>
          <div className='text-xl lg:text-2xl'>Full Name</div>
          <div>
            <input
              {...register('full_name', { required: true })}
              type='text'
              className='lg:h-[4.875rem] w-full lg:w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
            />
          </div>
        </div>

        <div className='flex flex-col gap-y-[0.625rem]'>
          <div className='text-xl lg:text-2xl'>Email</div>
          <div>
            <input
              {...register('email', {
                required: true,
                pattern:
                  /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,10})+$/,
              })}
              type='email'
              className='lg:h-[4.875rem] w-full lg:w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
            />
          </div>
        </div>

        <div className='flex flex-col gap-y-[0.625rem]'>
          <div className='text-xl lg:text-2xl'>Phone Number</div>
          <div>
            <input
              {...register('phone')}
              type='text'
              className='lg:h-[4.875rem] w-full lg:w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
            />
          </div>
        </div>

        <div className='flex flex-col gap-y-[0.625rem]'>
          <div className='text-xl lg:text-2xl'>Gender</div>
          <div>
            <select
              {...register('gender', { required: true })}
              name='gender'
              className='lg:h-[4.875rem] w-full lg:w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
            >
              <option value=''>Select Gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>
        </div>

        <div className='flex flex-col gap-y-[0.625rem]'>
          <div className='text-xl lg:text-2xl'>Country</div>
          <div>
            <select
              {...register('country', { required: true })}
              name='country'
              className='lg:h-[4.875rem] w-full lg:w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
            >
              <option value=''>Select Country</option>
              <option value='Afghanistan'>Afghanistan</option>
              <option value='Albania'>Albania</option>
              <option value='Algeria'>Algeria</option>
              <option value='American Samoa'>American Samoa</option>
              <option value='Andorra'>Andorra</option>
              <option value='Angola'>Angola</option>
              <option value='Anguilla'>Anguilla</option>
              <option value='Antarctica'>Antarctica</option>
              <option value='Antigua and Barbuda'>
                Antigua and Barbuda
              </option>
              <option value='Argentina'>Argentina</option>
              <option value='Armenia'>Armenia</option>
              <option value='Aruba'>Aruba</option>
              <option value='Australia'>Australia</option>
              <option value='Austria'>Austria</option>
              <option value='Azerbaijan'>Azerbaijan</option>
              <option value='Bahamas'>Bahamas</option>
              <option value='Bahrain'>Bahrain</option>
              <option value='Bangladesh'>Bangladesh</option>
              <option value='Barbados'>Barbados</option>
              <option value='Belarus'>Belarus</option>
              <option value='Belgium'>Belgium</option>
              <option value='Belize'>Belize</option>
              <option value='Benin'>Benin</option>
              <option value='Bermuda'>Bermuda</option>
              <option value='Bhutan'>Bhutan</option>
              <option value='Bolivia'>Bolivia</option>
              <option value='Bosnia and Herzegovina'>
                Bosnia and Herzegovina
              </option>
              <option value='Botswana'>Botswana</option>
              <option value='Bouvet Island'>Bouvet Island</option>
              <option value='Brazil'>Brazil</option>
              <option value='British Indian Ocean Territory'>
                British Indian Ocean Territory
              </option>
              <option value='Brunei Darussalam'>Brunei Darussalam</option>
              <option value='Bulgaria'>Bulgaria</option>
              <option value='Burkina Faso'>Burkina Faso</option>
              <option value='Burundi'>Burundi</option>
              <option value='Cambodia'>Cambodia</option>
              <option value='Cameroon'>Cameroon</option>
              <option value='Canada'>Canada</option>
              <option value='Cape Verde'>Cape Verde</option>
              <option value='Cayman Islands'>Cayman Islands</option>
              <option value='Central African Republic'>
                Central African Republic
              </option>
              <option value='Chad'>Chad</option>
              <option value='Chile'>Chile</option>
              <option value='China'>China</option>
              <option value='Christmas Island'>Christmas Island</option>
              <option value='Cocos (Keeling) Islands'>
                Cocos (Keeling) Islands
              </option>
              <option value='Colombia'>Colombia</option>
              <option value='Comoros'>Comoros</option>
              <option value='Congo'>Congo</option>
              <option value='Congo, The Democratic Republic of The'>
                Congo, The Democratic Republic of The
              </option>
              <option value='Cook Islands'>Cook Islands</option>
              <option value='Costa Rica'>Costa Rica</option>
              <option value="Cote D'ivoire">{`Cote D'ivoire`}</option>
              <option value='Croatia'>Croatia</option>
              <option value='Cuba'>Cuba</option>
              <option value='Cyprus'>Cyprus</option>
              <option value='Czech Republic'>Czech Republic</option>
              <option value='Denmark'>Denmark</option>
              <option value='Djibouti'>Djibouti</option>
              <option value='Dominica'>Dominica</option>
              <option value='Dominican Republic'>
                Dominican Republic
              </option>
              <option value='Ecuador'>Ecuador</option>
              <option value='Egypt'>Egypt</option>
              <option value='El Salvador'>El Salvador</option>
              <option value='Equatorial Guinea'>Equatorial Guinea</option>
              <option value='Eritrea'>Eritrea</option>
              <option value='Estonia'>Estonia</option>
              <option value='Ethiopia'>Ethiopia</option>
              <option value='Falkland Islands (Malvinas)'>
                Falkland Islands (Malvinas)
              </option>
              <option value='Faroe Islands'>Faroe Islands</option>
              <option value='Fiji'>Fiji</option>
              <option value='Finland'>Finland</option>
              <option value='France'>France</option>
              <option value='French Guiana'>French Guiana</option>
              <option value='French Polynesia'>French Polynesia</option>
              <option value='French Southern Territories'>
                French Southern Territories
              </option>
              <option value='Gabon'>Gabon</option>
              <option value='Gambia'>Gambia</option>
              <option value='Georgia'>Georgia</option>
              <option value='Germany'>Germany</option>
              <option value='Ghana'>Ghana</option>
              <option value='Gibraltar'>Gibraltar</option>
              <option value='Greece'>Greece</option>
              <option value='Greenland'>Greenland</option>
              <option value='Grenada'>Grenada</option>
              <option value='Guadeloupe'>Guadeloupe</option>
              <option value='Guam'>Guam</option>
              <option value='Guatemala'>Guatemala</option>
              <option value='Guinea'>Guinea</option>
              <option value='Guinea-bissau'>Guinea-bissau</option>
              <option value='Guyana'>Guyana</option>
              <option value='Haiti'>Haiti</option>
              <option value='Heard Island and Mcdonald Islands'>
                Heard Island and Mcdonald Islands
              </option>
              <option value='Holy See (Vatican City State)'>
                Holy See (Vatican City State)
              </option>
              <option value='Honduras'>Honduras</option>
              <option value='Hong Kong'>Hong Kong</option>
              <option value='Hungary'>Hungary</option>
              <option value='Iceland'>Iceland</option>
              <option value='India'>India</option>
              <option value='Indonesia'>Indonesia</option>
              <option value='Iran, Islamic Republic of'>
                Iran, Islamic Republic of
              </option>
              <option value='Iraq'>Iraq</option>
              <option value='Ireland'>Ireland</option>
              <option value='Israel'>Israel</option>
              <option value='Italy'>Italy</option>
              <option value='Jamaica'>Jamaica</option>
              <option value='Japan'>Japan</option>
              <option value='Jordan'>Jordan</option>
              <option value='Kazakhstan'>Kazakhstan</option>
              <option value='Kenya'>Kenya</option>
              <option value='Kiribati'>Kiribati</option>
              <option value="Korea, Democratic People's Republic of">{`Korea, Democratic People's Republic of`}</option>
              <option value='Korea, Republic of'>
                Korea, Republic of
              </option>
              <option value='Kuwait'>Kuwait</option>
              <option value='Kyrgyzstan'>Kyrgyzstan</option>
              <option value="Lao People's Democratic Republic">{`Lao People's Democratic Republic`}</option>
              <option value='Latvia'>Latvia</option>
              <option value='Lebanon'>Lebanon</option>
              <option value='Lesotho'>Lesotho</option>
              <option value='Liberia'>Liberia</option>
              <option value='Libyan Arab Jamahiriya'>
                Libyan Arab Jamahiriya
              </option>
              <option value='Liechtenstein'>Liechtenstein</option>
              <option value='Lithuania'>Lithuania</option>
              <option value='Luxembourg'>Luxembourg</option>
              <option value='Macao'>Macao</option>
              <option value='North Macedonia'>North Macedonia</option>
              <option value='Madagascar'>Madagascar</option>
              <option value='Malawi'>Malawi</option>
              <option value='Malaysia'>Malaysia</option>
              <option value='Maldives'>Maldives</option>
              <option value='Mali'>Mali</option>
              <option value='Malta'>Malta</option>
              <option value='Marshall Islands'>Marshall Islands</option>
              <option value='Martinique'>Martinique</option>
              <option value='Mauritania'>Mauritania</option>
              <option value='Mauritius'>Mauritius</option>
              <option value='Mayotte'>Mayotte</option>
              <option value='Mexico'>Mexico</option>
              <option value='Micronesia, Federated States of'>
                Micronesia, Federated States of
              </option>
              <option value='Moldova, Republic of'>
                Moldova, Republic of
              </option>
              <option value='Monaco'>Monaco</option>
              <option value='Mongolia'>Mongolia</option>
              <option value='Montserrat'>Montserrat</option>
              <option value='Morocco'>Morocco</option>
              <option value='Mozambique'>Mozambique</option>
              <option value='Myanmar'>Myanmar</option>
              <option value='Namibia'>Namibia</option>
              <option value='Nauru'>Nauru</option>
              <option value='Nepal'>Nepal</option>
              <option value='Netherlands'>Netherlands</option>
              <option value='Netherlands Antilles'>
                Netherlands Antilles
              </option>
              <option value='New Caledonia'>New Caledonia</option>
              <option value='New Zealand'>New Zealand</option>
              <option value='Nicaragua'>Nicaragua</option>
              <option value='Niger'>Niger</option>
              <option value='Nigeria'>Nigeria</option>
              <option value='Niue'>Niue</option>
              <option value='Norfolk Island'>Norfolk Island</option>
              <option value='Northern Mariana Islands'>
                Northern Mariana Islands
              </option>
              <option value='Norway'>Norway</option>
              <option value='Oman'>Oman</option>
              <option value='Pakistan'>Pakistan</option>
              <option value='Palau'>Palau</option>
              <option value='Palestinian Territory, Occupied'>
                Palestinian Territory, Occupied
              </option>
              <option value='Panama'>Panama</option>
              <option value='Papua New Guinea'>Papua New Guinea</option>
              <option value='Paraguay'>Paraguay</option>
              <option value='Peru'>Peru</option>
              <option value='Philippines'>Philippines</option>
              <option value='Pitcairn'>Pitcairn</option>
              <option value='Poland'>Poland</option>
              <option value='Portugal'>Portugal</option>
              <option value='Puerto Rico'>Puerto Rico</option>
              <option value='Qatar'>Qatar</option>
              <option value='Reunion'>Reunion</option>
              <option value='Romania'>Romania</option>
              <option value='Russian Federation'>
                Russian Federation
              </option>
              <option value='Rwanda'>Rwanda</option>
              <option value='Saint Helena'>Saint Helena</option>
              <option value='Saint Kitts and Nevis'>
                Saint Kitts and Nevis
              </option>
              <option value='Saint Lucia'>Saint Lucia</option>
              <option value='Saint Pierre and Miquelon'>
                Saint Pierre and Miquelon
              </option>
              <option value='Saint Vincent and The Grenadines'>
                Saint Vincent and The Grenadines
              </option>
              <option value='Samoa'>Samoa</option>
              <option value='San Marino'>San Marino</option>
              <option value='Sao Tome and Principe'>
                Sao Tome and Principe
              </option>
              <option value='Saudi Arabia'>Saudi Arabia</option>
              <option value='Senegal'>Senegal</option>
              <option value='Serbia and Montenegro'>
                Serbia and Montenegro
              </option>
              <option value='Seychelles'>Seychelles</option>
              <option value='Sierra Leone'>Sierra Leone</option>
              <option value='Singapore'>Singapore</option>
              <option value='Slovakia'>Slovakia</option>
              <option value='Slovenia'>Slovenia</option>
              <option value='Solomon Islands'>Solomon Islands</option>
              <option value='Somalia'>Somalia</option>
              <option value='South Africa'>South Africa</option>
              <option value='South Georgia and The South Sandwich Islands'>
                South Georgia and The South Sandwich Islands
              </option>
              <option value='Spain'>Spain</option>
              <option value='Sri Lanka'>Sri Lanka</option>
              <option value='Sudan'>Sudan</option>
              <option value='Suriname'>Suriname</option>
              <option value='Svalbard and Jan Mayen'>
                Svalbard and Jan Mayen
              </option>
              <option value='Swaziland'>Swaziland</option>
              <option value='Sweden'>Sweden</option>
              <option value='Switzerland'>Switzerland</option>
              <option value='Syrian Arab Republic'>
                Syrian Arab Republic
              </option>
              <option value='Taiwan, Province of China'>
                Taiwan, Province of China
              </option>
              <option value='Tajikistan'>Tajikistan</option>
              <option value='Tanzania, United Republic of'>
                Tanzania, United Republic of
              </option>
              <option value='Thailand'>Thailand</option>
              <option value='Timor-leste'>Timor-leste</option>
              <option value='Togo'>Togo</option>
              <option value='Tokelau'>Tokelau</option>
              <option value='Tonga'>Tonga</option>
              <option value='Trinidad and Tobago'>
                Trinidad and Tobago
              </option>
              <option value='Tunisia'>Tunisia</option>
              <option value='Turkey'>Turkey</option>
              <option value='Turkmenistan'>Turkmenistan</option>
              <option value='Turks and Caicos Islands'>
                Turks and Caicos Islands
              </option>
              <option value='Tuvalu'>Tuvalu</option>
              <option value='Uganda'>Uganda</option>
              <option value='Ukraine'>Ukraine</option>
              <option value='United Arab Emirates'>
                United Arab Emirates
              </option>
              <option value='United Kingdom'>United Kingdom</option>
              <option value='United States'>United States</option>
              <option value='United States Minor Outlying Islands'>
                United States Minor Outlying Islands
              </option>
              <option value='Uruguay'>Uruguay</option>
              <option value='Uzbekistan'>Uzbekistan</option>
              <option value='Vanuatu'>Vanuatu</option>
              <option value='Venezuela'>Venezuela</option>
              <option value='Viet Nam'>Viet Nam</option>
              <option value='Virgin Islands, British'>
                Virgin Islands, British
              </option>
              <option value='Virgin Islands, U.S.'>
                Virgin Islands, U.S.
              </option>
              <option value='Wallis and Futuna'>Wallis and Futuna</option>
              <option value='Western Sahara'>Western Sahara</option>
              <option value='Yemen'>Yemen</option>
              <option value='Zambia'>Zambia</option>
              <option value='Zimbabwe'>Zimbabwe</option>
            </select>
          </div>
        </div>

        <div className='flex flex-col gap-y-[0.625rem]'>
          <div className='lg:text-xl'>Tell Us One Fun Thing About Yourself</div>
          <div>
            <input
              {...register('fun', { required: true })}
              type='text'
              className='lg:h-[4.875rem] w-full lg:w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
            />
          </div>
        </div>

        <div className='flex flex-col gap-y-[0.625rem]'>
          <div className='lg:text-xl'>Would you prefer a physical or digital certificate</div>
          <div>
            <select
              {...register('digital_certificate', { required: true })}
              name='digital_certificate'
              className='lg:h-[4.875rem] w-full lg:w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
            >
              <option value=''>Select Option</option>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </div>
        </div>

        {certificate === true &&
          <div className='flex flex-col gap-y-[0.625rem]'>
            <div className='text-xl lg:text-2xl'>Provide Delivery Address</div>
            <div>
              <input
                {...register('address', { required: true })}
                type='text'
                autoFocus
                className='lg:h-[4.875rem] w-full lg:w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
              />
            </div>
          </div>
        }

        <div className='flex flex-col gap-y-[0.625rem]'>
          <div className='text-xl lg:text-2xl'>Create Password</div>
          <div>
            <input
              {...register('password')}
              type='password'
              className='lg:h-[4.875rem] w-full lg:w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
            />
          </div>
        </div>

        <div className='flex flex-col gap-y-[0.625rem]'>
          <div className='text-xl lg:text-2xl'>Retype Password</div>
          <div>
            <input
              {...register('confirm_password')}
              type='password'
              className='lg:h-[4.875rem] w-full lg:w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
            />
          </div>
        </div>

        <div className='mt-[0.8125rem] mb-[1.25rem] flex flex-row gap-x-10'>
          <div className='my-auto'>
            <input
              checked={accept}
              onChange={(e) => setAccept(e.target.checked)}
              className='rounded-md p-3'
              type='checkbox'
              name=''
              id=''
            />
          </div>

          <div className='my-auto'>
            I accept DevTraining&apos;s Terms of Use and Privacy Notice.
          </div>
        </div>

        <div>
          <Button
            disabled={!accept}
            type='submit'
            className='lg:h-[4.1875rem] w-full lg:w-[41.375rem] text-2xl text-black'
          >
            <div className='mx-auto'>Proceed</div>
          </Button>
        </div>
      </form>
    )
  }

  const Summary = () => {
    return (
      <div className='flex flex-col my-10'>
        <div className='my-auto text-3xl font-semibold text-primary'>Registration Details</div>

        <div className='grid grid-cols-2 gap-y-10 my-10 text-2xl'>
          <div className='flex flex-row gap-x-6'>
            <div className='my-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className='my-auto'>{userData?.full_name}</div>
          </div>

          <div className='flex flex-row gap-x-6'>
            <div className='my-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

            </div>
            <div className='my-auto'>{userData?.email}</div>
          </div>

          <div className='flex flex-row gap-x-6'>
            <div className='my-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
              </svg>

            </div>
            <div className='my-auto'>{userData?.phone}</div>
          </div>

          <div className='flex flex-row gap-x-6'>
            <div className='my-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>

            </div>
            <div className='my-auto'>{userData?.gender}</div>
          </div>

          <div className='flex flex-row gap-x-6'>
            <div className='my-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
              </svg>

            </div>
            <div className='my-auto'>{userData?.country}</div>
          </div>

          {certificate && (
            <div className='flex flex-row gap-x-6'>
              <div className='my-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>


              </div>
              <div className='my-auto'>{userData?.address}</div>
            </div>
          )}

          <div className='flex flex-row gap-x-6 col-span-2'>
            <div className='my-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
              </svg>



            </div>
            <div className='my-auto'>{userData?.fun}</div>
          </div>
        </div>

        <div className='flex flex-row gap-x-10 mt-10'>
          <ButtonLink href='/'>Go Back Home</ButtonLink>

          <Button onClick={handlePayment}>Proceed to Pay</Button>
        </div>
      </div>
    )
  }

  const pages = [<RegistrationForm key={1} />, <Summary key={2} />]


  useEffect(() => {
    const currentChoice = watch('digital_certificate');

    if (currentChoice === 'true') {
      setCertificate(true)
    } else {
      setCertificate(false)
    }
  }, [watch('digital_certificate')])



  return (
    <div className='px-10 lg:px-0'>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />

      <Seo />

      <div className='lg:mb-10 mx-auto'>
        <Header isActive={undefined} />
      </div>

      <main className='lg:w-screen'>
        <div className='flex flex-row w-full'>
          <div className='sm:mx-auto md:mx-0 lg:w-[55%] py-10 lg:py-[3.75rem] lg:px-[3rem] xl:px-[6.25rem]'>
            {pages[page]}
          </div>

          <div className='hidden lg:flex w-[45%] bg-primary-100 px-10 py-[10rem]'>
            <div className='flex flex-col'>
              {/* <img className='mx-auto' src='/images/device-frame.png' width={250} height={500} alt='' /> */}
              <picture>
                <source srcSet='/images/device-frame.png' type='image/png' />
                <img
                  src='/images/device-frame.png'
                  alt=''
                  className='m-auto w-[60%]'
                />
              </picture>

              <div className='mt-[5.1875rem] flex flex-col'>
                <div className='flex flex-col text-center text-xl leading-[1.7025rem]'>
                  <div>
                    By signing up you will earn an introductory certificate in
                  </div>
                  <div>Cyber security. Join the DevRecruit training school</div>
                  <div>to build industry demand technological skill set.</div>
                </div>

                <div className='mx-auto mt-8 mb-[2.125rem] h-px w-5/6 bg-primary-800'></div>

                <div className='mx-auto grid grid-cols-2 gap-y-6 gap-x-10 xl:gap-y-2 xl:gap-x-20 xl:px-20'>
                  <div className='flex flex-row gap-x-2'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>

                    </div>
                    <div>24 Modules</div>
                  </div>

                  <div className='flex flex-row gap-x-2'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>

                    </div>
                    <div>Full Time Access</div>
                  </div>

                  <div className='flex flex-row gap-x-2 my-4'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>

                    </div>
                    <div>12 Exercises</div>
                  </div>

                  <div className='flex flex-row gap-x-2 my-4'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>

                    </div>
                    <div>Certificate</div>
                  </div>

                  <div className='flex flex-row gap-x-2'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>

                    </div>
                    <div>20 Resources</div>
                  </div>
                </div>
              </div>

              <div className='mt-16 text-center'>
                <ArrowLink
                  as={UnstyledLink}
                  className='my-auto inline-flex items-center'
                  href='/contact'
                >
                  Having trouble logging in? Learner help center
                </ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
