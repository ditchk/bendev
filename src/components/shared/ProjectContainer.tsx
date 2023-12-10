import { Models } from "appwrite"
import { Button } from "../ui/button"
import { useState } from "react"

type projectCardProps = {
    project: Models.Document
}

const ProjectContainer = ({ project }: projectCardProps) => {

  const [ openContainer, setOpeneContainer ] = useState(false);

  const handleClick = () => {
    setOpeneContainer(!openContainer);
  }


  return (
    <div className="project_container cursor-pointer">
      <div className="flex flex-col justify-center gap-3 p-2">
        <div className="flex flex-1 relative justify-start items-start p-2 gap-3 bg-transparent rounded-md">
          <img src={project.imageUrl} alt={project.imageUrl} className="h-10 w-10 object-contain rounded-lg hover:shadow shadow-violet-950 outline-double outline-2 outline-cyan-700" />
          <h1 className="primary-projecttext">{project.ProjectName}</h1>
        </div>
        <p className="project_paragraph">{project.projectInfo}
          <Button className="custom_button" onClick={handleClick}>
            {openContainer ? 'learn more' : 'learn more'}
          </Button>
          {openContainer && (
            <div className="flex flex-col h-fit absolute w-fit z-50">
              <p className="flex flex-1 bg-black text-teal-500 p-5">share your project with friends
              </p>
            </div>
          )}
        </p>
      </div>
     
    </div>
  )
}

export default ProjectContainer
