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
import { Link, useNavigate } from "react-router-dom";
import { useSignInAccount } from "@/lib/Queries/QueriesAndMutations";


const SigninForm = () => {
  const { mutateAsync: signInAccount, isPending: isSigningIn } = useSignInAccount()
  const navigate  = useNavigate()
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    const user = await signInAccount(values)

    if(user) {
      navigate ('/')
    }
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
        className="flex flex-col justify-start items-center h-fit p-2 px-10 md:p-10 shadow-lg shadow-cyan-950 bg-cyan-950 bg-opacity-10 w-auto space-y-3 rounded-md outline outline-1 outline-slate-200">
        <div className="flex flex-col justify-center items-center h-fit w-fit p-5">
          <Link to={'/'}><img src="/assets/images/loader.png" alt="" width={50} /></Link>
          <h1 className="login-text">LOGIN TO USE OUR SITE</h1>
        </div>
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
        <Button type="submit" className="w-2/3">
        {isSigningIn ? (
                  <UploadLoader />
                ) : (
                  "Login"
                )}
        </Button>

        <p className="font-serif text-xs text-teal-500 font-normal text-shadow">
            Don't have an accout?
          <Link to={'/signup'} className="text-red-500 ml-1 text-xs">
                Register here!
          </Link>
        </p>
      </motion.form>
    </Form>
    </div>
  )
}

export default SigninForm
