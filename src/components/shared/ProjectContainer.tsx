import { Models } from "appwrite"
import { Link } from "react-router-dom"

type projectCardProps = {
    project: Models.Document
}

const ProjectContainer = ({ project }: projectCardProps) => {



  return (
    <div className="project_container">
      <div className="flex flex-col justify-center gap-3 p-2">
        <div className="flex flex-1 relative justify-start items-start p-2 gap-3 bg-transparent rounded-md">
          <img src={project.imageUrl} alt={project.imageUrl} className="h-10 w-10 object-contain rounded-lg hover:shadow shadow-violet-950 outline-double outline-2 outline-cyan-700" />
          <h1 className="primary-projecttext">{project.ProjectName}</h1>
        </div>
        <p className="project_paragraph">{project.projectInfo}
          <Link className="custom-btn" to={"https://github.com/ditchk/"}>
            View Project
          </Link>
        </p>
      </div>
     
    </div>
  )
}

export default ProjectContainer
