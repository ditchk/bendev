import { motion, useInView } from 'framer-motion';
import { NavLink,useLocation } from 'react-router-dom';

import { MyNavLink } from "@/types";
import { sideBarLinks } from "@/constants";
import { useEffect, useRef } from 'react';

const Sidebar = () => {
    const { pathname } = useLocation();

    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        console.log("Element is in view: ", isInView)
      }, [isInView])

  return (
    <nav className="hidden md:flex flex-row md:justify-end lg:justify-between bg-cyan-950 bg-opacity-10 items-center mt-3 px-5 py-3 h-fit w-full">
       <h1 className="welcome_text">WELCOME TO MY WORKSPACE</h1>
        <motion.ul 
          style={{
            transform: isInView ? "none" : "translateY(-20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          ref={ref}
          className="flex flex-row gap-[15px] w-fit">
          {sideBarLinks.map((link: MyNavLink) => {

          const isActive = pathname === link.route;

          return (
            <li key={link.label} className="link_side">
                <NavLink 
                to={link.route}
                className={`flex flex-row gap-3 text-slate-700 bg-cyan-950 bg-opacity-40 p-2 text-base font-serif rounded-md w-full ${isActive && "outline-double outline-2 outline-cyan-300"}`}>
                  {link.label}
              </NavLink>
            </li>
          )
        })}
      </motion.ul>
    </nav>
  )
}

export default Sidebar
