import { UseGetRecentBlogs } from "@/lib/Queries/QueriesAndMutations"
import { Models } from "appwrite"


type BlogPageProps = {
  blog: Models.Document
}

const Blogpage = ( {} : BlogPageProps ) => {

  const { data: blogs, } = UseGetRecentBlogs()

  return (
    <div>
      {blogs?.documents.map((blog: Models.Document) => (
        <div>
          <h1>{blog.title}</h1>
          <img src={blog.imageUrl} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Blogpage