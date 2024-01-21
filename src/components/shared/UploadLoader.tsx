import { dotStream } from 'ldrs'

dotStream.register()


function UploadLoader() {
  return (
    <div className='flex flex-1 justify-center items-center w-10 p-5'>
        <l-dot-stream
        size="34"
        speed="0.9" 
        color="white" 
        ></l-dot-stream>
    </div>
  )
}

export default UploadLoader