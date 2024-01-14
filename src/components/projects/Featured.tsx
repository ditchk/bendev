import { useGetFeaturedProjects } from "@/lib/Queries/QueriesAndMutations";
import FeaturedProject from "../shared/FeaturedProject"
import { Models } from "appwrite";
import{ IoIosArrowDropleft, IoIosArrowDropright  } from 'react-icons/io'

const Featured = () => {
    const { data: featured } = useGetFeaturedProjects();
  return (
    <div className="flex flex-row justify-center relative items-center p-1 gap-1">
      <IoIosArrowDropleft className="slideleft" />
      <div className="flex w-full h-full justify-center items-center p-10 rounded-lg">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featured?.documents.map((featured: Models.Document) => (
            <li
            className="duration-1000"
            >
                <FeaturedProject featured={featured} key={featured.Title}  />
            </li>
            ))}
        </ul>
      </div>
      <IoIosArrowDropright className="slideleft" />
    </div>
  )
}

export default Featured
