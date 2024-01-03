import { motion } from 'framer-motion';
import { NavLink,useLocation } from 'react-router-dom';

import { MyNavLink } from "@/types";
import { sideBarLinks } from "@/constants";
import { useState } from 'react';
import { TbLayoutSidebarLeftExpandFilled, TbLayoutSidebarRightExpandFilled } from 'react-icons/tb';

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
    <nav className="hidden md:flex flex-row md:justify-end lg:justify-between bg-cyan-950 bg-opacity-10 items-center mt-3 px-5 py-2 rounded-full h-fit w-full">
        
       {!menuOpen ? (
        <p className='box-border flex flex-row justify-center font-serif font-semibold gap-2'>close navbar <TbLayoutSidebarLeftExpandFilled onClick={toggleMenu} className="text-2xl rounded-full bg-cyan-200 p-1 cursor-pointer"  /></p>
        
       ) : (
        <p className='box-border flex flex-row justify-center font-serif font-semibold gap-2'>Open Navigation<TbLayoutSidebarRightExpandFilled onClick={toggleMenu} className="text-2xl rounded-full bg-cyan-200 p-1 cursor-pointer"/></p>
       )}
     {menuOpen || (
         <motion.ul 
         className="flex flex-row gap-[15px] w-fit">
          {/* <h1 className="welcome_text">WELCOME TO MY WORKSPACE </h1> */}
         {sideBarLinks.map((link: MyNavLink) => {

         const isActive = pathname === link.route;

         return (
           <li key={link.label} className="link_side">
               <NavLink 
               to={link.route}
               className={`flex flex-row gap-3 text-slate-700 bg-cyan-950 bg-opacity-40 p-3 text-xs rounded-md w-full ${isActive && "outline-double outline-2 outline-cyan-300"}`}>
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
