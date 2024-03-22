import ProjectContainer from "@/components/shared/ProjectContainer";
import ProjectLoder from "@/components/shared/ProjectLoder";
import { Button } from "@/components/ui/button";
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
      <div className="custom_container3 mt-16">
        <div className="flex flex-1 justify-center gap-2 my-2">
          <Button className="custom_button">Github Projects</Button>
          <Button className="custom_button">Figma Projects</Button>
          <Button className="custom_button">Framer projects</Button>
          <Button className="custom_button">Google projects</Button>
          <Button className="custom_button">Azure Projects</Button>
        </div>
        {isProjectloading && !projects ? (
          <ProjectLoder />
        ) : (
          <motion.ul 
            className="grid  sp:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full"
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
