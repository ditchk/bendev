
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
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { myFooterLinks, myMoreFooterLinks } from "@/types"
import { footerLinks, moreFooterLinks } from "@/constants"
import { Link } from "react-router-dom"
import Socials from "./Socials"

const formSchema = z.object({
  email: z.string().min(2, {message: ''}).max(50),
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
    console.log(values)
  }
  return (
    <footer className="flex flex-col w-full shadow shadow-slate-100 md:shadow-slate-600 border-t border-slate-400 bg-cyan-950 bg-opacity-10 z-0">
      <div className="flex flex-col justify-start items-start md:flex-row md:justify-between m-3 md:m-10 p-2 md:p-10 md:items-center rounded-lg outline outline-1 outline-slate-300">
          <img src="/assets/images/logo.png" alt="logo" width={100} />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-row justify-start items-start md:justify-center md:items-center gap-2 md:gap-3 space-y-8 w-full p-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="titlle_text">Subscribe</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} className="form_inp2" />
                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
            <Button type="submit" className="common_btn">Subscribe now!</Button>
          </form>
        </Form>
        <div className="flex flex-col justify-start gap-2 p-5">
          <h1 className="titlle_text">Quick links</h1>
            <div className="flex flex-row justify-between gap-10" >
                <ul className="flex flex-col justify-start list-disc list-inside">
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
                      <li key={link.name2} className="links_footer">
                        <Link to={link.route2}
                        >{link.name2}</Link>
                      </li>
                    )
                  })}
                </ul>
            </div><Socials/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center border-t border-slate-300">
        <h1 className="flex flex-row gap-3 justify-center items-center font-serif text-violet-700 text-sm font-semibold"><img src="/assets/images/benswsp.png" alt="footer-logo" width={150} /> &#169; 2023</h1>
      </div>
    </footer>
  )
}

export default Footer
