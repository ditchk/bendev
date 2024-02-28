import { motion } from 'framer-motion';
import { NavLink,useLocation } from 'react-router-dom';
import { MyNavLink } from "@/types";
import { sideBarLinks } from "@/constants";
import { useState } from 'react';
import { CgMenuGridR } from "react-icons/cg";
import { MdClose } from 'react-icons/md';


const Sidebar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const [hidden, setIshidden] =useState(true);

    const hiddenNav = () => {
      setIshidden(hidden)
    }

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
    <motion.nav
    onScroll={hiddenNav} 
    animate={{ x: 0 }}
    transition={{ delay: 0 }}   
    className="hidden md:flex flex-col md:justify-center items-center bg-transparent mt-28 p-1 gap-5 shadow-2xl shadow-fuchsia-400 h-fit w-fit outline outline-2 backdrop-blur-sm outline-white rounded-r-lg fixed z-50 animate-in slide-in-from-left-24 snap-always"
    >
       {!menuOpen ? (
        <CgMenuGridR className="flex justify-end left-10 w-fit bg-gradient-to-t from-cyan-950 to-cyan-200 p-1 rounded-3xl cursor-pointer text-xl animate-in rotate-180 slide-in-from-left-10 duration-1000" onClick={toggleMenu} />
       ) : (
        <MdClose onClick={toggleMenu} className="text-2xl text-white rounded-full  p-1 cursor-pointer bg-gradient-to-t from-red-950 to-cyan-200 animate-in rotate-180 slide-in-from-left-20 duration-1000"/>
       )}
     {menuOpen && (
         <ul 
          className="flex flex-col gap-2 w-fit p-1 animate-in slide-in-from-left-32"
         >
         {sideBarLinks.map((link: MyNavLink) => {
         const isActive = pathname === link.route;
         return (
           <motion.li 
            key={link.label} 
            className="link_side" onClick={toggleMenu}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }} 
           >
               <NavLink 
               to={link.route}
               reloadDocument
               className={`flex flex-row w-full gap-3 p-1 text-xs font-serif text-center text-white outline outline-1 outline-cyan-50 bg-opacity-80 bg-black rounded-md ${isActive && "bg-cyan-950 text-sm"}`}>
                 {link.label}
             </NavLink>
           </motion.li>
         )
       })}
     </ul>
     )}
    </motion.nav>
  )
}

export default Sidebar
