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
import { myFaqs, myFooterLinks, myMoreFooterLinks } from "@/types"
import { footerLinks, freqAsked, moreFooterLinks } from "@/constants"
import { Link } from "react-router-dom"
import Socials from "./Socials"
import { useState } from "react"


const Footer = () => {

  const [clicked, setIsclicked] = useState(false)

  const handleClik = () => {
    setIsclicked(!clicked)
  }

  const formSchema = z.object({
    email: z.string().min(2, {message: ''}).max(50),
  })

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
    <footer className="FooterBox">
      <div className="FooterLinksCont">
        <div className="FooterLinkBox1">
          <h3 className="text_title text-shadow mt-4">FAQs</h3>
          <ul className="FooterListify">
            {freqAsked.map((link: myFaqs) => {
              return (
                <li key={link.question}
                  onClick={handleClik}
                >
                  <h3 className="links_footer2">{link.question}</h3>
                  <h3 className="QA">{link.answer}</h3>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="FooterLinkBox">
          <h1 className="text_title text-shadow">Quick links</h1>
            <div className="LinksBox" >
                <ul className="FooterListing">
                  {footerLinks.map((link: myFooterLinks) => {
                    return (
                      <li key={link.route} className="links_footer">
                        <Link to={link.route}
                        >{link.name}</Link>
                      </li>
                    )
                  })}
                </ul>
                <ul className="FooterListing">
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
            <Socials/>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="SubscribeFormBox">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subscribe</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} className="SubsInput" />
                      </FormControl>
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />
                <Button type="submit" className="Signup_button">Subscribe now!</Button>
              </form>
          </Form>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center border-t border-slate-300">
        <h1 className="FooterContent"> &#169; 2023</h1>
      </div>
    </footer>
  )
}

export default Footer
