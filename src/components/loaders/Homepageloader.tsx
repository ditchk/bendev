import { infinity } from 'ldrs'

infinity.register()


const Homepageloader = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 w-fit h-fit m-5 p-10 animate-in fade-in-20 duration-500'>
        <div className='flex flex-col justify-center items-center gap-1'>
         <div className="flex relative justify-center items-center">
          <l-infinity
          size="55"
          stroke="4"
          stroke-length="0.15"
          bg-opacity="0.1"
          speed="1.3" 
          color="teal" 
        ></l-infinity>
         </div>
         {/* <small className="text_title text-shadow">Crafting Digital Masterpieces, One Pixel at a Time.</small> */}
         {/* <Socials /> */}
        </div>
    </div>
    
  )
}

export default Homepageloader
