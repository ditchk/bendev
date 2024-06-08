import { Link, useNavigate } from 'react-router-dom';
import Socials from './Socials';
import { Button } from '../ui/button';


const Navbar = () => {
  
  const Navigate = useNavigate()

  const handleclick = () => {
      Navigate('/opportunities&careers')
  }

  const handleclick2 = () => {
    Navigate('/packages/basic')
  }
  return (
    <nav id='navbar' className={`navbar bg-white animate-in slide-in-from-top-10 duration-1000 shadow-sm shadow-slate-500 border-b border-slate-100 w-full`}>
      <Link 
      to={'/'}
      className="NextLink flex flex-row justify-center items-center gap-1"
      >
        <img src="/assets/images/logo1.png" width={60} height={60} alt="Logo" />
        <h4 className="logo-text">Bswp</h4>
      </Link>
      <div className="hidden md:flex flex-row justify-center items-center pr-3">
        <Socials />
        <Link to={'/about'} reloadDocument className="Linkme bg-white text-teal-500 outline-teal-500">
          Explore
        </Link>
        <Link to={'/packages/basic'} reloadDocument className="Linkme bg-teal-950 text-white outline-slate-500">
          Get started
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center md:hidden p-0 m-0 w-fit">
        <Button className="NavButton bg-white text-teal-500 outline-teal-500" onClick={handleclick2}>Get started</Button>
        <Button className="NavButton bg-teal-950 text-white outline-teal-500" onClick={handleclick}>Start Learning</Button>
      </div>
    </nav>
  )
}

export default Navbar
