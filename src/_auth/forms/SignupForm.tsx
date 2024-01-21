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
import { useToast } from "@/components/ui/use-toast";
import { SignupValidation } from "@/lib/validation"
import { useEffect, useRef } from "react";
import UploadLoader from "@/components/shared/UploadLoader";
import { Link } from "react-router-dom";
import { useCreateUserAccount, useSignInAccount } from "@/lib/Queries/QueriesAndMutations";


const SignupForm = () => {
  const { toast } = useToast()
  const { mutateAsync: CreateUserAccount, isPending: isCreatingUser } = useCreateUserAccount()
  const { mutateAsync: signInAccount } = useSignInAccount()

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newUser = await CreateUserAccount(values) 
    
    if(!newUser) {
      return toast({
        title: "SignUp failed, Please try again later!",
      })
    }


    const session = await signInAccount({
      email: values.email,
      password: values.password
    })

    if(!session) {
      return toast({
        title: "Email/username is already taken.",
      })
    }
  }

  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    
    }, [isInView])

  return (
    <div className="flex flex-1 justify-center w-full items-center h-fit">
      <Form {...form}>
      <motion.form
          style={{
            transform: isInView ? "none" : "translateY(-50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          ref={ref} 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="flex flex-col justify-start items-center h-fit bg-white w-auto space-y-3">
        <div className="flex flex-col justify-center items-center h-fit w-fit">
          <Link to={'/'}><img src="/assets/images/loader.png" alt="" width={100} /></Link>
          <h1 className="login-text">Join to unlock all features</h1>
        </div>
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
          name="username"
          render={({ field }) => (
            <FormItem className="form_item">
              <FormLabel className="text-slate-500">username</FormLabel>
              <FormControl>
                <Input {...field} className="inputBox" type="text"/>
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
        <Button type="submit" className="w-full">
        {isCreatingUser ? (
                  <UploadLoader />
                ) : (
                  "Sign Up"
                )}
        </Button>

        <p className="font-serif text-xs text-teal-500 font-normal">
          Already have an account?
          <Link to={'/auth/signin'} className="text-red-500 ml-1 text-xs underline underline-offset-1">
                Login here!
          </Link>
        </p>
      </motion.form>
    </Form>
    </div>
  )
}

export default SignupForm
