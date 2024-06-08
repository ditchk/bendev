import { quantum } from 'ldrs'

quantum.register()

const ServiceLoader = () => {

  return (
    <div className="flex  h-screen w-full justify-center items-start mt-5">
        <l-quantum
        size="50"
        speed="2" 
        color="teal" 
        ></l-quantum>
    </div>
  )
}

export default ServiceLoader
