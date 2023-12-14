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
import { contactInfo } from "@/types"
import { contactInformation } from "@/constants"
import { messageValidation } from "@/lib/validation"
import { saveMessageToDB } from "@/lib/appwrite/api"
import { useState } from "react"
import { hourglass } from 'ldrs'


const Contact = () => {
  hourglass.register()
  const [loading, setLoading] = useState(false)

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
      setLoading(true);
      return newMessage
    }
    
  return (
    <div className="default_Container">
      <div className="flex flex-col justify-center items-start md:flex-row p-5 m-5 rounded-xl md:mx-10 lg:mx-52 w-full md:gap-10 md:shadow shadow-slate-400 md:my-5 md:rounded-xl outline outline-1 outline-white">
        <div className="flex flex-col w-full mb-10">
              <h3 className="primary_text">LETS TALK!</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-1 space-y-8 p-2">
                <div className="flex flex-row gap-2">
                  <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} className="form_inp" />
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
                            <Input placeholder="Enter a valid email" {...field} className="form_inp" />
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
                          <Input placeholder="Enter your phone" {...field} className="form_inp" />
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
                          <Textarea placeholder="Please lets us know what you have in mind." {...field} className="form_inp focus-visible:outline-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="submit">{loading ? (
                    <div className="flex flex-row justify-center items-center gap-3">
                      <img src="/assets/images/email.png" alt="" width={30}/><h1 className="primary_text">We have recieved your message</h1>
                    </div>
                  ) : (
                    <div>
                      send us
                    </div>
                  )
                  
                  }</Button>
                </form>
              </Form>
            </div>
            <div className="flex flex-col gap-5 w-full">
              <h1 className="primary_text">CONTACT INFORMATION</h1>
              <ul className="flex flex-col justify-center items-start gap-2">
                {contactInformation.map((link: contactInfo) => (
                  <li className="flex flex-1 gap-5">
                    <img src={link.imageURL} alt="" width={30} height={30} className="bg-black p-1 rounded-md outline outline-2 object-contain outline-cyan-100 shadow shadow-slate-600"/>
                    <h2 className="links_footer">{link.content}</h2>
                  </li>
                ))}
              </ul>
            </div>
      </div>
    </div>
  )
}

export default Contact
