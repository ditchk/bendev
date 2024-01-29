import { BsGraphUpArrow } from "react-icons/bs";
import { CiMicrochip } from "react-icons/ci";
import { SiGoogleads } from "react-icons/si";
import { SiAdobecreativecloud } from "react-icons/si";
import { Button } from "../ui/button";



const IconDump = () => {
  return (
    <section className="flex flex-col w-full h-full">
        <div className="m-2 ">
            <h1 className=" text-lg md:text-2xl text-black text-center font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-500 via-emerald-500 to-red-300">Crafting Digital Masterpieces, One Pixel at a Time</h1>
        <div className="flex justify-center w-full h-full mt-5">
          <Button className="custom-button" style={{background: "radial-gradient(25% 36.7838% at 93.425% 45.2022%, rgb(0, 153, 255) 0%, rgba(255, 255, 255, 0) 100%); filter: blur(10px); border-radius: 34.6179% / 181.9%; transform: translate3d(-2.44909px, 0px, 0px); transform-origin: 50% 50% 0px;"}}>Talk to me on our 24/7 live chat!</Button>
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
