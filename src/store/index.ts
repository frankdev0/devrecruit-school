import create from "zustand";
import { persist } from "zustand/middleware";

interface userState {
	user_data: {
		uid?: string;
		email?: string;
	};
	add_user: (user_data: any) => void;
	remove_user: () => void;
}

export const userStore = create(
	persist<userState>(
		(set) => ({
			user_data: {},
			add_user: (user) => set(() => ({ user_data: user })),
			remove_user: () => set(() => ({ user_data: {} })),
		}),
		{
			name: "user-storage", // unique name
			getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
		}
	)
);
