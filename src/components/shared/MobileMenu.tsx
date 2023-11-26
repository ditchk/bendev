import React, { useState } from 'react';
import { sideBarLinks } from '@/constants';
import { MyNavLink } from '@/types';
import { NavLink, useLocation } from 'react-router-dom';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { MdOutlineClose } from "react-icons/md";
import Socials from './Socials';



const MobileMenu: React.FC = () => {
 const [menuOpen, setMenuOpen] = useState(false);
 const { pathname } = useLocation();

 const toggleMenu = () => {
    setMenuOpen(!menuOpen);
 };

 return (
    <nav className="MobileMenu">
      <button onClick={toggleMenu}>
            {!menuOpen ? (
              <HiOutlineMenuAlt1 className="text-5xl text-slate-900 bg-gradient-to-t from-cyan-300 via-white rounded-xl p-1 shadow shadow-slate-400 outline outline-1 outline-cyan-200" />
            ) : (
              <MdOutlineClose className="text-5xl text-violet-900 bg-gradient-to-t from-cyan-300 via-white rounded-xl p-1 shadow shadow-slate-400 outline outline-1 outline-cyan-200" />
            )}
        </button>
      {menuOpen && (
       <motion.ul
        animate={{ y: 62 }}
        transition={{ delay: 0 }} 
        className="menubar"
       >
       {sideBarLinks.map((link: MyNavLink) => {

         const isActive = pathname === link.route;

         return (
           <li key={link.label} className="links">
               <NavLink 
               to={link.route}
               className={`flex flex-row gap-3 text-slate-600 outline outline-1 outline-cyan-200 p-2 text-base font-serif shadow bg-white shadow-slate-400 rounded-md w-fit ${isActive && "outline-double outline-2 outline-cyan-300"}`}>
                 {link.label}
             </NavLink>
           </li>
         )
       })}
       <h1 className='text-xl font-medium text-violet-950 font-serif'>Find me on social media</h1>
       <Socials />
     </motion.ul>
      )}
      
    </nav>
 );
};

export default MobileMenu;