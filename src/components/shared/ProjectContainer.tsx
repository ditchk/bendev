import { Models } from "appwrite"
import { Button } from "../ui/button"

type projectCardProps = {
    project: Models.Document
}

const ProjectContainer = ({ project }: projectCardProps) => {
  return (
    <div className="project_container cursor-pointer">
      <div className="flex flex-col justify-center p-2">
        <div className="flex flex-1 justify-start items-start p-2 gap-3 bg-transparent rounded-md">
          <img src={project.imageUrl} alt={project.imageUrl} className="h-10 w-10 object-contain rounded-xl" />
          <h1 className="primary-projecttext">{project.ProjectName}</h1>
        </div>
 
        <p className="project_paragraph">{project.projectInfo}</p>
        <div className="max-h-[200px] overflow-hidden shadow">
        <img 
          src={project.imageUrl} 
          alt=""
          className="object-cover" 
          />
        </div>
          <Button className="custom_button">
            learn more
          </Button>
      </div>
     
    </div>
  )
}

export default ProjectContainer
