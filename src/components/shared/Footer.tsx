
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
    <footer className="flex flex-col w-full shadow shadow-slate-100 md:shadow-slate-600 bg-gradient-to-l from-cyan-200 via-neutral-50 to-teal-50 z-0">
      <div className="flex flex-col md:flex-row justify-between m-3 md:m-10 p-2 md:p-10 items-center rounded-lg outline outline-1 outline-cyan-300">
          <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-row justify-center items-center gap-2 md:gap-3 space-y-8 w-fit p-5">
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
            <Button type="submit" className="subs_btn">Subscribe now!</Button>
          </form>
        </Form>
        <div className="flex flex-col justify-start gap-2">
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
            </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center border-t border-slate-300">
        <h1 className="flex flex-row gap-3 justify-center items-center font-serif text-violet-700 text-sm font-semibold"><img src="/assets/images/benswsp.png" alt="footer-logo" width={150} /> &#169; 2023</h1>
      </div>
    </footer>
  )
}

export default Footer
