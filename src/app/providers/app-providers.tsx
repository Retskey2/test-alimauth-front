import type { ReactNode } from 'react';

interface IAppProviders {
  children: ReactNode;
}

export const AppProviders = ({ children }: IAppProviders) => {
  return { children };
};
