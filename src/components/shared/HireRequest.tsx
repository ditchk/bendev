import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { Textarea } from "../ui/textarea"
import { Checkbox } from "../ui/checkbox"
import { useState } from "react"
import { savInquireToDB } from "@/lib/appwrite/api"
import { Input } from "../ui/input"



const HireRequest = () => {
    const [loading, setLoading] =useState(false)
    
    const formSchema = z.object({
        quote: z.string().min(2, {message: 'required'}).max(50),
        Email: z.string().min(2, {message: ''}).max(100),
        domain: z.string().min(2, {message: ''}).max(100)
      })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          quote: "",
          Email: "",
          domain: "",
        },
      })
    
      async function onSubmit(values: z.infer<typeof formSchema>) {
        const newMessage = await savInquireToDB(values)
        setLoading(true);
        return newMessage
      }
  return (
    <div className="hireBox">
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start items-center md:justify-center md:items-center gap-2 md:gap-3 space-y-3 w-full p-8">
          <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your email" {...field} className="inputBox2" />
                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="domain"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="leave empty if you don't have one yet" {...field} className="inputBox2" />
                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
          <FormField
              control={form.control}
              name="quote"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Fill this form to schedule a zoom meeting with me" {...field} className="inputBox3" />
                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
            <div className="flex flex-row justify-start items-start gap-2">
                <Checkbox id="selection" />
                <label
                htmlFor="selection"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Treat with urgency?
                </label>
            </div>
            <Button type="submit" className="common_btn">
                {
                    loading ? "sent!" : "Send Inquiry"
                }
            </Button>
          </form>
        </Form>
    </div>
  )
}

export default HireRequest
