'use client'

import { motion, useInView } from "framer-motion";

import * as z from "zod"
import {
  Form,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useSignInAccount } from "@/lib/Queries/QueriesAndMutations";
import { SigninValidation } from "@/lib/validation";


const CheckoutPage = () => {
  const { mutateAsync: signInAccount } = useSignInAccount()
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
      navigate ('/dashboard')
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
        className="flex flex-col justify-center items-center h-fit w-full bg-white space-y-2">
        <div className="flex flex-col justify-center items-center h-screen w-full">
          <Link to={'/'}><img src="/assets/images/loader.png" alt="" width={100} /></Link>
          <h1 className="login-text text-center">Please Launch the live chat to call or chat with me</h1>
        </div>
        </motion.form>
        </Form>
    </div>
  )
}

export default CheckoutPage
