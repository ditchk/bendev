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

      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
     };

     
  return (
    <nav className="hidden md:flex flex-col md:justify-center items-center bg-cyan-950 bg-opacity-70 mt-24 px-2 gap-5 py-2 h-fit w-fit outline outline-1 outline-white rounded-r-lg fixed z-50 animate-in slide-in-from-left-24">
       {!menuOpen ? (
        <MdClose className="flex justify-end left-10 w-fit bg-gradient-to-t from-red-950 to-cyan-200 p-1 rounded-3xl cursor-pointer text-xl" onClick={toggleMenu} />
       ) : (
        <CgMenuGridR onClick={toggleMenu} className="text-2xl rounded-full bg-gradient-to-t from-cyan-950 to-cyan-200 p-1 cursor-pointer"/>
       )}
     {menuOpen || (
         <motion.ul 
         className="flex flex-col gap-[15px] w-fit">
         {sideBarLinks.map((link: MyNavLink) => {
         const isActive = pathname === link.route;
         return (
           <li key={link.label} className="link_side" onClick={toggleMenu}>
               <NavLink 
               to={link.route}
               reloadDocument
               className={`flex flex-row font-sans w-full gap-3 p-1 text-sm text-center text-white hover:bg-slate-200 hover:text-slate-400 bg-cyan-950 bg-opacity-50 outline outline-1 outline-teal-500 rounded-md duration-1000 ${isActive && "shadow shadow-slate-500"}`}>
                 {link.label}
             </NavLink>
           </li>
         )
       })}
     </motion.ul>
     )}
    </nav>
  )
}

export default Sidebar
