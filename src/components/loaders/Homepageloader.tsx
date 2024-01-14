import { ring2 } from 'ldrs'
import Socials from '../shared/Socials'

ring2.register()

// Default values shown

const Homepageloader = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 w-fit h-fit m-5 p-10 animate-in fade-in-20 duration-500'>
        <div className='flex flex-col justify-center items-center gap-1'>
         <div className="flex relative justify-center items-center">
          <img src="/assets/images/logo.png" alt="" width={80} className="absolute"/>
          <l-ring-2
            size="150"
            stroke="1"
            speed="3" 
            color="teal" 
          ></l-ring-2>
         </div>
         <h1 className="text_title text-shadow">Crafting Digital Masterpieces, One Pixel at a Time.</h1>
         <Socials />
        </div>
    </div>
    
  )
}

export default Homepageloader
