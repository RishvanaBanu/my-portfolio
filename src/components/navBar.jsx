import { Link, NavLink } from 'react-router-dom';
import routes from '../constants/routes';

const NavBar = () => {
  return (
    <nav className='w-full flex items-center py-8 fixed bg-lastGrey top-0 z-20 sm:opacity-[0.97] '>
      {/* className='h-24 px-20 grid grid-cols-2 items-center bg-eightGrey bg-opacity-20 fixed'> */}
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to={routes.index}
          className='flex text-3xl font-extrabold  items-center '
        >
          Rishvana
        </Link>
        <ul className='flex gap-28 justify-self-end  '>
          <li className='text-2xl font-semibold  uppercase '>
            <NavLink
              className={({ isActive }) => isActive && 'text-fifthGrey'}
              to={routes.about}
            >
              About
            </NavLink>
          </li>
          <li className='text-2xl font-semibold uppercase'>
            <NavLink
              className={({ isActive }) => isActive && 'text-fifthGrey'}
              to={routes.projects}
            >
              Projects
            </NavLink>
          </li>
          <li className='text-2xl font-semibold uppercase'>
            <NavLink
              className={({ isActive }) => isActive && 'text-fifthGrey'}
              to={routes.contact}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
