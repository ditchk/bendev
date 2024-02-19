import { Link } from 'react-router-dom';
import Socials from './Socials';
import MobileMenu from './MobileMenu';
import { useScrollDirection } from '@/constants';


const Navbar = () => {

  const scrollDirection = useScrollDirection();


  return (
    <nav id='navbar' className={` navbar backdrop-blur-md border-b-2 border-white shadow-sm shadow-gray-300  ${scrollDirection === 'down' ? 'hide shadow-none' : ''}`}>
      <Link 
      to={'/'}
      className="flex flex-row justify-center items-center gap-2"
      >
        <img src="/assets/images/logo.png" alt="Bensworkspace-logo" width={50}/>
        <h1 className="logo-text">Bensworkspace</h1>
      </Link>
      <div className="hidden md:flex flex-row justify-center items-center gap-5">
        <Socials />
        <Link to={'/mycv'} className="Linkme">
          Explore
        </Link>
        {/* <>
          {theme == "dark" ? (
            <MdModeNight  className='text-2xl cursor-pointer' onClick={toggleTheme} />
          ): (
            <MdOutlineLightMode  className='text-2xl cursor-pointer'onClick={toggleTheme}  />
          )}
        </> */}
      </div>
      <div className="flex flex-row justify-center items-center md:hidden p-0 m-0 w-fit">
      {/* <>
          {theme == "dark" ? (
            <MdModeNight  className='text-2xl cursor-pointer' onClick={toggleTheme} />
          ): (
            <MdOutlineLightMode  className='text-2xl cursor-pointer'onClick={toggleTheme}  />
          )}
        </> */}
        <MobileMenu />
        </div>
    </nav>
  )
}

export default Navbar
