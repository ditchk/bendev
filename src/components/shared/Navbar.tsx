import { Link } from 'react-router-dom';
import Socials from './Socials';
import MobileMenu from './MobileMenu';
import { useEffect, useState } from 'react';
import { MdModeNight, MdOutlineLightMode } from 'react-icons/md';


const Navbar = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  
  
  // Function to switch between light and dark theme.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light")
      document.querySelectorAll(".navbar").forEach((navbar) => {
        navbar.classList.add("navbar-dark");
        navbar.classList.remove("navbar-light");
      });
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      document.querySelectorAll(".navbar").forEach((navbar) => {
        navbar.classList.add("navbar-light");
        navbar.classList.remove("navbar-dark");
      document.querySelectorAll(".Button").forEach((Button) => {
        Button.classList.add("Button-light")
        Button.classList.remove("Button-dark")
      })
      });
    }
  }, [theme]);
  return (
    <nav id='navbar' className={`flex flex-row justify-between gap-14 w-full shadow shadow-slate-300 bg-cyan-950 rounded-b-xl border-b-2 border-white bg-opacity-10 backdrop-blur-lg animate-in slide-in-from-top-10 h-max top-0 sticky py-1 px-3 duration-1000 z-50 navbar-${''}`}>
      <Link 
      to={'/'}
      className="flex flex-row justify-center items-center gap-2"
      >
        <img src="/assets/images/logo.png" alt="" width={50} className='ml-1'/>
        <h1 className="logo-text">Bensworkspace</h1>
      </Link>
      <div className="hidden md:flex flex-row justify-center items-center gap-5">
        <Socials />
        <Link to={'/mycv'} className="Linkme">
          Explore
        </Link>
        <>
          {theme == "dark" ? (
            <MdModeNight  className='text-2xl cursor-pointer' onClick={toggleTheme} />
          ): (
            <MdOutlineLightMode  className='text-2xl cursor-pointer'onClick={toggleTheme}  />
          )}
        </>
      </div>
      <div className="flex flex-row justify-center items-center md:hidden p-0 m-0 w-fit">
      <>
          {theme == "dark" ? (
            <MdModeNight  className='text-2xl cursor-pointer' onClick={toggleTheme} />
          ): (
            <MdOutlineLightMode  className='text-2xl cursor-pointer'onClick={toggleTheme}  />
          )}
        </>
        <MobileMenu />
        </div>
    </nav>
  )
}

export default Navbar
