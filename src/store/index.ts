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
      remove_user: () => set(() => ({ user_data: {
		full_name: '',
        uid: '',
        email: '',
        paid: false,
	  } })),
    }),
    {
      name: 'user-storage', // unique name
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    }
  )
);
