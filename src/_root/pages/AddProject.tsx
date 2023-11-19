import ProjectForm from "@/components/shared/ProjectForm"

const AddProject = () => {
  return (
    <div className="flex flex-1 md:mt-2 mb-[120px] md:mr-[2%] h-[100vp] md:px-10 rounded-xl">
      <div className="flex flex-col flex-1 items-center gap-5 overflow-scroll py-10 px-5 md:px-8 lg:p-14 custom-scrollbar m-2 pb-10">
        <div className="container-head">
          <img src="/assets/images/rectangle-history-circle-plus.svg"
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
