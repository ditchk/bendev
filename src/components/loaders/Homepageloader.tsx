import { bouncy } from 'ldrs'
import Socials from '../shared/ContactIcons'

bouncy.register()

const Homepageloader = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 w-full md:w-1/2 h-fit outline outline-2 outline-white m-5 p-5 bg-gradient-to-b rounded-3xl from-cyan-950 90% via-slate-300 to-purple-200 animate-in slide-in-from-bottom-20 duration-1000'>
       <div className='flex flex-col gap-1 justify-center items-center'>
        <img src="/assets/images/homepage.png" alt="" width={150} className="object-cover"/>
        <h2 className="logo-text text-shadow">THANK YOU FOR VISITING BENSWORKSPACE</h2>
        <p className="text-xs font-serif font-bold text-slate-700 text-shadow">I'm honoured to have you here</p>
        <small className="text-xs sm:text-sm md:text-base text-slate-700 text-shadow">Crafting Digital Masterpieces, One Pixel at a Time.</small>
        <Socials />
       </div>
        <div className='flex flex-row justify-center items-center gap-3'>
            <h3 className="text-sm text-stone-100">please wait</h3>
            <l-bouncy
            size="20"
            speed="1.95" 
            color="white" 
            ></l-bouncy>
        </div>
    </div>
    
  )
}

export default Homepageloader
