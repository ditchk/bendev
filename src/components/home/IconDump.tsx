import { CiMicrochip } from "react-icons/ci";
import { SiGoogleads } from "react-icons/si";
import { SiAdobecreativecloud } from "react-icons/si";



const IconDump = () => {
  return (
    <section className="flex flex-col w-full h-full">
        <div className="m-2 ">
            <h1 className="text-2xl text-black font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-500 via-emerald-500 to-red-300">Crafting Digital Masterpieces, One Pixel at a Time</h1>
        </div>
        <div className="grid grid-cols-6 justify-center md:gap-0 gap-36 items-start md:items-end h-full w-full opacity-70">
        <div>
            <CiMicrochip className="absolute text-9xl bg-gradient-to-bl from-violet-500 via-emerald-500 rotate-12 to-red-300 rounded-2xl mr-24 md:mr-0 md:ml-10 opacity-30" />
        </div>
        <div>
            <SiGoogleads  className="absolute text-9xl p-2 -rotate-12 text-white rounded-2xl bg-gradient-to-bl from-violet-500 via-emerald-500 to-red-300 opacity-30" />
        </div>
        <div>
            <SiAdobecreativecloud className="absolute text-9xl p-2 rotate-45 text-white rounded-2xl bg-gradient-to-bl from-violet-500 via-emerald-500 ml-9 to-red-300 opacity-30" />
        </div>
      </div>
    </section>
  )
}

export default IconDump
