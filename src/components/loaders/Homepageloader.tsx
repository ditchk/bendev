import { reuleaux } from 'ldrs'

reuleaux.register()

// Default values shown
import { orbit } from 'ldrs'

orbit.register()

// Default values shown


const Homepageloader = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 w-fit h-screen m-5 p-10 animate-in fade-in-20 duration-500'>
         <div className="flex relative justify-center items-center">
          <l-orbit
            size="35"
            speed="1.5" 
            color="black" 
          ></l-orbit>
        </div>
    </div>
    
  )
}

export default Homepageloader
