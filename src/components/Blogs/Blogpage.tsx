import { useGetBlogById } from "@/lib/Queries/QueriesAndMutations"
import { useNavigate, useParams } from "react-router"
import PostLoader from "../loaders/PostLoader";
import { Link } from "react-router-dom";
import { multiFormatDateString } from "@/constants";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const Blogpage = () => {
  const { id } = useParams()
  const { data: blog, isPending: IsBlogLoading } = useGetBlogById(id || '');


  const Navigate = useNavigate()

        const handleclick = () => {
            Navigate('/blogs')
        }

  return (
    <div className="default_Container">
      {IsBlogLoading ? <PostLoader /> : (
        <div className="MainBlogpage">
          <div className="PrimaryBoxBlog">
            <div className="flex flex-col justify-center items-start w-full p-2 gap-2">
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
            <h2 className="Intro">{blog?.introduction}</h2>
            <p className="BlogBody">{blog?.body}</p>
            <h3 className="summary">{blog?.summary}</h3>
          </div>
       
          <div className="CReactorInfo">
            <div className="flex flex-col justify-center gap-1 items-start">
              <Link to={`/profile/${blog?.admin.$id}`} className="ProfileLink">
                  <img src={blog?.admin.imageUrl} alt="" className="rounded-full w-8 h-8 p-1 shadow-inner"/>
              </Link>
            </div>
            <div className="CreatedAt">
              <div>
                  <p className="creatorName">Written by {blog?.admin.name}</p>
              </div>
              <p className="CreatedAtText">{multiFormatDateString(blog?.$createdAt$)}</p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-start w-full gap-2">
            <Input type="text" placeholder="Add a comment" className="commentSec"></Input>
            <Button className="Commenting">Comment</Button>
          </div>
          </div>
        </div>
      )}
      <div className="flex flex-row justify-between items-center w-full h-fit md:px-8 my-4">
        <Link to={'/blogs'} className="BlogLink" reloadDocument onClick={handleclick}>Back to Blogs</Link>
        <Link to={'/blogs'} className="BlogLink" reloadDocument onClick={handleclick}>Share Blog</Link>
      </div>
    </div>
  )
}

export default Blogpage