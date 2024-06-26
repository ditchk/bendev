import { motion, useInView } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel ,FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import FileUploader from "./FileUploader"
import { projectValidation } from "@/lib/validation"
import { Models } from "appwrite"
import { useCreateProject } from "@/lib/Queries/QueriesAndMutations"
import UploadLoader from "./UploadLoader"
import { useEffect, useRef } from "react"
// import { myConfig } from "@/lib/appwrite/config"

type projectFormProps = {
  project?: Models.Document
}

const ProjectForm = ({ project }: projectFormProps) => {
  
const { mutateAsync: createProject, isPending: isLoadingCreate } = useCreateProject()

    const form = useForm<z.infer<typeof projectValidation>>({
        resolver: zodResolver(projectValidation),
        defaultValues: {
         ProjectName: project? project?.ProjectName: "",
         projectInfo: project? project?.projectInfo: "",
         file: [],
        },
      })
     
      async function onSubmit(values: z.infer<typeof projectValidation>) {
        const newProject = await createProject({
            ProjectName: values.ProjectName,
            projectInfo: values.projectInfo,
            file: values.file,
        })
        
        // set isLoadingCreate = true
        return newProject
      }

      const ref = useRef(null)
      const isInView = useInView(ref)
  
      useEffect(() => {
          
        }, [isInView])
return (
  <motion.div 
    style={{
      transform: isInView ? "none" : "translateX(200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }}
    ref={ref}
    className="project_Uploader">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full px-5 space-y-5">
          <FormField
            control={form.control}
            name="ProjectName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="Formlablel">Project title</FormLabel>
                <FormControl>
                  <Input type="text" className="form_inp" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="Formlablel">Add images & videos</FormLabel>
                <FormControl>
                  <FileUploader 
                    fieldChange={field.onChange}
                    mediaUrl={project?.ImageUrl}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projectInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="Formlablel">Add a project description</FormLabel>
                <FormControl>
                  <Textarea className="form_inp custom-scrollbar" placeholder="write a detailed project description" {...field} />
                </FormControl>
                <FormMessage className="formMes" />
              </FormItem>
            )}
          />
          <div className="flex flex-row justify-end gap-3">
              {/* <Button type="submit" className="bg-[#a1e2eb] text-white w-fit">Cancel</Button> */}
              <Button type="submit" className="bg-black text-white w-fit outline outline-1 outline-white">
              {isLoadingCreate ? (
                  <UploadLoader />
                ) : (
                  "Save Project"
                )}
              </Button>
          </div>
        </form>
    </Form>
  </motion.div>
  )
}

export default ProjectForm
