import { waveform } from 'ldrs'

waveform.register()


const ProjectLoder = () => {
  return (
    <div className='flex flex-1 justify-center items-center min-h-[500px] w-full bg-transparent z-0'>
      <l-waveform
      size="50"
      speed="1" 
      color="#027d8b"
    ></l-waveform>
  </div>
  )
}

export default ProjectLoder