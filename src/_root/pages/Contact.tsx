import { motion, useInView } from "framer-motion"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { messageValidation } from "@/lib/validation"
import { useEffect, useRef } from "react"
import { hourglass } from 'ldrs'
import SubmitLoader from "@/components/loaders/SubmitLoader"
import { useToast } from "@/components/ui/use-toast"
import { useSaveMessageToDB } from "@/lib/Queries/QueriesAndMutations"

  hourglass.register()
const Contact = () => {

  const { mutateAsync: saveMessageToDB, isPending: isLoading  } = useSaveMessageToDB()
  const { toast } = useToast()

    // 1. Define your form.
    const form = useForm<z.infer<typeof messageValidation>>({
      resolver: zodResolver(messageValidation),
      defaultValues: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
    })
  
   async function onSubmit(values: z.infer<typeof messageValidation>) {
      const newMessage = await saveMessageToDB(values)
      

      return newMessage && toast({
        title: "Your message has been sent succesfully",
        description: "We will get back to you shortly",
      })
    }

    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        
      }, [isInView])
    
  return (
    <div className="default_Container">
      <div className="custom_container h-full mt-16">
          <h3 className="textHeadline">Leave us a message</h3>
        <motion.div 
          style={{
            transform: isInView ? "none" : "translateY(10px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          ref={ref}
          className="flex flex-col justify-center items-start md:flex-row m-2 rounded-xl w-fit md:gap-10 bg-white shadow shadow-slate-400 md:my-5 md:rounded-xl outline outline-1 outline-white">
            <div className="flex flex-col w-full mb-10 p-10">
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-1 space-y-5">
                  <div className="flex flex-row gap-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Your Name" {...field} className="form_inp placeholder:text-xs " />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Enter a valid email" {...field} className="form_inp placeholder:text-xs" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                  </div>
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Enter your phone" {...field} className="form_inp placeholder:text-xs" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea placeholder="Please lets us know what you have in mind." {...field} className="form_inp min-h-[140px] max-h-[150px] focus-visible:outline-none placeholder:text-xs" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="custom_button">{isLoading ? (
                      <div className="flex flex-row justify-center items-center gap-3">
                        <SubmitLoader />
                      </div>
                    ) : (
                      <div>
                        send message
                      </div>
                    )
                    
                    }</Button>
                  </form>
                </Form>
              </div>
        </motion.div>
      </div>
        
    </div>
  )
}

export default Contact
