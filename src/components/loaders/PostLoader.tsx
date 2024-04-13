import { lineSpinner } from 'ldrs'


const PostLoader = () => {
    
lineSpinner.register()

  return (
    <div className="flex flex-1 justify-center items-start mt-20 w-full min-h-screen">
        <l-line-spinner
        size="40"
        stroke="2"
        speed="1.5" 
        color="black" 
        ></l-line-spinner>
    </div>
  )
}

export default PostLoader