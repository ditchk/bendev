import React, { useEffect, useState } from 'react';
import { sideBarLinks } from '@/constants';
import { MyNavLink } from '@/types';
import { NavLink, useLocation, } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { MdOutlineClose } from "react-icons/md";
import Socials from './Socials';



const MobileMenu: React.FC = () => {
 const [menuOpen, setMenuOpen] = useState(false);
 const { pathname } = useLocation();
 const [navbarHidden, setNavbarHidden] = useState(false);


 const hideNavbar = () => {
  setNavbarHidden(true);
};

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setNavbarHidden(true);
    } else {
      setNavbarHidden(false);
    }
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

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
    opacity: 1,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

 return (
    <nav className="MobileMenu transition-all" onClick={hideNavbar} onScroll={hideNavbar}>
            {!menuOpen ? (
              <HiOutlineMenuAlt3 className="text-3xl text-slate-600 outline outline-2 rounded-md outline-slate-600 p-1  bg-transparent transition-transform ease-in-out duration-1000" onClick={toggleMenu}/>
            ) : (
              <MdOutlineClose className="text-3xl text-slate-600 outline outline-2 rounded-md outline-slate-600 p-1  bg-transparent bg-opacity-40 transition-transform ease-in-out duration-1000" onClick={toggleMenu}/>
            )}
      {menuOpen && (
       <motion.ul
        animate={{ y: 60 }}
        transition={{type: "spring", delay: 0 }} 
        className={`menubar ${navbarHidden ? 'navbar hidden' : 'hidden'}`}
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
           onClick={hideNavbar}
           >
               <NavLink 
               to={link.route}
               onClick={toggleMenu}
               reloadDocument
               className={`w-24 text-white outline outline-1 outline-cyan-50 p-1 text-xs text-center bg-opacity-80 bg-black rounded-md ${isActive && "bg-cyan-950 text-sm"}`}>
                 {link.label}
             </NavLink>
            
           </motion.li>
         )
       })}
       <Socials />
     </motion.ul>
      )}
      
    </nav>
 );
};

export default MobileMenu;