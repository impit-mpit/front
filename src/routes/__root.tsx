import {
  createRootRoute,
  Outlet,
  useLocation
} from '@tanstack/react-router';
import Header from '../components/header';
import Footer from '../components/footer';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const route = useLocation();
  if (route.pathname.split("/")[1] === "admin")
    return(
      <div className='bg-bg min-h-screen px-[120px] pt-10'>
        <Outlet />
      </div>
    )
    else if (route.pathname === '/auth')
    return (
      <div className="bg-content-primary flex min-h-screen text-text-primary">
        <Outlet />
      </div>
    );
  else
    return (
      <div className="bg-bg min-h-screen xl:px-[120px] py-6 px-4 text-text-primary">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
}
