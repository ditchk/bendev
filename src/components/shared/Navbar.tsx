import { Link } from 'react-router-dom';
import Socials from './Socials';
import MobileMenu from './MobileMenu';


const Navbar = () => {

  // const scrollDirection = useScrollDirection();


  return (
    <nav id='navbar' className={`navbar bg-white animate-in slide-in-from-top-10 duration-1000 shadow-sm shadow-slate-500 border-b border-slate-200 w-full`}>
      <Link 
      to={'/'}
      className="flex flex-row justify-center items-center gap-2"
      >
        <h1 className="logo-text text-shadow">BENSWORKSPACE</h1>
      </Link>
      <div className="hidden md:flex flex-row justify-center items-center gap-5 pr-3">
        <Socials />
        <Link to={'/about'} reloadDocument className="Linkme">
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
