import { ring2 } from 'ldrs'

ring2.register()

const Imageloader = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
        <l-ring-2
        size="30"
        stroke="1.5"
        stroke-length="0.25"
        bg-opacity="0.1"
        speed="2" 
        color="teal" 
        ></l-ring-2>
    </div>
  )
}

export default Imageloader