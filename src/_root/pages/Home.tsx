// import VideoPlayer from "@/components/shared/VideoPlayer"
// import Experience from "@/components/shared/Experience"
import FeaturedProject from "@/components/shared/FeaturedProject"
import Welcome from "@/components/shared/Welcome"
import { useGetFeaturedProjects } from "@/lib/Queries/QueriesAndMutations"
import { Models } from "appwrite"
import { motion } from 'framer-motion'

// import { FaHandPointLeft,  FaHandPointRight  } from "react-icons/fa6";


const Home = () => {

  const { data: FeaturedProjects } = useGetFeaturedProjects()

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2
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
      <div className="custom_Homecontainer h-full">
        {/* <VideoPlayer src="https://cloud.appwrite.io/v1/storage/buckets/655777900bd1083e6876/files/6561e25fea7de27f352d/view?project=655773f801147821ba93&mode=admin" /> */}
        <Welcome />
        <motion.ul 
          className="md:grid grid-cols-1 gap-4 md:grid-cols-2 hidden my-8 p-5 rounded-md shadow shadow-slate-300"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {FeaturedProjects?.documents.map((project: Models.Document) => (
              <motion.li
               key={project.projectInfo}
               variants={item}
              >
                <FeaturedProject featured={project} key={project.ProjectName} />
              </motion.li>
          ))}
        </motion.ul>
        {/* <Experience /> */}
      </div> 
    </div>
  )
}

export default Home
