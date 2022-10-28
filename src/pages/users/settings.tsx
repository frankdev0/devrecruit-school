import { getAuth, signInWithEmailAndPassword, updatePassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import Button from '@/components/buttons/Button';
import DashboardLayout from '@/components/layout/Dashboard';

import { userStore } from '@/store';

export default function Profile() {
  const {
    register: register_reset,
    handleSubmit: handleSubmitReset,
  } = useForm();

  const router = useRouter();

  const { user_data } = userStore();

  const onReset = async (data: { [key: string]: any }) => {
    if (!user_data.email) {
      router.push('/login');
      return;
    };

    toast.info('Processing your request....');

    const auth = getAuth();
    const email: string = user_data.email;

    signInWithEmailAndPassword(auth, email, data.old_password)
      .then(() => {
        // Signed in
        const user: any = auth.currentUser;
        const newPassword = data.new_password;

        updatePassword(user, newPassword).then(() => {
          // Update successful.
          toast.success('Password Updated Successfully');
          setTimeout(() => {
            router.push('/dashboard');
          }, 3000);
        }).catch((error) => {
          // An error ocurred
          toast.error('Something went wrong, try again!')
        });
      })
      .catch((error: { code: any; }) => {
        const errorCode = error.code;
        toast.error(errorCode);
        toast.info('Enter your current password in the old password field.');
      });
  }

  return (
    <DashboardLayout>
      <>
        <ToastContainer
          position='bottom-right'
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

        <div className="py-20 rounded px-20">
          <h1 className="font-medium text-3xl">Reset Password</h1>
          <p className='text-gray-400 font-light italic'>Password must be at least 8 characters.</p>
          <form onSubmit={handleSubmitReset(onReset)}>
            <div className="mt-8 space-y-6">
              <div>
                <label htmlFor="password" className="text-sm text-gray-700 block mb-1 font-medium">Old Password</label>
                <input
                  id="password"
                  type="password"
                  {...register_reset('old_password', { required: true, minLength: 8 })}
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
              </div>

              <div>
                <label htmlFor="password" className="text-sm text-gray-700 block mb-1 font-medium">New Password</label>
                <input
                  id="password"
                  type="password"
                  {...register_reset('new_password', { required: true, minLength: 8 })}
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
              </div>
            </div>
            <div className="space-x-4 mt-8">
              <Button type='submit'>Submit</Button>
            </div>
          </form>
        </div>
      </>
    </DashboardLayout>
  );
}


