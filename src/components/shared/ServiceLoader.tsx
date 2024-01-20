import { dotStream } from 'ldrs'

dotStream.register()

const ServiceLoader = () => {

  return (
    <div className="flex  h-screen w-full justify-center items-start mt-5">
        <l-dot-stream
        size="45"
        speed="2" 
        color="teal" 
        ></l-dot-stream>
    </div>
  )
}

export default ServiceLoader
