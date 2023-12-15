import { NavLink,useLocation } from 'react-router-dom';

import { MyNavLink } from "@/types";
import { sideBarLinks } from "@/constants";

const Sidebar = () => {
    const { pathname } = useLocation();

    window.onscroll = function (): void {
      if (document.documentElement.scrollTop > 50) {
        (document.getElementById("sidebar") as HTMLElement).classList.add("scrolled");
      } else {
        (document.getElementById("sidebar") as HTMLElement).classList.remove("scrolled");
      }
    };
  return (
    <nav id='sidebar' className="hidden md:flex flex-row md:justify-end lg:justify-between bg-cyan-950 bg-opacity-10 items-center mt-3 px-5 py-5 h-fit w-full">
       <h1 className="welcome_text">WELCOME TO MY WORKSPACE</h1>
        <ul className="flex flex-row gap-[15px] w-fit">
        {sideBarLinks.map((link: MyNavLink) => {

          const isActive = pathname === link.route;

          return (
            <li key={link.label} className="link_side">
                <NavLink 
                to={link.route}
                className={`flex flex-row gap-3 text-white bg-gradient-to-tl from-sky-900 via-black to-cyan-600 p-2 text-base font-serif rounded-md w-full ${isActive && "outline-double outline-2 outline-cyan-300"}`}>
                  {link.label}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Sidebar
