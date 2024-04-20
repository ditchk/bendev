import { UseGetFeaturedBlogs, useGetBlogById } from "@/lib/Queries/QueriesAndMutations"
import { useNavigate, useParams } from "react-router"
import PostLoader from "../loaders/PostLoader";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Models } from "appwrite";
import Controller from "../loaders/Controller";


const Blogpage = () => {
  const { id } = useParams()
  const { data: blog, isPending: IsBlogLoading } = useGetBlogById(id || '');
  const { data: blogs, isPending: isBlogsloading} = UseGetFeaturedBlogs()

  const Navigate = useNavigate()

        const handleclick = () => {
            Navigate('/blogs')
        }

  return (
    <div className="default_Container">
      {IsBlogLoading ? <PostLoader /> : (
        <div className="MainBlogpage">
          <div className="PrimaryBoxBlog">
            <div className="flex flex-col justify-center items-start w-full h-full md:aspect-video lg:max-h-96 overflow-hidden rounded-xl gap-2 lg:shadow-md shadow-slate-400 lg:outline outline-2 outline-slate-300">
              <img src={blog?.imageUrl} alt="" className="object-fit w-full md:w-3/4 lg:w-full lg:aspect-video rounded-xl " />
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
            <h2 className="Intro">{blog?.introduction}</h2>
            <p className="BlogBody">{blog?.body}</p>
            <h3 className="summary">{blog?.summary}</h3>
          </div>
          <div className="flex flex-row justify-center items-start w-full gap-2">
            <Input type="text" placeholder="Add a comment" className="commentSec"></Input>
            <Button className="Commenting">Comment</Button>
          </div>
          <div className="flex flex-row items-center w-fit">
            <Link to={'/blogs'} className="BlogLink" reloadDocument onClick={handleclick}>Back to Blogs</Link>
          </div>
          </div>
        </div>
      )}
      
      <div className="flex flex-col justify-center items-center md:items-start w-full h-full p-1 md:p-8 mt-8 border-t-2 border-slate-300">
      <h2 className="BlogpageText">Related Blogs:</h2>
        {isBlogsloading ? (
          <Controller />
        ) : <ul className="flex flex-col justify-start items-center gap-5">
           {blogs?.documents.map((blog: Models.Document) => (
            
            <li 
              key={blog.id}
              style={{ position: "relative", transformOrigin: "top center" }}
              className="flex justify-start items-center text-center bg-white shadow-md shadow-slate-400 p-1 rounded-xl outline outline-2 outline-slate-200 w-full h-fit"
            >
              <Link to={`/en/blogs/${blog.title}/${blog.$id}`} reloadDocument>
                <div className="flex flex-row justify-start items-center w-full gap-5">
                <img src={blog.imageUrl} alt="" width={50} className="rounded-full" />
                <h3 className="Blog-Title2">{blog.title}</h3>
              </div>
              </Link>
              
            </li>
          ))}
        </ul>}
      </div>
    </div>
  )
}

export default Blogpage