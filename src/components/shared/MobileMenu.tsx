import React, { useState } from 'react';
import { sideBarLinks } from '@/constants';
import { MyNavLink } from '@/types';
import { NavLink, useLocation } from 'react-router-dom';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';



const MobileMenu: React.FC = () => {
 const [menuOpen, setMenuOpen] = useState(false);
 const { pathname } = useLocation();

 const toggleMenu = () => {
    setMenuOpen(!menuOpen);
 };

 return (
    <nav className="MobileMenu">
      <button onClick={toggleMenu}>
            <HiOutlineMenuAlt1 className="text-5xl text-slate-900 bg-gradient-to-t from-cyan-300 via-white rounded-full p-1 shadow-inner shadow-black outline outline-2 outline-cyan-200" />
          </button>
      {menuOpen && (
       <ul className="menubar">
       {sideBarLinks.map((link: MyNavLink) => {

         const isActive = pathname === link.route;

         return (
           <li key={link.label} className="links">
               <NavLink 
               to={link.route}
               className={`flex flex-row gap-3 text-slate-600 outline-dashed outline-1 outline-slate-600 p-2 text-base font-serif shadow-inner shadow-slate-400 rounded-md w-full ${isActive && "outline-double outline-2 outline-cyan-300"}`}>
                 {link.label}
             </NavLink>
           </li>
         )
       })}
     </ul>
      )}
    </nav>
 );
};

export default MobileMenu;