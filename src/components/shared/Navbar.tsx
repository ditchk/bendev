import { Link } from 'react-router-dom';
import Socials from './Socials';
import MobileMenu from './MobileMenu';


const Navbar = () => {

  return (
    <nav id='navbar' className="z-50 flex flex-row justify-between gap-14 w-full shadow-sm shadow-slate-400 bg-cyan-950 border-b border-white bg-opacity-10 backdrop-blur-lg animate-in slide-in-from-top-10 h-max top-0 sticky py-1 px-3 duration-1000">
      <Link 
      to={'/'}
      className="flex flex-row justify-center items-center gap-2"
      >
        <img src="/assets/images/logo.png" alt="" width={50} className='ml-1'/>
        <h1 className="logo-text">Bensworkspace</h1>
      </Link>
      <div className="hidden md:flex flex-row justify-center items-center">
        <Socials />
        <Link to={'/mycv'} className="Linkme">
          Explore
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center md:hidden p-0 m-0 w-fit">
        <Link to={'/error'} reloadDocument className='Signup_button p-2 rounded-md'>signup</Link>
        <MobileMenu />
        </div>
    </nav>
  )
}

export default Navbar
