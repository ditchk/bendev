// BlogPost.js
import { databases, myConfig } from '@/lib/appwrite/config';
import { Models } from 'appwrite';
import { useState } from 'react';

type BlogStatProps = {
  blog: Models.Document
}

const BlogStats = ({ blog }: BlogStatProps) => {
  const [likes, setLikes] = useState(blog.likes || 0);

  const handleLikeClick = async () => {
    try {
      const updatedPost = await databases.updateDocument(
        myConfig.databaseId,
        myConfig.blogCollectionIld,
        blog.$id,
        {
          likes: likes + 1
        }
      );

      setLikes(updatedPost.likes);
      return updatedPost
    } catch (error) {
      console.error('Error while liking the post: ', error);
    }
  };


  return (
    <div className="flex flex-row justify-center items-center">

      <img 
        src="/assets/images/liked.png"
        alt="" width={20} className={`cursor-pointer hover:sepia`}
        onClick={handleLikeClick} 
        />
        <p className="text-sm">{likes}</p>
    </div>
  );
};

export default BlogStats;