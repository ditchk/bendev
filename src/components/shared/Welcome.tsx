import Skills from "@/components/shared/Skills"
import { Button } from "@/components/ui/button"
import { welcomeMessage } from "@/constants"
import { myWelcomeMessage } from "@/types"

const Welcome = () => {
  return (
    <div className="Home_Container">
      <ul className="flex flex-1 h-full w-full">
          {welcomeMessage.map((link: myWelcomeMessage) => {
            return (
              <div className="flex flex-col md:flex-row w-fit gap-5 md:gap-0">
                  <li key={link.title} >
                    <h1 className="tittl_name">{link.title}</h1>
                    <h2 className="primary_text">{link.subTitle}</h2>
                    <img 
                      src="/assets/images/homepage.jpg" 
                      alt="homepage-image" 
                      width={400}
                      loading="lazy"
                      className="md:hidden object-contain bg-transparent h-fit mb-4 rounded-e-full justify-end rounded-t-full border-b-2 border-cyan-400"
                    />   
                    <h3 className="paragraph_text">I have aquired skills that will help your business scale up in this technology era.Using my expertise i will design stunning landing pages/website and even design your ad campaigns <br /> for your business using the latest technology <br /> Click the button below to talk to me (❁´◡`❁)</h3>
                    <Button className="custom_button font-serif hidden md:flex">Continue reading</Button>
                      <Skills />
                  </li>
                    <img 
                      src="/assets/images/homepage.jpg" 
                      alt="homepage-image" 
                      width={400}
                      loading="lazy"
                      className="hidden md:flex object-contain h-full rounded-e-full justify-end rounded-t-full border-b-2 border-cyan-400"
                    />   
              </div>
            )
          })}
        </ul>
    </div>
  )
}

export default Welcome
