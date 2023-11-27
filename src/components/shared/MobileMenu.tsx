import React, { useEffect, useState } from 'react';
import { sideBarLinks } from '@/constants';
import { MyNavLink } from '@/types';
import { NavLink, useLocation, } from 'react-router-dom';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { MdOutlineClose } from "react-icons/md";
import Socials from './Socials';



const MobileMenu: React.FC = () => {
 const [menuOpen, setMenuOpen] = useState(false);
 const { pathname } = useLocation();
 const [showNavbar, setShowNavbar] = useState(true);

 useEffect(() => {
  if (showNavbar) {
    const timer = setTimeout(() => {
      setShowNavbar(false);
    }, 3000);
    return () => clearTimeout(timer);
  }
}, [showNavbar]);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
 };

 const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
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
        className={`menubar ${showNavbar ? '' : 'hidden'}`}
       >
       {sideBarLinks.map((link: MyNavLink) => {

         const isActive = pathname === link.route;

         return (
           <motion.li 
           key={link.label}
           variants={variants}
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.95 }} 
           className="links"
           >
               <NavLink 
               to={link.route}
               className={`flex flex-row gap-3 w-52 text-slate-600 outline outline-1 outline-cyan-200 p-2 text-base font-serif shadow-inner bg-white shadow-slate-400 rounded-md ${isActive && "outline-double outline-2 outline-cyan-300"}`}>
                 {link.label}
             </NavLink>
           </motion.li>
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