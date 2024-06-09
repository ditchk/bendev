import { dotPulse } from 'ldrs'

dotPulse.register()

const Imageloader = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <l-dot-pulse
        size="35"
        speed="1.3" 
        color="teal" 
      ></l-dot-pulse>
    </div>
  )
}

export default Imageloader