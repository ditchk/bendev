import { dotStream } from 'ldrs'

dotStream.register()


function UploadLoader() {
  return (
    <div className='flex justify-center items-center w-16 p-1'>
        <l-dot-stream
        size="34"
        speed="0.9" 
        color="white" 
        ></l-dot-stream>
    </div>
  )
}

export default UploadLoader