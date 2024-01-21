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
import { useToast } from "@/components/ui/use-toast";


const SigninForm = () => {
  const { mutateAsync: signInAccount, isPending: isSigningIn } = useSignInAccount()
  const navigate  = useNavigate()
  const { toast } = useToast()

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
      return toast ({
        title: "success! redirecting to homepage"
      }) &&
      navigate ('/')
    }

    if(!user) {
      return  toast({
        title: "Error accessing your account please try again",
      })
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
        className="flex flex-col justify-start items-center h-fit bg-white w-auto space-y-3">
        <div className="flex flex-col justify-center items-center h-fit w-fit">
          <Link to={'/'}><img src="/assets/images/loader.png" alt="" width={100} /></Link>
          <h1 className="login-text">Welcome back</h1>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="form_item">
              <FormLabel  className="text-slate-500">Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Your email" className="inputBox" type="email"/>
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
                <Input {...field} placeholder="secret" className="inputBox" checked type="password"/>
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
        {isSigningIn ? (
                  <UploadLoader />
                ) : (
                  "Login"
                )}
        </Button>

        <p className="font-serif text-xs text-teal-500 font-normal">
            Don't have an accout?
          <Link to={'/signup'} className="text-red-500 ml-1 text-xs underline underline-offset-1">
                Register here!
          </Link>
        </p>
      </motion.form>
    </Form>
    </div>
  )
}

export default SigninForm
