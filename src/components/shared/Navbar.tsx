//@ts-nocheck
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
  function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.style.transition = "0.5s";
        navbar.style.transform = "translateY(-100%)";
    } else {
        navbar.style.transition = "0.5s";
        navbar.style.transform = "translateY(0%)";
    }
}

// When the user scrolls the page, execute the function
window.onscroll = function() {toggleNavbar()};

  return (
    <nav id='navbar' className="z-50 flex flex-row justify-between gap-16 w-full border-b shadow-sm shadow-slate-600 border-slate-400 animate-in slide-in-from-bottom-10 h-max bg-cyan-950 backdrop-blur top-0 sticky py-2 px-4 bg-opacity-10 duration-1000">
      <Link 
      to={'/'}
      className="flex flex-row justify-center items-center gap-2" 
      >
        <img src="/assets/images/logo.png" alt="" width={50} className='ml-3'/>
        <h1 className="text-center text-xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 via-black to-cyan-950">BENSWORKSPACE</h1>
      </Link>
      <div className="hidden md:flex flex-row justify-center items-center">
        <h1 className="text-end text-black text-base w-full lg:text-lg p-3 font-serif">lets talk!</h1>
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
