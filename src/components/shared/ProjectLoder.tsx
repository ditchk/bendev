import { waveform } from 'ldrs'

waveform.register()


const ProjectLoder = () => {
  return (
    <div className='flex fle-1 justify-center items-center h-screen w-full bg-transparent backdrop-blur-md'>
      <l-waveform
      size="50"
      speed="1" 
      color="#027d8b" 
    ></l-waveform>
  </div>
  )
}

export default ProjectLoder