export interface Profile {
  username: string;
  email: string;
}

export interface ProfileState {
  profile: Profile | null;
  isLoading: boolean;
  error: string | null;

  updateProfile: (data: Profile) => Promise<void>;
  logout: () => void;
}
