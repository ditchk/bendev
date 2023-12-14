import ProjectForm from "@/components/shared/ProjectForm"

const AddProject = () => {
  return (
    <div className="default_Container">
      <div className="custom_container">
        <div className="project_Upload bg-white p-2 rounded-full">
          <img src="/assets/images/add-post.png"
          width={36}
          height={40} 
          alt="" />
          <h1 className="text2">SHARE YOUR IDEA WITH OTHERS</h1>
        </div>
        <ProjectForm />
      </div>
    </div>
  )
}

export default AddProject
