import { Models } from "appwrite"
import { Button } from "../ui/button"

type projectCardProps = {
    project: Models.Document
}

const ProjectContainer = ({ project }: projectCardProps) => {
  return (
    <div className="project_container cursor-pointer">
      <div className="flex flex-col justify-center gap-3 p-2">
        <div className="flex flex-1 justify-center items-center gap-10 w-full  h-full bg-transparent shadow rounded-full p-1 shadow-slate-100">
          <img src={project.imageUrl} alt={project.imageUrl} className="h-10 w-10 object-contain rounded-full" />
          <h1 className="primary-projecttext">{project.ProjectName}</h1>
        </div>
      {/* <div className="max-h-[150px] overflow-hidden rounded-xl shadow">
      <img 
        src={project.imageUrl} 
        alt=""
        className="h-fit object-contain" 
        />
      </div> */}
        <p className="project_paragraph">{project.projectInfo}</p>
          <Button className="w-fit">
            learn more
          </Button>
      </div>
     
    </div>
  )
}

export default ProjectContainer
