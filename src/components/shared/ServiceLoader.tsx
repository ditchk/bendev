import { ping } from 'ldrs'

ping.register()

const ServiceLoader = () => {

  return (
    <div>
        <l-ping
        size="45"
        speed="2" 
        color="black" 
        ></l-ping>
    </div>
  )
}

export default ServiceLoader
