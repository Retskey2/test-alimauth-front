import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { IProfile, IProfileState } from './types';

const initialState = {
  profile: null,
  isLoading: false,
  error: null,
};

export const useProfileStore = create<IProfileState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        updateProfile: async (data: IProfile) => {
          set({ isLoading: true, error: null });

          try {
            await new Promise((resolve) => setTimeout(resolve, 3000));

            set({ profile: data, isLoading: false });
          } catch (e) {
            set({
              error: `Ошибка при обновлении профиля - ${e}`,
              isLoading: false,
            });
          }
        },

        logout: () => {
          set(initialState);
          useProfileStore.persist.clearStorage();
        },
      }),
      { name: 'profile-storage' }
    )
  )
);
