import { ring2 } from 'ldrs'
import { TsPaticles } from '../particles/TsParticles'


ring2.register()


const Homepageloader = () => {
  return (
    <div className='flex flex-col relative justify-center items-center gap-5 w-full h-screen animate-in fade-in-20 duration-500'>
      <TsPaticles />
          <div className="flex flex-1 absolute justify-center items-center">
            <l-ring-2
              size="80"
              stroke="1"
              stroke-length="0.25"
              bg-opacity="0.2"
              speed="2" 
              color="teal" 
            ></l-ring-2>
          <img src="/assets/images/logo.png" alt="" width={50} className="absolute" />
          </div>
        <span className="w-full text-center absolute top-[34rem] text-xs font-mono font-bold text-teal-800 h-fit underline underline-offset-2">Version 2.1.0 bswp &#169; 2023</span>
    </div>
    
  )
}

export default Homepageloader
