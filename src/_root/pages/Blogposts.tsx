import BlogpostBox from "@/components/Blogs/BlogpostBox"
import PostLoader from "@/components/loaders/PostLoader";
import { UseGetRecentBlogs } from "@/lib/Queries/QueriesAndMutations";
import { Models } from "appwrite";
import { motion } from "framer-motion";

const Blogposts = () => {

  const { data: blogs, isPending: isPostLoading } = UseGetRecentBlogs()


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="default_Container">
      <h2 className="BlogpageText">Latest blog posts</h2>
      <div className="Blog-box">
       {isPostLoading && !blogs ? (
        <PostLoader />
       ) : (
        <motion.ul 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-2"
          variants={container}
          initial="hidden"
          whileInView="animate"
          animate="visible"
        >
          {blogs?.documents.map((blog: Models.Document) => (
            <motion.li 
            variants={item}
            key={blog.id}
            style={{ position: "relative", transformOrigin: "top center" }}
            >
              <BlogpostBox blog={blog} />
            </motion.li>
          ))}
        </motion.ul>
       )}
      </div>
    </div>
  )
}

export default Blogposts

