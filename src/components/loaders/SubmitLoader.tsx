import { mirage } from 'ldrs'

mirage.register()

// Default values shown


const SubmitLoader = () => {

  return (
    <div>
        <l-mirage
        size="50"
        speed="2.5" 
        color="gray" 
        ></l-mirage>
    </div>
  )
}

export default SubmitLoader
