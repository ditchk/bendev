import { dotPulse } from 'ldrs'

dotPulse.register()

const Imageloader = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <l-dot-pulse
        size="43"
        speed="1.3" 
        color="black" 
      ></l-dot-pulse>
    </div>
  )
}

export default Imageloader