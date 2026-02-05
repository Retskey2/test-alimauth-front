import { useProfileStore } from '@/entities/profile';
import { Navigate, Outlet } from 'react-router-dom';

export const GuestRoute = () => {
  const profile = useProfileStore((state) => state.profile);

  if (profile) {
    return <Navigate to="/profile" replace />;
  }

  return <Outlet />;
};
