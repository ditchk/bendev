import { BsGraphUpArrow } from "react-icons/bs";
import { CiMicrochip } from "react-icons/ci";
import { SiGoogleads } from "react-icons/si";
import { SiAdobecreativecloud } from "react-icons/si";
import { Button } from "../ui/button";
import { FaAnglesDown } from "react-icons/fa6";
import AnimatedSkills from "../skills/AnimatedSkills";
import { useScroll } from "framer-motion";



const IconDump = () => {
  return (
    <section className="flex flex-col w-full h-full my-4">
      <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="missionText">Crafting Digital Masterpieces, One Pixel at a Time</h1>
            <Button className="custom_button rounded-full animate-bounce">Talk to me now! use the live chat!</Button>
            <FaAnglesDown className="text-xl opacity-20 mt-5 animate-bounce" onClick={useScroll} />
            <div className="md:hidden flex flex-col w-full justify-center items-center gap-2">
              <h1 className="adssOnTitle">Expert in</h1>
              <AnimatedSkills />
            </div>
      </div>
        <div className="grid grid-cols-6 justify-center md:items-center md:gap-0 gap-10 h-full w-screen opacity-70">
        <div>
            <CiMicrochip className="absolute text-9xl bg-gradient-to-bl from-violet-500 via-emerald-500 rotate-12 to-red-300 rounded-2xl opacity-10" />
        </div>
        <div>
            <SiGoogleads  className="hidden md:flex absolute text-9xl p-2 -rotate-12 text-white rounded-2xl bg-gradient-to-bl from-violet-500 via-emerald-500 to-red-300 opacity-10" />
        </div>
        <div>
            <SiAdobecreativecloud className="hidden md:flex absolute text-9xl p-2 rotate-45 text-white rounded-2xl bg-gradient-to-bl from-violet-500 via-emerald-500 to-red-300 opacity-10" />
        </div>
        <div>
            <BsGraphUpArrow  className="absolute text-9xl bg-gradient-to-bl from-violet-500 via-emerald-500 rotate-12 to-red-300 rounded-2xl p-1 opacity-10" />
        </div>
      </div>
    </section>
  )
}

export default IconDump
