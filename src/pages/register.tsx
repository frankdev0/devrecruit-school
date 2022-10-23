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
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import Button from '@/components/buttons/Button';
import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

export default function Register() {
  const [accept, setAccept] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  console.log(router.query);

  if (router.query.status) {
    toast.info('Processing Payment...');

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
          console.log(response);
          if (response.status) {
            toast.success('Payment completed Successfully!');

            const user = query(
              collection(db, 'users'),
              where('email', '==', response.data.customer.email)
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
                setTimeout(() => {
                  router.push('/login');
                }, 3000);
              });
            });
          }
        })
        .catch((error) => console.log(error));
    } else {
      toast.error('Payment failed!');
      toast.info('Login to complete payment');
      toast.info('Redirecting to login');

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

    toast.info('Processing...');

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

        toast.success('Account created successfully');

        try {
          await addDoc(collection(db, 'users'), data);

          //* Redirect To Handle Fee Payment
          await handlePayment(data);
        } catch (e: any) {
          toast.error(e.code || 'Error adding User biodata');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
      });
  };

  const handlePayment = async (data: { [key: string]: string }) => {
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
        amount: data.country === 'Nigeria' ? 50 : 10,
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

  return (
    <>
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

      <main className=''>
        <div className='grid grid-flow-row grid-cols-3'>
          <div className='col-span-2 py-[3.75rem] px-[3rem] xl:px-[6.25rem]'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col gap-y-[1.875rem]'
            >
              <div className='flex w-[41.375rem] flex-row justify-between'>
                <div className='my-auto text-3xl font-semibold text-primary'>
                  Sign up
                </div>
                <div className='my-auto'>
                  <ArrowLink
                    as={UnstyledLink}
                    className='my-auto inline-flex items-center'
                    href='/login'
                  >
                    Already on DevTraining? Log in
                  </ArrowLink>
                </div>
              </div>

              <div className='mt-[1.5625rem] text-gray-400'>
                Personal Information
              </div>

              <div className='flex flex-col gap-y-[0.625rem]'>
                <div className='text-2xl'>Full Name</div>
                <div>
                  <input
                    {...register('full_name', { required: true })}
                    type='text'
                    className='h-[4.875rem] w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
                  />
                </div>
              </div>

              <div className='flex flex-col gap-y-[0.625rem]'>
                <div className='text-2xl'>Email</div>
                <div>
                  <input
                    {...register('email', {
                      required: true,
                      pattern:
                        /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,10})+$/,
                    })}
                    type='email'
                    className='h-[4.875rem] w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
                  />
                </div>
              </div>

              <div className='flex flex-col gap-y-[0.625rem]'>
                <div className='text-2xl'>Phone Number</div>
                <div>
                  <input
                    {...register('phone')}
                    type='text'
                    className='h-[4.875rem] w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
                  />
                </div>
              </div>

              <div className='flex flex-col gap-y-[0.625rem]'>
                <div className='text-2xl'>Gender</div>
                <div>
                  <select
                    {...register('gender', { required: true })}
                    name='gender'
                    className='h-[4.875rem] w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
                  >
                    <option value=''>Select Gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </select>
                </div>
              </div>

              <div className='flex flex-col gap-y-[0.625rem]'>
                <div className='text-2xl'>Country</div>
                <div>
                  <select
                    {...register('country', { required: true })}
                    name='country'
                    className='h-[4.875rem] w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
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
                <div className='text-2xl'>Password</div>
                <div>
                  <input
                    {...register('password')}
                    type='password'
                    className='h-[4.875rem] w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
                  />
                </div>
              </div>

              <div className='flex flex-col gap-y-[0.625rem]'>
                <div className='text-2xl'>Confirm Password</div>
                <div>
                  <input
                    {...register('confirm_password')}
                    type='password'
                    className='h-[4.875rem] w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
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
                  className='h-[4.1875rem] w-[41.375rem] text-2xl text-black'
                >
                  <div className='mx-auto'>Proceed to Pay</div>
                </Button>
              </div>
            </form>
          </div>

          <div className='col-span-1 bg-primary-100 px-10 py-[10rem]'>
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
              </div>

              <div className='mt-[16rem] text-center'>
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
    </>
  );
}
