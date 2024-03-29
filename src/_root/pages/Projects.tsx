import ProjectP from "@/components/projects/ProjectP";
import ProjectContainer from "@/components/shared/ProjectContainer";
import ProjectLoder from "@/components/shared/ProjectLoder";
import { ProjectLinks } from "@/constants";
import { useGetRecentProjects } from "@/lib/Queries/QueriesAndMutations";
import { ProjectLink } from "@/types";
import { Models } from "appwrite";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

const Projects = () => {
const { data: projects , isPending: isProjectloading, /*isError: isProjectError*/ } = useGetRecentProjects();

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
      <ProjectP src={'/assets/videos/grid.mp4'} />
      <div className="custom_ProjectBox mt-16">
        <div className="hidden lg:flex justify-start items-center w-fit gap-2 my-2 p-2 shadow-2xl rounded-2xl z-30">
         <ul className="flex flex-col gap-2 w-fit p-1 animate-in slide-in-from-left-32">
          {ProjectLinks.map((link: ProjectLink) => {
            return (
              <Link to={link.route} key={link.name} className="custom-btn">
                <h1>{link.name}</h1>
              </Link>
            )
          })}
         </ul>
        </div>
        {isProjectloading && !projects ? (
          <ProjectLoder />
        ) : (
          <motion.ul 
            className="grid grid-cols-1 sp:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full"
            variants={container}
            initial="hidden"
            whileInView="animate"
            animate="visible"
          >
            {projects?.documents.map((project: Models.Document) => (
              <motion.li 
                variants={item}
                className="duration-1000"
                >
                  <ProjectContainer project={project} key={project.ProjectName}  />
              </motion.li>
            ))}
          </motion.ul>
        )}
    </div>
    </div>
  )
}

export default Projects
