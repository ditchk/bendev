'use client'

import { motion, useInView } from "framer-motion";

import * as z from "zod"
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useEffect, useRef, useState } from "react"
// import { Link, useNavigate } from "react-router-dom";
// import { useToast } from "@/components/ui/use-toast";
// import { useSignInAccount } from "@/lib/Queries/QueriesAndMutations";
import { Input } from "../../ui/input";
import { PackageInfoValidation } from "@/lib/validation";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";


const BasicCheckOut = () => {
  // const { mutateAsync: signInAccount } = useSignInAccount()
  // const navigate  = useNavigate()
  // const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof PackageInfoValidation>>({
    resolver: zodResolver(PackageInfoValidation),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  })

  async function onSubmit(values: z.infer<typeof PackageInfoValidation>) {
    console.log(values)
    setLoading(true)
  }

  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    
    }, [isInView])


  return (
    <div className="flex flex-1 justify-center items-center h-screen w-full">
      <Form {...form}>
      <motion.form
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        ref={ref} 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="flex flex-col justify-center items-center h-fit w-full bg-white space-y-2"
      >
        <Link to={'/'}>
          <img src="/assets/images/logo1.png" alt="" width={70} />
        </Link>
        <h2 className="txt-xs font-bold text-center">Package confirmation</h2>
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} className="shadow-inner shadow-black  w-52 border border-gray1600" />
                </FormControl>
                <FormMessage className="text-xs font-thin text-red-600"/>
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email adress</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} className="shadow-inner shadow-black w-52 border border-gray-100" />
              </FormControl>
              <FormMessage className="text-xs font-thin text-red-600"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea placeholder="Do you have any notes to add on your order?" {...field} className="shadow-inner shadow-black w-52 border border-gray-100" />
              </FormControl>
              <FormMessage className="text-xs font-thin text-red-600"/>
            </FormItem>
          )}
        />
        <Button type="submit" className="submit">{loading ? (
          <div className="flex flex-row justify-center items-center gap-3">
            <img src="/assets/images/email.png" alt="" width={30}/><h1 className="primary_text">We have recieved your message</h1>
          </div>
        ) : (
          <div>
            Proceed
          </div>
        )
        
        }</Button>
      </motion.form>
      </Form>
  </div>
)
}

export default BasicCheckOut
