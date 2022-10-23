import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'init_firebase';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import Button from '@/components/buttons/Button';
import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

import { userStore } from '@/store';

import Apple from '~/svg/apple.svg';
import Google from '~/svg/google.svg';
import UnderlineLink from '@/components/links/UnderlineLink';

export default function Login() {
  const router = useRouter();
  const { add_user } = userStore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: { [key: string]: string }) => {
    const auth = getAuth();
    toast.info('Processing...');

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        toast.success('Login Successful');
      })
      .then(async () => {
        // const logged_in_user = query(collection(db, "users"), where("email", "==", data.email));
        // console.log(logged_in_user);

        const q = query(
          collection(db, 'users'),
          where('email', '==', data.email)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          const user = doc.data();
          add_user(user);

          if (!user.paid) {
            handlePayment(user);
          } else {
            router.push('/users/dashboard')
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
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
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className=''>
        <div className='grid h-screen grid-flow-row grid-cols-3'>
          {/* //#region  //*============== Form region */}
          <div className='col-span-2 py-40 px-[3rem] xl:px-[6.25rem]'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col gap-y-[1.875rem]'
            >
              <div className='flex w-[41.375rem] flex-row justify-between'>
                <div className='my-auto text-3xl font-semibold text-primary'>
                  Login
                </div>
                <div className='my-auto'>
                  <ArrowLink
                    as={UnstyledLink}
                    className='my-auto inline-flex items-center'
                    href='/register'
                  >
                    New to DevTraining? Register
                  </ArrowLink>
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
                <div className='text-2xl'>Password</div>
                <div>
                  <input
                    {...register('password', { required: true })}
                    type='password'
                    className='h-[4.875rem] w-[41.375rem] rounded-[0.625rem] border border-[#333] px-4 py-5'
                  />
                </div>
              </div>

              <div>
                <Button type='submit' className='w-[41.375rem] text-black'>
                  <div className='mx-auto'>Log In</div>
                </Button>
              </div>

              <div className='flex w-[41.375rem] flex-row justify-center gap-x-4'>
                <div className='my-auto h-[0.5px] w-full bg-[#333]'></div>
                <div className='my-auto text-2xl'>Or</div>
                <div className='my-auto h-[0.5px] w-full bg-[#333]'></div>
              </div>

              <div className='flex w-[41.375rem] flex-row gap-x-10'>
                <div>
                  <Button
                    disabled
                    className='h-[4.875rem] w-[19.375rem] rounded-[0.625rem] border border-black bg-white text-black hover:text-black'
                  >
                    <div className='m-auto flex flex-row gap-x-4'>
                      <div>
                        <Google className='h-[1.538125rem] w-[1.5075rem]' />
                      </div>
                      <div>Continue with Google</div>
                    </div>
                  </Button>
                </div>

                <div>
                  <Button
                    disabled
                    className='h-[4.875rem] w-[19.375rem] rounded-[0.625rem] border border-black bg-white text-black hover:text-black'
                  >
                    <div className='m-auto flex flex-row gap-x-4'>
                      <div>
                        <Apple className='h-[1.538125rem] w-[1.5075rem]' />
                      </div>
                      <div>Continue with Apple ID</div>
                    </div>
                  </Button>
                </div>
              </div>

              <div className='mt-10'>
              <UnderlineLink href='/forgot'>Forgot Password?</UnderlineLink>
            </div>
            </form>
          </div>
          {/* //#endregion  //*============== Form region */}

          {/* //#region  //*============== Content region */}
          <div className='col-span-1 bg-primary-100 py-40 px-10'>
            <div className='flex flex-col gap-y-10'>
              {/* <img className='mx-auto w-[16.39625rem] h-[33rem]' src='/images/device-frame.png' width={0} height={0} alt='' /> */}

              <picture>
                <source srcSet='/images/device-frame.png' type='image/png' />
                <img
                  src='/images/device-frame.png'
                  alt=''
                  className='m-auto mt-20 w-[55%] xl:-mt-6'
                />
              </picture>
              <div className='text-center'>
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
          {/* //#endregion  //*============== Content region */}
        </div>
      </main>
    </>
  );
}
