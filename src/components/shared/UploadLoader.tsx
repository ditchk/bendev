import { spiral } from 'ldrs'

spiral.register()


function UploadLoader() {
  return (
    <div className='flex flex-1 justify-center items-center w-10 p-5'>
        <l-spiral
        size="34"
        speed="0.9" 
        color="white" 
        ></l-spiral>
    </div>
  )
}

export default UploadLoader