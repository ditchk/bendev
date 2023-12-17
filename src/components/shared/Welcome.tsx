import { motion } from "framer-motion"
import Skills from "@/components/shared/Skills"
import { welcomeMessage } from "@/constants"
import { myWelcomeMessage } from "@/types"
import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }}
      className="Home_Container">
      <ul className="flex flex-1 h-fit w-full">
          {welcomeMessage.map((link: myWelcomeMessage) => {
            return (
              <div className="flex flex-col md:flex-row w-fit gap-5 md:gap-0 md:p-5 animate-in slide-in-from-up-40 duration-500">
                  <li key={link.title} >
                    <h1 className="tittl_name">{link.title}</h1>
                    <h2 className="primary_text">{link.subTitle}</h2>
                    <div>
                        <img 
                          src="/assets/images/homepage.png" 
                          alt="homepage-image" 
                          width={400}
                          loading="lazy"
                          className="md:hidden object-contain bg-transparent h-fit mb-4 rounded-e-full justify-end rounded-t-full border-b-2 overflow-hidden animate-in slide-in-from-right-24 duration-1000 border-cyan-200"
                        /> 
                    </div> 
                    <h3 className="paragraph_text">I have aquired skills that will help your business scale up in this technology era.Using my expertise i will design stunning landing pages/website and even design your ad campaigns <br /> for your business using the latest technology <br /> Click the button below to talk to me (❁´◡`❁)</h3>
                    <Link className="custom_button p-3 rounded-lg text-white font-serif hidden md:flex" to={'/mycv'}>Continue reading</Link>
                    <Link to={'/mycv'} className="Linkme2">
                      LEARN MORE
                    </Link>
                      <Skills />
                  </li>
                    <img 
                      src="/assets/images/homepage.png" 
                      alt="homepage-image" 
                      // width={400}
                      loading="lazy"
                      className="hidden md:flex object-contain h-full md:w-[300px] lg:w-[400px] rounded-e-full justify-end rounded-t-full border-b-2 border-slate-300"
                    />   
              </div>
            )
          })}
        </ul>
    </motion.div>
  )
}

export default Welcome
