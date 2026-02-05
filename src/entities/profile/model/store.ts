import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { Profile, ProfileState } from './types';

const initialState = {
  profile: null,
  isLoading: false,
  error: null,
};

export const useProfileStore = create<ProfileState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        updateProfile: async (data: Profile) => {
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
