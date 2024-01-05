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
      <ul className="flex h-fit w-fit">
          {welcomeMessage.map((link: myWelcomeMessage) => {
            return (
              <div className="flex flex-col md:flex-row w-fit gap-5 md:gap-0 md:p-5 animate-in slide-in-from-up-40 duration-500 overflow-hidden">
                  <li key={link.title} >
                    <h1 className="tittl_name">{link.title}</h1>
                    <div className="flex w-fit justify-center">
                        <img 
                          src="/assets/images/homepage.png" 
                          alt="homepage-image" 
                          width={250}
                          loading="lazy"
                          className="md:hidden object-contain bg-transparent h-fit rounded-e-full justify-end rounded-t-full border-b-2 overflow-hidden animate-in slide-in-from-right-24 duration-1000 border-slate-50"
                        />
                    </div> 
                      <div className="flex flex-row justify-center items-center mt-5">
                        <h2 className="paragraph_text">{link.subTitle}</h2>
                        <div className="flex w-14 sm:w-72  shadow-sm shadow-slate-400 justify-center bg-white h-[1px]" />
                        <div className="flex w-[25px]  shadow-sm shadow-slate-400 md:w-[35px] justify-center rounded-full bg-gradient-to-tl from-cyan-950 to-cyan-200 outline outline-1 outline-white h-[20px] md:h-[25px]" />
                      </div>
                    
                    
                    <div className="flex flex-row justify-center items-center mt-5">
                      <div className="flex w-[25px]  shadow-sm shadow-slate-400 md:w-[35px] justify-center rounded-full bg-gradient-to-tl from-cyan-950 to-cyan-200 outline outline-1 outline-white h-[20px] md:h-[25px]" />
                      <div className="flex w-14 sm:w-72  shadow-sm shadow-slate-400 justify-center bg-white h-[1px]" />
                      <h3 className="paragraph_text shadow-sm shadow-slate-400 ">I have aquired skills that will help your business scale up in this technology era.Using my expertise i will design stunning landing pages/website and even design your ad campaignsfor your business using the latest technology <br /> Click the button below to talk to me (❁´◡`❁)<Link className="custom_button p-2 mt-5 rounded-lg text-white font-serif flex" to={'/mycv'}>Continue reading</Link></h3>
                    </div>
                    
                   
                      <Skills />
                  </li>
                    <img 
                      src="/assets/images/homepage.png" 
                      alt="homepage-image" 
                      // width={400}
                      loading="lazy"
                      className="hidden md:flex object-contain h-full md:w-[600px] lg:w-[700px] rounded-e-full justify-end rounded-t-full border-b-2 border-slate-300"
                    />   
              </div>
            )
          })}
        </ul>
    </motion.div>
  )
}

export default Welcome
