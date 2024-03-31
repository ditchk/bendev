import BlogpostBox from "@/components/Blogs/BlogpostBox"
import PostLoader from "@/components/loaders/PostLoader";
import { UseGetRecentBlogs } from "@/lib/Queries/QueriesAndMutations";
import { Models } from "appwrite";

const Blogposts = () => {

  const { data: blogs, isPending: isPostLoading } = UseGetRecentBlogs()

  return (
    <div className="default_Container">
      <h2 className="BlogpageText">Latest blog posts</h2>
      <div className="Blog-box">
       {isPostLoading && !blogs ? (
        <PostLoader />
       ) : (
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-10">
          {blogs?.documents.map((blog: Models.Document) => (
            <li>
              <BlogpostBox blog={blog} />
            </li>
          ))}
        </ul>
       )}
      </div>
    </div>
  )
}

export default Blogposts

