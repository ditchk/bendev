import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type FreaturedProjectProps = {
    featured: Models.Document
}

const FeaturedProject = ({featured}: FreaturedProjectProps) => {

  return (
    <div className="featured-cont">
      <Link
        to={'/projects'}
        reloadDocument 
      >
        <img src={featured.Imageurl} alt="" className="object-contain rounded-2xl mb-4 shadow shadow-slate-400" />
        <h1 className="featuredText text-shadow mb-3">{featured.Title}</h1>
        <Button className="custom_button">read more</Button>
      </Link>
    </div>
  )
}

export default FeaturedProject