import { Link, useNavigate } from 'react-router-dom';
import Socials from './Socials';
import { Button } from '../ui/button';
// import MobileMenu from './MobileMenu';


const Navbar = () => {
  
  const Navigate = useNavigate()

  const handleclick = () => {
      Navigate('/opportunities&careers')
  }

  const handleclick2 = () => {
    Navigate('/packages/basic')
  }
  return (
    <nav id='navbar' className="navbar bg-white bg-opacity-20 backdrop-blur-lg shadow-sm shadow-slate-400 animate-in slide-in-from-top-10 top-0 duration-1000 border-b border-slate-200 w-full">
      <Link 
      to={'/'}
      className="NextLink flex flex-row justify-center items-center"
      >
        <img src="/assets/images/logo1.png" width={60} height={60} alt="Logo" />
        <h4 className="logo-text">Bswpace</h4>
      </Link>
      <div className="hidden md:flex flex-row justify-center items-center pr-3">
        <Socials />
        <Link to={'/blogs'} reloadDocument className="Linkme bg-white text-teal-500 outline-teal-500">
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
      {/* mobile nav */}
      {/* <div className="absolute flex md:hidden w-full">
        <MobileMenu />
      </div> */}
    </nav>
  )
}

export default Navbar
