import create from 'zustand';
import { persist } from 'zustand/middleware';

interface userState {
  user_data: {
    full_name: any;
    uid?: string;
    email?: string;
    paid?: boolean;
  };
  add_user: (user_data: any) => void;
  remove_user: () => void;
  payment_details?: {
    amount: number;
    created_at: string;
    currency: string;
    customer: {
      email: string;
      name: string;
      phone_number: string;
    };
    device_fingerprint: string;
    ip: string;
    narration: string;
    payment_type: string;
    reference: string;
    status: string;
  };
  set_payment_details: (payment_details: any) => void;
  remove_payment_details: () => void;
}

export const userStore = create(
  persist<userState>(
    (set) => ({
      user_data: {
        full_name: '',
        uid: '',
        email: '',
        paid: false,
      },
      add_user: (user) => set(() => ({ user_data: user })),
      remove_user: () =>
        set(() => ({
          user_data: {
            full_name: '',
            uid: '',
            email: '',
            paid: false,
          },
        })),
      set_payment_details: (payment_details: any) =>
        set(() => ({ payment_details: payment_details })),
      remove_payment_details: () =>
        set(() => ({
          payment_details: {
            amount: 0,
            created_at: '',
            currency: '',
            customer: {
              email: '',
              name: '',
              phone_number: '',
            },
            device_fingerprint: '',
            ip: '',
            narration: '',
            payment_type: '',
            reference: '',
            status: '',
          },
        })),
    }),
    {
      name: 'user-storage', // unique name
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    }
  )
);
