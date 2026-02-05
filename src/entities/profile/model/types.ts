export interface IProfile {
  username: string;
  email: string;
}

export interface IProfileState {
  profile: IProfile | null;
  isLoading: boolean;
  error: string | null;

  updateProfile: (data: IProfile) => Promise<void>;
  logout: () => void;
}
