import { Link } from 'react-router-dom';
import Socials from './Socials';
import MobileMenu from './MobileMenu';
import { useScrollDirection } from '@/constants';


const Navbar = () => {

  const scrollDirection = useScrollDirection();


  return (
    <nav id='navbar' className={`navbar bg-white backdrop-blur-sm rounded-2xl shadow-md animate-in slide-in-from-top-10 duration-1000 outline outline-2 outline-slate-200 shadow-slate-500 my-2 w-[98%] lg:w-[99%] left-[3.5px] md:left-[5px]  ${scrollDirection === 'down' ? 'hide shadow-none' : ''}`}>
      <Link 
      to={'/'}
      className="flex flex-row justify-center items-center gap-2"
      >
        <h1 className="logo-text text-shadow">BENSWORKSPACE</h1>
      </Link>
      <div className="hidden md:flex flex-row justify-center items-center gap-5 pr-3">
        <Socials />
        <Link to={'/mycv'} className="Linkme">
          Explore
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center md:hidden p-0 m-0 w-fit">
        <MobileMenu />
        </div>
    </nav>
  )
}

export default Navbar
