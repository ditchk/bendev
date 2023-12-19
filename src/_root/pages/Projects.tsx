import ProjectContainer from "@/components/shared/ProjectContainer";
import ProjectLoder from "@/components/shared/ProjectLoder";
import { useGetRecentProjects } from "@/lib/Queries/QueriesAndMutations";
import { Models } from "appwrite";
import { motion } from 'framer-motion'

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
      <div className="custom_container3">
        {isProjectloading && !projects ? (
          <ProjectLoder />
        ) : (
          <motion.ul 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full"
            variants={container}
            initial="hidden"
            whileInView="animate"
            animate="visible"
          >
            {projects?.documents.map((project: Models.Document) => (
              <motion.li 
                variants={item}
                className="duration-500"
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
