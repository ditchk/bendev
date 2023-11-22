import  Sidebar  from './Sidebar'
import { Button } from '../ui/button';
import Socials from './Socials';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { sideBarLinks } from '@/constants';
import { MyNavLink } from '@/types';
import { NavLink, useLocation } from 'react-router-dom';


const Navbar = () => {

  return (
    <nav className="flex flex-row justify-between w-full h-max bg-transparent backdrop-blur top-0 sticky shadow-md shadow-slate-400 py-2 px-4 bg-white bg-opacity-5">
      <img src="/assets/images/benswsp.png" alt="" width={200}/>
      <div className="hidden md:flex flex-row">
        <h1 className="text-center text-black text-xl p-3 font-serif">lets talk!</h1>
        <Socials />
        <Button className="outline_btn">
          LEARN MORE
        </Button>
        
      </div>
      <div className="flex justify-center items-center md:hidden p-0 m-0 w-fit">
          <button onClick={() => {}}>
            <HiOutlineMenuAlt1 className="text-5xl text-slate-900 bg-gradient-to-t from-cyan-300 via-white rounded-full p-1 shadow-inner shadow-black outline outline-2 outline-cyan-200" />
          </button>
        </div>
    </nav>
  )
}

export default Navbar
