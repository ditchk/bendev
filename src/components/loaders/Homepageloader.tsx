import { zoomies } from 'ldrs'

zoomies.register()

// Default values shown


const Homepageloader = () => {
  return (
    <div className='flex flex-col justify-center items-baseline gap-5 w-fit h-screen m-5 p-10 animate-in fade-in-20 duration-500'>
        <div className='flex flex-col justify-center items-center gap-1'>
         <div className="flex relative justify-center items-center">
         <l-zoomies
            size="100"
            stroke="4"
            bg-opacity="0.1"
            speed="1.4" 
            color="black" 
          ></l-zoomies>
         </div>
        </div>
    </div>
    
  )
}

export default Homepageloader
