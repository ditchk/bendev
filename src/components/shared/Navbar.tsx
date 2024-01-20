import { Link } from 'react-router-dom';
import Socials from './Socials';
import MobileMenu from './MobileMenu';


const Navbar = () => {
  return (
    <nav id='navbar' className="z-50 flex flex-row justify-between gap-16 w-full shadow-md bg-cyan-950 bg-opacity-10 backdrop-blur-lg animate-in slide-in-from-top-10 h-max top-0 sticky py-2 px-3 duration-1000">
      <Link 
      to={'/'}
      className="flex flex-row justify-center items-center gap-2"
      >
        <img src="/assets/images/logo.png" alt="" width={40} className='ml-1'/>
        <h1 className="logo-text">bswp</h1>
      </Link>
      <div className="hidden md:flex flex-row justify-center items-center">
        <Socials />
        <Link to={'/mycv'} className="Linkme">
          Explore
        </Link>
      </div>
      <div className="flex justify-center items-center md:hidden p-0 m-0 w-fit">
        <MobileMenu />
        </div>
    </nav>
  )
}

export default Navbar
