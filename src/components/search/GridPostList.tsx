import { Models } from "appwrite";
import { Link } from "react-router-dom";


type GridPostListProps = {
  blogs: Models.Document[];
  showUser?: boolean;
  showStats?: boolean;
};

const GridPostList = ({
  blogs,
  showUser = true,
}: GridPostListProps) => {

  return (
    <ul className="grid-container">
      {blogs.map(( blog ) => (
        <li key={blog.$id} className="relative min-w-80 h-80">
          <Link to={`/posts/${blog.$id}`} className="grid-post_link">
            <img
              src={blog.imageUrl}
              alt="post"
              className="h-full w-full object-cover"
            />
          </Link>

          <div className="grid-post_user">
            {showUser && (
              <div className="flex items-center justify-start gap-2 flex-1">
                <img
                  src={
                    blog.admin.imageUrl ||
                    "/assets/icons/profile-placeholder.svg"
                  }
                  alt="creator"
                  className="w-8 h-8 rounded-full"
                />
                <p className="line-clamp-1">{blog.admin.name}</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GridPostList;