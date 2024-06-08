import React from 'react';
import { sideBarLinks, useScrollDirection } from '@/constants';
import { MyNavLink } from '@/types';
import { NavLink, useLocation, } from 'react-router-dom';
import { motion } from 'framer-motion';



const MobileMenu: React.FC = () => {
 const { pathname } = useLocation();
 const navHide = useScrollDirection()

 return (
    <nav className="MobileMenu transition-all" onScroll={e => e.preventDefault()}>
       <motion.ul
        animate={{ x: 0}}
        transition={{type: "spring", delay: 0 }} 
        className={`menubar ${navHide ? 'navbar hidden' : 'hidden'}`}
       >
       {sideBarLinks.map((link: MyNavLink) => {

         const isActive = pathname === link.route;

         return (
           <motion.li 
           key={link.label}
           className="flex"
           >
               <NavLink 
               to={link.route}
               reloadDocument
               className={`w-14 text-white bg-teal-950 outline outline-1 outline-cyan-50 p-1 animate-in zoom-in-125 duration-700 text-xs text-center rounded-full ${isActive && "bg-gradient-to-tl from-black to-teal-600 text-sm"}`}>
                 {link.label}
             </NavLink>
            
           </motion.li>
         )
       })}
       {/* <Socials /> */}
     </motion.ul>
    </nav>
 );
};

export default MobileMenu;