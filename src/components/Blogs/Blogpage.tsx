import { useGetBlogById } from "@/lib/Queries/QueriesAndMutations"
import { useParams } from "react-router"
import PostLoader from "../loaders/PostLoader";
import { Link } from "react-router-dom";
import { multiFormatDateString } from "@/constants";

const Blogpage = () => {
  const { id } = useParams()
  const { data: blog, isPending: IsBlogLoading } = useGetBlogById(id || '');

  return (
    <div className="default_Container">
      {IsBlogLoading ? <PostLoader /> : (
        <div className="MainBlogpage">
          <div className="PrimaryBoxBlog">
            <div className="flex flex-col justify-center items-start w-full p-2 gap-4">
              <img src={blog?.imageUrl} width={500} alt="" className="object-cover rounded-xl aspect-video" />
              <ul className="Hastags">
                {blog?.tags.map((tag: string) => (
                    <li className="hashTag">
                        #{tag}
                    </li>
                ))}
            </ul>
            </div>
          <div className="flex flex-col gap-10">
            <h1 className="Blog-Title">{blog?.title}</h1>
            <p className="BlogBody">{blog?.body}</p>
          </div>
          <div className="CReactorInfo">
            <div className="flex flex-col justify-center gap-2 items-start">
              <Link to={`/profile/${blog?.admin.$id}`} className="ProfileLink">
                  <img src={blog?.admin.imageUrl} alt="" className="rounded-full w-8 h-8 p-1 shadow-inner"/>
              </Link>
            </div>
            <div className="CreatedAt">
              <div>
                  <p className="creatorName">Created by {blog?.admin.name}</p>
              </div>
              <p className="CreatedAtText">{multiFormatDateString(blog?.$createdAt$)}</p>
            </div>
          </div>
          </div>
      
        </div>
      )}
    </div>
  )
}

export default Blogpage