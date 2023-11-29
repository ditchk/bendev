import { Models } from "appwrite";
import { Link } from "react-router-dom";

type FreaturedProjectProps = {
    featured: Models.Document
}

const FeaturedProject = ({featured}: FreaturedProjectProps) => {

  return (
    <div className="main_ft">
        <Link
          to={'/about'} 
          className="Featuredcontainer"
        >
          <img src={featured.imageUrl} alt="" width={50} className="h-fit rounded-md object-cover" />
          <h1 className="featuredText">{featured.ProjectName}</h1>
        </Link>
    </div>
  )
}

export default FeaturedProject