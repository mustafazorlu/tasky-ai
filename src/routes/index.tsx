import { createBrowserRouter } from 'react-router';

//pages
import HomePage from '@/pages/HomePage';
import RootErrorBoundary from '@/pages/RootErrorBoundary';
//layouts
import RouteLayout from '../layouts/RootLayout';
//types
import type { RouteObject } from 'react-router';
import RegisterPage from '@/pages/RegisterPage';
import LoginPage from '@/pages/LoginPage';
import AuthSyncPage from '@/pages/AuthSyncPage';
import AppLayout from '@/layouts/AppLayout';
import InboxPage from '@/pages/InboxPage';

const rootRouteChildren: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: 'register',
    element: <RegisterPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'auth-sync',
    element: <AuthSyncPage />,
  },
];

const appRouteChildren: RouteObject[] = [
  {
    path: 'inbox',
    element: <InboxPage />,
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteLayout />,
    errorElement: <RootErrorBoundary error={null} />,
    children: rootRouteChildren,
  },
  {
    path: '/app',
    element: <AppLayout />,
    children: appRouteChildren,
  },
]);

export default router;
