import { reuleaux } from 'ldrs'

reuleaux.register()

// Default values shown


const Homepageloader = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 w-fit h-screen m-5 p-10 animate-in fade-in-20 duration-500'>
         <div className="flex relative justify-center items-center">
          <small className="absolute text-center font-serif">secure</small>
          <l-reuleaux
          size="70"
          stroke="2"
          stroke-length="0.25"
          bg-opacity="0.1"
          speed="1.5" 
          color="black" 
          ></l-reuleaux>
         </div>
    </div>
    
  )
}

export default Homepageloader
