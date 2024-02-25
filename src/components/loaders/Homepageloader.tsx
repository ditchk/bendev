import { square } from 'ldrs'

square.register()

// Default values shown

const Homepageloader = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 w-fit h-screen m-5 p-10 animate-in fade-in-20 duration-500'>
         <div className="flex relative justify-center items-center">
         <l-square
          size="35"
          stroke="5"
          stroke-length="0.25"
          bg-opacity="0.1"
          speed="1.2" 
          color="black" 
        ></l-square>
        </div>
    </div>
    
  )
}

export default Homepageloader
