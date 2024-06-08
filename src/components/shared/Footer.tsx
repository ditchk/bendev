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
import UploadLoader from "./UploadLoader"
import { useToast } from "../ui/use-toast"
import { UseSaveSubscriber } from "@/lib/Queries/QueriesAndMutations"
import Paymentm from "../payment-methods/Paymentm"


const Footer = () => {

  const {mutateAsync: saveSubscriberToDB, isPending: isLoading } =UseSaveSubscriber()

  const [clicked, setIsclicked] = useState(false)
  const { toast } = useToast()

  const handleClik = () => {
    setIsclicked(!clicked)
  }

  const formSchema = z.object({
    Email: z.string().min(2, {message: ''}).max(50),
  })

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const newSubscriber = await saveSubscriberToDB(values)


    return newSubscriber && toast({
      title: "Success, You have subscribed to our newsletter!",
    })
  }
  return (
    <footer className="FooterBox">
      <div className="FooterLinksCont">
        <div className="FooterLinkBox1">
          <h3 className="text_title text-shadow mt-4">Frequently Asked Questions(FAQs)</h3>
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
                        <Link reloadDocument to={link.route}
                        >{link.name}</Link>
                      </li>
                    )
                  })}
                </ul>
                <ul className="FooterListing">
                  {moreFooterLinks.map((link: myMoreFooterLinks) => {
                    return (
                      <li key={link.name2} className="links_footer">
                        <Link reloadDocument to={link.route2}
                        >{link.name2}</Link>
                      </li>
                    )
                  })}
                </ul>
            </div>
           
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="SubscribeFormBox">
                <FormField
                  control={form.control}
                  name="Email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text_title text-shadow">Subscribe</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} className="SubsInput" />
                      </FormControl>
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />
                <Button type="submit" className="Signup_button">
                  {isLoading ? (
                    <UploadLoader />
                  ) : (
                    "Subscribe Now!"
                  )}
                </Button>
              </form>
          </Form>
          <div className="flex flex-col justify-start items-start w-full h-fit p-2">
            <small className="text_title text-shadow">Follow us</small>
            <Socials/>
          </div>
        </div> 
      </div>
      <div className="flex flex-col gap-2 justify-center items-center bg-teal-950 rounded-md border border-white">
        <small className="FooterContent">Bswp &#169; 2023</small>
        <div className="flex flex-col justify-center items-center gap-3">
          {/* <small className=" italic">Accepted here</small> */}
          <Paymentm />
        </div>
      </div>
    </footer>
  )
}

export default Footer
