import { NavLink,useLocation } from 'react-router-dom';

import { MyNavLink } from "@/types";
import { sideBarLinks } from "@/constants";

const Sidebar = () => {
    const { pathname } = useLocation();
  return (
    <nav className="flex flex-row justify-between items-center mt-3 px-5 py-5 bg-white h-fit outline sticky top-0 w-full outline-1 outline-slate-300">
       <h1 className="welcome_text">WELCOME TO MY WORKSPACE</h1>
        <ul className="flex flex-row gap-[15px] w-fit">
        {sideBarLinks.map((link: MyNavLink) => {

          const isActive = pathname === link.route;

          return (
            <li key={link.label} className="link_side">
                <NavLink 
                to={link.route}
                className={`flex flex-row gap-3 text-slate-600 outline-dashed outline-1 outline-slate-600 p-2 text-base font-serif shadow-inner shadow-slate-400 rounded-md w-full ${isActive && "outline-double outline-2 outline-cyan-300"}`}>
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
