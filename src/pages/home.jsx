import { Outlet } from 'react-router-dom';
import NavBar from '../components/navBar';

const Home = () => {
  return (
    <div className='   w-full h-screen content-center justify-center  inline-grid grid-cols-2 p-20 mt-10   '>
      <div className='px-20 '>
        <h1 className='text-6xl font-extrabold text-firstGrey  decoration-fourthGrey inline-grid'>
          Hi,I'm
          <span className='text-fifthGrey'> Rishvana Banu </span>
        </h1>
        <p className=' my-5 text-2xl font-sans'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem quod architecto quibusdam iusto, veniam nisi dolor
          debitis sed repellendus. Reiciendis in eum iusto ex ea ducimus totam
          rem aut repellendus?
        </p>
      </div>
      <div className='bg-slate-700 '>smdfnsdj</div>
    </div>
  );
};
export default Home;
