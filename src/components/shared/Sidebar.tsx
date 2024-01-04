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

    // const ref = useRef(null)
    // const isInView = useInView(ref)

    // useEffect(() => {
        
    //   }, [isInView])

      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
     };

  return (
    <nav className="hidden md:flex flex-col md:justify-center items-center bg-cyan-950 bg-opacity-70 mt-3 px-2 gap-5 py-2 h-fit w-fit outline outline-1 outline-white rounded-r-lg fixed z-40 animate-in slide-in-from-left-24">
       
       {!menuOpen ? (
        <MdClose className="flex justify-end left-10 w-full bg-gradient-to-t from-cyan-950 to-cyan-200 p-1 rounded-3xl cursor-pointer text-xl" onClick={toggleMenu} />
       ) : (
        <CgMenuGridR onClick={toggleMenu} className="text-2xl rounded-full bg-gradient-to-t from-cyan-950 to-cyan-200 p-1 cursor-pointer"/>
       )}
     {menuOpen || (
         <motion.ul 
         className="flex flex-col gap-[15px] w-fit">
         {sideBarLinks.map((link: MyNavLink) => {
         const isActive = pathname === link.route;
         return (
           <li key={link.label} className="link_side">
               <NavLink 
               to={link.route}
               className={`flex flex-row gap-3 p-3 text-xs text-white hover:bg-slate-200 bg-gradient-to-t from-cyan-950 to-cyan-200 rounded-md w-full duration-1000 ${isActive && "bg-cyan-200"}`}>
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
