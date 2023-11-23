import Skills from "@/components/shared/Skills"
import Socials from "@/components/shared/Socials"
import { Button } from "@/components/ui/button"
import { welcomeMessage } from "@/constants"
import { myWelcomeMessage } from "@/types"
import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <div className="project_Uploader">
      <ul className="flex flex-1 h-fit m-0 w-full">
          {welcomeMessage.map((link: myWelcomeMessage) => {
            return (
              <div className="flex flex-col md:flex-row w-fit gap-5 md:gap-0">
                  <li key={link.title} >
                    <h1 className="tittl_name">{link.title}</h1>
                    <h2 className="primary_text">{link.subTitle}</h2>
                    <h3 className="paragraph_text">I have aquired skills that will help your business scale up in this technology era.Using my expertise i will design stunning landing pages/website and even design your ad campaigns <br /> for your business using the latest technology <br /> Click the button below to talk to me (❁´◡`❁)</h3>
                    <Button className="outline_btn font-serif hidden md:flex">Continue reading</Button>
                    <div className="flex flex-col md:hidden justify-center items-start">
                      <Link to={'/contact'} className="outline_btn rounded-md p-3 mt-10 my-10 font-serif">
                      Let's talk 
                    </Link>
                      <Socials />
                    </div>
                      <Skills />
                  </li>
                    <img 
                      src="/assets/images/homepage.jpg" 
                      alt="homepage-image" 
                      width={400}
                      className="object-contain rounded-e-full rounded-t-full border-b-2 border-cyan-400"
                    />   
              </div>
            )
          })}
        </ul>
    </div>
  )
}

export default Welcome
