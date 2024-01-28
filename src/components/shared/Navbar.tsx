import { Link, useNavigate } from 'react-router-dom';
import Socials from './Socials';
import MobileMenu from './MobileMenu';
import { Button } from '../ui/button';


const Navbar = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/error')
  }

  return (
    <nav id='navbar' className="z-50 flex flex-row justify-between gap-16 w-full shadow-sm shadow-slate-400 bg-cyan-950 border-b border-white bg-opacity-10 backdrop-blur-lg animate-in slide-in-from-top-10 h-max top-0 sticky py-1 px-3 duration-1000">
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
        <Button onClick={handleClick} className='Signup_button'>signup</Button>
        <MobileMenu />
        </div>
    </nav>
  )
}

export default Navbar
