import { tailChase } from 'ldrs'

tailChase.register()

const ProjectLoder = () => {
  return (
    <div className='flex flex-1 justify-center items-center min-h-[500px] w-full bg-transparent z-0'>
      <l-tail-chase
      size="35"
      speed="1.75" 
      color="#027d8b"
    ></l-tail-chase>
  </div>
  )
}

export default ProjectLoder