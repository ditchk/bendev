import { Models } from "appwrite"
import Truncate from "../truncate/Truncate"
import { Link } from "react-router-dom"
import { formatDate } from "@/constants"
import TruncateTitle from "../truncate/TruncateTitle"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"


type BlogBoxtProps = {
    blog: Models.Document
}

const BlogpostBox = ({ blog }: BlogBoxtProps) => {

    const ref = useRef(null)
    const isInView = useInView(ref)


  return (
    <motion.div 
    
        className="BlogBox"
        style={{
            transform: isInView ? "none" : "translateY(10px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.7, 0.55, 0.65, 1) 0.5s"
        }}
        ref={ref}
    >
        <div className="Blog-Items">
            <div className="flex flex-1 justify-center items-center">
                <img src={blog.imageUrl || '/assets/images/broken-image.png'} alt={blog.title} className="Blog-image" />
            </div>
            <Link to={`/blogs/${blog.$id}`}>
                <TruncateTitle text={blog.title} maxLength={30} />
            </Link>
            <Truncate text={blog.body} maxLength={100} />
            <ul className="Hastags">
                {blog.tags.map((tag: string) => (
                    <li className="hashTag">
                        #{tag}
                    </li>
                ))}
            </ul>
        </div>
        <div className="CReactorInfo">
         <div className="flex flex-col justify-center gap-2 items-start">
            <Link to={`/profile/${blog.admin.$id}`} className="outline outline-2 outline-slate-100 rounded-full">
                <img src={blog?.admin.imageUrl} alt="" className="rounded-full w-8 h-8 p-1 shadow-inner"/>
            </Link>
            
         </div>
         <div className="CreatedAt">
            <div>
                <p className="creatorName">Created by {blog.admin.name}</p>
            </div>
            <p className="CreatedAtText">{formatDate(blog.$createdAt)}</p>
         </div>
        </div>
    </motion.div>
  )
}

export default BlogpostBox