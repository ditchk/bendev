import { Models } from "appwrite"
import Truncate from "../truncate/Truncate"
import { Link } from "react-router-dom"
import { formatDate } from "@/constants"
import TruncateTitle from "../truncate/TruncateTitle"


type BlogBoxtProps = {
    blog: Models.Document
}

const BlogpostBox = ({ blog }: BlogBoxtProps) => {

  return (
    <div className="BlogBox">
        <div className="Blog-Items">
            <div className="flex h-40 w-full overflow-hidden">
                <img src={blog.imageUrl} alt={blog.title} className="Blog-image" />
            </div>
            <Link to={`/blogs/${blog.title}/${blog.$id}`}>
                <TruncateTitle text={blog.title} maxLength={30} />
            </Link>
            <Truncate text={blog.body} maxLength={100} />
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
    </div>
  )
}

export default BlogpostBox