import { useProfileStore } from '@/entities/profile/model/store';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const profile = useProfileStore((state) => state.profile);

  if (!profile) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
