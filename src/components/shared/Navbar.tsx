import { Link } from 'react-router-dom';
import Socials from './Socials';
import MobileMenu from './MobileMenu';
const Navbar = () => {


  return (
    <nav className="z-50 flex flex-row justify-between gap-10 w-full h-max md:bg-transparent md:backdrop-blur top-0 sticky shadow-md shadow-slate-400 py-2 px-4 bg-white md:bg-opacity-5">
      <Link 
      to={'/'}
      className="flex flex-row justify-center items-center gap-2" 
      
      >
        <img src="/assets/images/benpwspace.png" alt="" width={50}/>
        <h1 className="text-center text-xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-br from-black via-cyan-800 to-violet-700">BENSWORKSPACE</h1>
      </Link>
      <div className="hidden md:flex flex-row">
        <h1 className="text-center text-black text-xl p-3 font-serif">lets talk!</h1>
        <Socials />
        <Link to={'/mycv'} className="Linkme md:hidden">
          LEARN MORE
        </Link>  
      </div>
      <div className="flex justify-center items-center md:hidden p-0 m-0 w-fit">
        <MobileMenu />
        </div>
    </nav>
  )
}

export default Navbar
