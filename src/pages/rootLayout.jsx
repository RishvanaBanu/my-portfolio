import { Outlet } from 'react-router-dom';
import NavBar from '../components/navBar';

const RootLayout = () => {
  return (
    <main className='min-h-screen content-center justify-center '>
      <NavBar />
      <Outlet />
    </main>
  );
};

export { RootLayout };
