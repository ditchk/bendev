import ProjectForm from "@/components/shared/ProjectForm"

const AddProject = () => {
  return (
    <div className="default_Container">
      <div className="custom_container">
        <div className="project_Upload">
          <img src="/assets/images/add-post.png"
          width={36}
          height={40} 
          alt="" />
          <h2 className="text2">Create a project</h2>
        </div>
        <ProjectForm />
      </div>
    </div>
  )
}

export default AddProject
