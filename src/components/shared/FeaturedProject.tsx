import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type FreaturedProjectProps = {
    featured: Models.Document
}

const FeaturedProject = ({featured}: FreaturedProjectProps) => {

  return (
    <div className="main_ft">
        <Link
          to={'/shop'} 
          className="Featuredcontainer"
        >
          <img src={featured.imageUrl} alt="" width={50} className="h-fit rounded-full object-cover shadow shadow-slate-400" />
          <h1 className="featuredText">{featured.ProjectName}</h1>
          <Button>read more</Button>
        </Link>
    </div>
  )
}

export default FeaturedProject