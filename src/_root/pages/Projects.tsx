import ProjectContainer from "@/components/shared/ProjectContainer";
import ProjectLoder from "@/components/shared/ProjectLoder";
import { useGetRecentProjects } from "@/lib/Queries/QueriesAndMutations";
import { Models } from "appwrite";

const Projects = () => {
const { data: projects , isPending: isProjectloading, isError: isProjectError } = useGetRecentProjects();

  return (
    <div className="default_Container">
      <div className="custom_container3">
        {isProjectloading && !projects ? (
          <ProjectLoder />
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            {projects?.documents.map((project: Models.Document) => (
              <ProjectContainer project={project} key={project.ProjectName} />
            ))}
          </ul>
        )}
    </div>
    </div>
  )
}

export default Projects
