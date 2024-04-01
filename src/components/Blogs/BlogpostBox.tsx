import { Models } from "appwrite"
import Truncate from "../truncate/Truncate"
import { Link } from "react-router-dom"
import { formatDate } from "@/constants"
import TruncateTitle from "../truncate/TruncateTitle"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"


type BlogBoxtProps = {
    blog: Models.Document
}

const BlogpostBox = ({ blog }: BlogBoxtProps) => {

    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {

      }, [isInView])

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
            <div className="flex flex-1 justify-center items-center overflow-hidden w-auto h-40">
                <img src={blog.imageUrl || '/assets/images/broken-image.png'} alt={blog.title} className="Blog-image" />
            </div>
            <Link to={`/blogs/${blog.$id}`}>
                <TruncateTitle text={blog.title} maxLength={35} />
            </Link>
            <Truncate text={blog.body} maxLength={100} />
            <ul className="flex flex-row text-xs gap-2 justify-start items-start w-full font-extralight font-serif text-gray-500 rounded-xl outline-dashed outline-1 outline-slate-400 p-1">
                {blog.tags.map((tag: string) => (
                    <li>
                        #{tag}
                    </li>
                ))}
            </ul>
        </div>
        <div className="CReactorInfo">
         <div className="flex flex-col justify-center gap-2 items-start">
            <Link to={`/profile/${blog.admin.$id}`} className="shadow-sm shadow-teal-500 rounded-full">
                <img src={blog?.admin.imageUrl} alt="" className="rounded-full w-8 h-8 outline-dashed outline-2 outline-slate-500 p-1"/>
            </Link>
            <div>
                <p className="creatorName">Created by {blog.admin.name}</p>
            </div>
         </div>
         <div className="CreatedAt">
            <p className="CreatedAtText">{formatDate(blog.$createdAt)}</p>
         </div>
        </div>
    </motion.div>
  )
}

export default BlogpostBox