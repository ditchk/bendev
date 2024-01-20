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
import { SigninValidation} from "@/lib/validation"
import { useEffect, useRef } from "react";
import UploadLoader from "@/components/shared/UploadLoader";
import { signInAccount } from "@/lib/appwrite/api";


const SigninForm = () => {
  const isLoading = false
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    const user = await signInAccount(values) 

    return(user)
  }

  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    
    }, [isInView])


  return (
    <div>
      <Form {...form}>
      <motion.form
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          ref={ref} 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="flex flex-col justify-start items-center h-fit px-10 md:px-16 shadow-lg py-8 shadow-cyan-950 bg-cyan-950 bg-opacity-10 w-auto space-y-3 rounded-md outline outline-1 outline-slate-200">
         <h1 className="headText no-underline text-shadow">ADMIN LOGIN</h1>
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
        <Button type="submit" className="Linkme mt-10">
        {isLoading ? (
                  <UploadLoader />
                ) : (
                  "Login"
                )}
        </Button>

        {/* <p className="font-bold">
            Don't have an accout?
          <Link to={'/signup'} className="text-cyan-800 font-bold ml-1 text-sm">
                Register here!
          </Link>
        </p> */}
      </motion.form>
    </Form>
    </div>
  )
}

export default SigninForm
