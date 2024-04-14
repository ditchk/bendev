import { Models } from "appwrite"
import Truncate from "../truncate/Truncate"
import { Link } from "react-router-dom"
import { multiFormatDateString } from "@/constants"
import TruncateTitle from "../truncate/TruncateTitle"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import BlogStats from "./BlogStats"


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
            <Link to={`/en/blogs/${blog.title}/${blog.$id}`}>
                <TruncateTitle text={blog.title} maxLength={30} />
            </Link>
            <ul className="Hastags">
                {blog.tags.map((tag: string) => (
                    <li className="hashTag">
                        #{tag}
                    </li>
                ))}
            </ul>
            <Truncate text={blog.body} maxLength={150} />
            <div className="flex flex-row justify-between items-center gap-3 w-full h-fit">
                <Link to={`/en/blogs/${blog.title}/${blog.$id}`} reloadDocument className="BlogLink">Read more</Link>
                <BlogStats blog={blog} />
            </div>
        </div>
        <div className="CReactorInfo">
         <div className="flex flex-row justify-center items-center w-fit h-fit gap-2">
            <Link to={`/profile/${blog?.admin.$id}`} className="ProfileLink">
                <img src={blog?.admin.imageUrl} alt="" className="rounded-full w-8 h-8 p-1 shadow-inner"/>
                
            </Link>
            <small className="text-[8px] text-slate-400 font-bold">@{blog.admin.username}</small>
         </div>
         <div className="CreatedAt">
            <div>
                <p className="creatorName">Created by {blog.admin.name}</p>
            </div>
            <p className="CreatedAtText">{multiFormatDateString(blog.$createdAt)}</p>
         </div>
        </div>
    </motion.div>
  )
}

export default BlogpostBox