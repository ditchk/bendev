'use client'

import { motion, useInView } from "framer-motion";

import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SignupValidation } from "@/lib/validation"
import { useEffect, useRef } from "react";
import UploadLoader from "@/components/shared/UploadLoader";
import { Link } from "react-router-dom";
import { CreateUserAccount } from "@/lib/appwrite/api";


const SignupForm = () => {
  const isLoading = false
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name:"",
      email: "",
      password: ""
    },
  })

  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newUser = await CreateUserAccount(values) 

    return(newUser)
  }

  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    
    }, [isInView])

  return (
    <div className="flex flex-1 justify-center items-center h-fit">
      <Form {...form}>
      <motion.form
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          ref={ref} 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="flex flex-col justify-start items-center h-fit p-3 md:px-16 shadow-lg shadow-cyan-950 bg-cyan-950 bg-opacity-10 w-auto space-y-3 rounded-md outline outline-1 outline-slate-200">
         <h1 className="headText no-underline">JOIN OUR COMMUNITY TODAY</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="form_item">
              <FormLabel className="text-slate-500">Name</FormLabel>
              <FormControl>
                <Input {...field} className="inputBox" type="name"/>
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="form_item">
              <FormLabel className="text-slate-500">Email</FormLabel>
              <FormControl>
                <Input {...field} className="inputBox" type="email"/>
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="form_item">
              <FormLabel className="text-slate-500">Password</FormLabel>
              <FormControl>
                <Input {...field} className="inputBox" type="password"/>
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <Button type="submit" className="Linkme">
        {isLoading ? (
                  <UploadLoader />
                ) : (
                  "Sign Up"
                )}
        </Button>

        <p className="font-bold">
          Already have an account?
          <Link to={'/auth/signin'} className="text-cyan-800 font-bold ml-1 text-sm">
                Login here!
          </Link>
        </p>
      </motion.form>
    </Form>
    </div>
  )
}

export default SignupForm
