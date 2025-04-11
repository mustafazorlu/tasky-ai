import { createBrowserRouter } from 'react-router'

//pages
import HomePage from '@/pages/HomePage'
//layouts
import RouteLayout from '../layouts/RootLayout'
//types
import type { RouteObject } from 'react-router'

const rootRouteChildren: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteLayout />,
    children: rootRouteChildren,
  },
])

export default router
