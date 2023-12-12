import React, { useEffect, useState } from 'react';
import { sideBarLinks } from '@/constants';
import { MyNavLink } from '@/types';
import { NavLink, useLocation, } from 'react-router-dom';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { MdOutlineClose } from "react-icons/md";
// import Socials from './Socials';



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
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

 return (
    <nav className="MobileMenu" onClick={hideNavbar}>
      <button onClick={toggleMenu}>
            {!menuOpen ? (
              <HiOutlineMenuAlt1 className="text-5xl text-slate-900 bg-gradient-to-t from-cyan-300 via-white rounded-xl p-1 shadow shadow-slate-400 outline outline-1 outline-cyan-200" />
            ) : (
              <MdOutlineClose className="text-5xl text-violet-900 bg-gradient-to-t from-cyan-300 via-white rounded-xl p-1 shadow shadow-slate-400 outline outline-1 outline-cyan-200" />
            )}
        </button>
      {menuOpen && (
       <motion.ul
        animate={{ y: 60 }}
        transition={{ delay: 0 }} 
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
               onClick={hideNavbar}
               className={`w-24 text-white outline outline-1 outline-cyan-200 p-1 text-base text-center font-serif shadow-inner bg-gradient-to-l from-sky-800 via-slate-700 to-violet-950 shadow-slate-400 rounded-md ${isActive && "outline-double outline-2 outline-cyan-300"}`}>
                 {link.label}
             </NavLink>
           </motion.li>
         )
       })}
       {/* <h1 className='text-xl font-medium text-violet-950 font-serif'>Find me on social media</h1>
       <Socials /> */}
     </motion.ul>
      )}
      
    </nav>
 );
};

export default MobileMenu;