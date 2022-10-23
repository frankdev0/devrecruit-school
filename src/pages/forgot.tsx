import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import Button from '@/components/buttons/Button';
import Seo from '@/components/Seo';


export default function Forgot() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = (data: { [key: string]: string }) => {
    const auth = getAuth();
    toast.info('Processing...');

    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        // Password reset email sent!
        toast.success('Reset email sent successfully.')
        setTimeout(() => {
          router.push('/')
        }, 3000);
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
      });
  };

  return (
    <>
      <ToastContainer
        position='top-left'
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
                  Reset Password
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


              <div>
                <Button type='submit' className='w-[41.375rem] text-black'>
                  <div className='mx-auto'>Reset Password</div>
                </Button>
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
            </div>
          </div>
          {/* //#endregion  //*============== Content region */}
        </div>
      </main>
    </>
  );
}
