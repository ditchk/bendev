
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import FileUploader from "./FileUploader"
import { projectValidation } from "@/lib/validation"
import { Models } from "appwrite"

type postFormProps ={
  post?: Models.Document
}

const ProjectForm = ({ post }: postFormProps) => {

    const form = useForm<z.infer<typeof projectValidation>>({
        resolver: zodResolver(projectValidation),
        defaultValues: {
         projectName: '',
         projectInfo: '',
         file: [],
        },
      })
     
      async function onSubmit(values: z.infer<typeof projectValidation>) {
        console.log(values)
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full px-0 md:px-10 space-y-8">
        <FormField
          control={form.control}
          name="projectName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Caption</FormLabel>
              <FormControl>
                <Input type="text" className="inpuutArea" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add media</FormLabel>
              <FormControl>
                <FileUploader 
                  fieldChange={field.onChange}
                  mediaUrl={post?.imageUrl}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="locationLabel">Add Location</FormLabel>
              <FormControl>
                <Textarea className="texxtInput" {...field} />
              </FormControl>
              <FormMessage className="form-message" />
            </FormItem>
          )}
        />
         <div className=" flex flex-row justify-end gap-3">
            <Button type="submit" className="bg-[#a1e2eb] text-white w-fit">Cancel</Button>
            <Button type="submit" className="bg-black text-white w-fit">Submit</Button>
         </div>
      </form>
    </Form>
  )
}

export default ProjectForm
