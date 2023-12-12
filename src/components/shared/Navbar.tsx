import { Link } from 'react-router-dom';
import Socials from './Socials';
import MobileMenu from './MobileMenu';


const Navbar = () => {

  // changeNavbarColor.ts

  window.onscroll = function (): void {
    if (document.documentElement.scrollTop > 50) {
      (document.getElementById("navbar") as HTMLElement).classList.add("scrolled");
    } else {
      (document.getElementById("navbar") as HTMLElement).classList.remove("scrolled");
    }
  };

  return (
    <nav id='navbar' className="z-50 flex flex-row justify-between gap-10 w-full shadow-md shadow-slate-400 animate-in slide-in-from-bottom-10 h-max md:bg-transparent md:backdrop-blur top-0 sticky py-2 px-4 bg-white md:bg-opacity-5 duration-1000">
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
        <Link to={'/mycv'} className="Linkme">
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
