import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import Socials from './Socials';
import MobileMenu from './MobileMenu';
const Navbar = () => {


  return (
    <nav className="flex flex-row justify-between w-full h-max md:bg-transparent lg:backdrop-blur top-0 sticky shadow-md shadow-slate-400 py-2 px-4 bg-white md:bg-opacity-5">
      <Link to={'/'} >
        <img src="/assets/images/benswsp.png" alt="" width={200}/>
      </Link>
      <div className="hidden md:flex flex-row">
        <h1 className="text-center text-black text-xl p-3 font-serif">lets talk!</h1>
        <Socials />
        <Button className="outline_btn">
          LEARN MORE
        </Button>
        
      </div>
      <div className="flex justify-center items-center md:hidden p-0 m-0 w-fit">
        <MobileMenu />
        </div>
    </nav>
  )
}

export default Navbar
