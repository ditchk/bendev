import { lineSpinner } from 'ldrs'

lineSpinner.register()

// Default values shown

const Homepageloader = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 w-fit h-fit rounded-full  m-5 p-5 animate-in fade-in-20 duration-500'>
        <div className='flex flex-col justify-center items-center gap-3'>
        <l-line-spinner
          size="40"
          stroke="3"
          speed="2" 
          color="white" 
        ></l-line-spinner>
        <small className='text-base font-sans text-white'>Please wait...</small>
        </div>
    </div>
    
  )
}

export default Homepageloader
