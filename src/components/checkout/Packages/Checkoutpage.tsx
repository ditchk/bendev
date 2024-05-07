'use client'

import { motion, useInView } from "framer-motion";

import * as z from "zod"
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useEffect, useRef } from "react"
import { Input } from "../../ui/input";
import { PackageInfoValidation } from "@/lib/validation";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAddNewOrder } from "@/lib/Queries/QueriesAndMutations";
import SubmitLoader from "@/components/loaders/SubmitLoader";
import { useToast } from "@/components/ui/use-toast";


const BasicCheckOut = () => {

  const {mutateAsync:  OrderSubmission, isPending : isLoading} = useAddNewOrder()
  const { toast } = useToast()
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof PackageInfoValidation>>({
    resolver: zodResolver(PackageInfoValidation),
    defaultValues: {
      name: "",
      email: "",
      notes: "",
    },
  })

  async function onSubmit(values: z.infer<typeof PackageInfoValidation>) {

    const newOrder = await OrderSubmission(values);

    return newOrder && toast({
      title: "Thank you for choosing us: keep an eye on your email inbox",
      description: "I will be contacting you shortly",
    }), navigate( "/success")
  }

  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    
    }, [isInView])


  return (
    <div className="flex justify-center items-center h-fit w-full">
      <Form {...form}>
      <motion.form
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        ref={ref} 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="flex flex-col justify-center items-center h-fit w-full shadow-md shadow-slate-500 p-5 m-8 md:m-2 bg-white rounded-xl space-y-2"
      >
        <Link to={'/'}>
          <img src="/assets/images/logo1.png" alt="" width={100} />
        </Link>
        <h2 className="txt-xs font-bold text-center">Package information</h2>
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} className=" w-72 border border-gray3200" />
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
                <Input placeholder="Enter your email" {...field} className="w-72 border border-gray-300" />
              </FormControl>
              <FormMessage className="text-xs font-thin text-red-600"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea placeholder="Do you have any notes to add on your order?" {...field} className="w-72 min-h-[140px] max-h-[150px] border border-gray-300" />
              </FormControl>
              <FormMessage className="text-xs font-thin text-red-600"/>
            </FormItem>
          )}
        />
        <div className="flex flex-row justify-center items-center">
        <Button type="submit" className="custom_button rounded-full w-full">{isLoading ? (
          <div className="flex flex-row justify-center items-center gap-3">
            <SubmitLoader />
          </div>
        ) : (
          <div>
            Proceed
          </div>
        )
        
        }</Button>
        </div>
      </motion.form>
      </Form>
  </div>
)
}

export default BasicCheckOut
