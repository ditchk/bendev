import { useState } from "react";
import { useToast } from "../ui/use-toast";


const BlogStats = () => {

  const [likes, setLikes] = useState(0)
  const { toast } = useToast()
  const user = true

  const setNewLikes = () => {
    setLikes( 0 + 1 )
  }

  if(!user) 
    toast({
    title: "Unauthorized action"
  })

  return (
    <div className="flex flex-row justify-center items-center">
      <img 
        src="/assets/images/liked.png"
        alt="" width={20} className="cursor-pointer hover:filter hover:sepia"
        onClick={setNewLikes} 
        />
        <p className="text-sm">{likes}</p>
    </div>
  )
}

export default BlogStats
