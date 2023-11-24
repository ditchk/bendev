
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { myFooterLinks, myMoreFooterLinks } from "@/types"
import { footerLinks, moreFooterLinks } from "@/constants"
import { Link } from "react-router-dom"

const formSchema = z.object({
  email: z.string().min(2).max(50),
})

const Footer = () => {

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <footer className="flex flex-col shadow shadow-slate-100 md:shadow-slate-600 mt-0 md:mt-24 bg-gradient-to-l from-cyan-200 via-neutral-50 to-teal-50">
      <div className="flex flex-col md:flex-row justify-between gap-5 m-2 md:m-10 p-2 md:p-10 items-center shadow-inner shadow-gray-400 rounded-lg outline outline-2 outline-cyan-300 bottom-0 sticky">
          <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-2 md:gap-3 space-y-8 w-fit p-0 md:p-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="titlle_text">Subscribe to my newsletter</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} className="form_inp" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="subs_btn">Subscribe now!</Button>
          </form>
        </Form>
        <div className="flex flex-col justify-start gap-5">
          <h1 className="titlle_text">Quick links</h1>
            <div className="flex flex-row justify-between gap-10" >
                <ul className="flex flex-col list-disc list-inside">
                  {footerLinks.map((link: myFooterLinks) => {
                    return (
                      <li key={link.route} className="links_footer">
                        <Link to={link.route}
                        >{link.name}</Link>
                      </li>
                    )
                  })}
                </ul>
                <ul className="flex flex-col list-disc">
                  {moreFooterLinks.map((link: myMoreFooterLinks) => {
                    return (
                      <li key={link.name} className="links_footer">
                        <Link to={link.route}
                        >{link.name}</Link>
                      </li>
                    )
                  })}
                </ul>
            </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center border-t border-slate-300 shadow shadow-slate-500 backdrop-blur-sm">
        <h1 className="flex flex-row gap-3 justify-center items-center font-serif text-violet-700 text-sm font-semibold"><img src="/assets/images/benswsp.png" alt="footer-logo" width={150} /> &#169; 2023</h1>
      </div>
    </footer>
  )
}

export default Footer
