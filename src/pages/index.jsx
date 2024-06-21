import { Outlet } from 'react-router-dom';
import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';

const Index = () => {
  return (
    <main className='min-h-screen '>
      <Home />
      {/* <About />
      <Projects />
      <Contact /> */}
      <Outlet />
    </main>
  );
};

export { Index };
