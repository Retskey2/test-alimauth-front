import { LayoutBackround } from '@/layouts/LayoutBackround/LayoutBackround';
import { LoginPage, NotFoundPage, ProfilePage } from '@/pages';
import { routes } from '@/shared/config/routes';
import { createBrowserRouter } from 'react-router-dom';

import { GuestRoute } from './guest-route';
import { ProtectedRoute } from './protected-route';

export const router = createBrowserRouter([
  {
    element: <LayoutBackround />,
    children: [
      {
        element: <GuestRoute />,
        children: [
          {
            path: routes.login,
            element: <LoginPage />,
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: routes.profile,
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: routes.notFound,
        element: <NotFoundPage />,
      },
    ],
  },
]);
