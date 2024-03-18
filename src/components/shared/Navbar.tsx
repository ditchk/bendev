import { Link } from 'react-router-dom';
import Socials from './Socials';
import MobileMenu from './MobileMenu';
import { useScrollDirection } from '@/constants';


const Navbar = () => {

  const scrollDirection = useScrollDirection();


  return (
    <nav id='navbar' className={`navbar bg-gradient-to-r from-teal-950 to-teal-800 rounded-3xl shadow-sm shadow-gray-300 outline-dotted duration-1000 outline-2 outline-white my-2 left-[2px] md:left-[10px] lg:left-[14px]  ${scrollDirection === 'down' ? 'hide shadow-none' : ''}`}>
      <Link 
      to={'/'}
      className="flex flex-row justify-center items-center gap-2"
      >
        <h1 className="logo-text">Bensworkspace</h1>
      </Link>
      <div className="hidden md:flex flex-row justify-center items-center gap-5 pr-3 animate-in slide-in-from-right-20 duration-500">
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
