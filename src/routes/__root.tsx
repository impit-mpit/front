import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from '../components/header'

export const Route = createRootRoute({
  component: () => (
    <div className='bg-bg min-h-screen px-[120px] py-6 text-text-primary'>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
})