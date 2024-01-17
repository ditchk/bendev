import Skills from "@/components/shared/Skills"
import { welcomeMessage } from "@/constants"
import { myWelcomeMessage } from "@/types"
import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <div
      className="flex flex-1 m-2 p-1 bg-cyan-950 bg-opacity-10 rounded-md shadow-sm shadow-cyan-500">
        <ul className="flex h-fit w-fit">
            {welcomeMessage.map((link: myWelcomeMessage) => {
              return (
                <div className="flex flex-col md:flex-row w-fit gap-5 md:gap-0 md:p-5 overflow-hidden">
                    <li key={link.title}>
                      <h1 className="tittl_name text-shadow">{link.title}</h1>
                          <img 
                            src="/assets/images/homepage.png" 
                            alt="homepage-image" 
                            width={350}
                            loading="lazy"
                            className="md:hidden object-cover bg-transparent h-fit rounded-e-full justify-end rounded-t-full border-b-2 overflow-hidden animate-in slide-in-from-bottom-28 duration-1000 border-slate-50"
                          /> 
                        <div className="flex flex-row justify-center items-center mt-5 animate-in slide-in-from-bottom-20 duration-700 m-1">
                          <h2 className="paragraph_text font-family">{link.subTitle}</h2>
                          <div className="flex w-14 sm:w-72 justify-center bg-slate-300 h-[2px]" />
                          <div className="flex w-[25px] md:w-[35px] justify-center rounded-full bg-transparent outline outline-2 outline-slate-300 shadow-inner shadow-slate-500 h-[20px] md:h-[25px] animate-spin" />
                        </div>
                      <div className="flex flex-row justify-center items-center mt-5 animate-in slide-in-from-bottom-40 duration-700 m-1">
                        <div className="flex w-[25px] md:w-[35px] justify-center rounded-full bg-transparent outline outline-2 outline-slate-300 shadow-inner shadow-slate-500 h-[20px] md:h-[25px] animate-spin direction-alternate-reverse" />
                        <div className="flex w-14 sm:w-72  shadow-sm shadow-slate-400 justify-center bg-slate-300 h-[2px]" />
                        <h3 className="paragraph_text font-family">I have aquired skills that will help your business scale up in this technology era.Using my expertise i will design stunning landing pages/website and even design your ad campaignsfor your business using the latest technology</h3>
                      </div>
                      <div className="flex flex-row justify-center items-center mt-5 animate-in slide-in-from-bottom-20 duration-700 m-1">
                          <h2 className="paragraph_text font-family">{link.slogan}<Link reloadDocument className="custom_button p-2 mt-5 rounded-lg text-white font-serif flex" to={'/mycv'}>Continue reading</Link></h2>
                          <div className="flex w-14 sm:w-72 justify-center bg-slate-300 h-[2px]" />
                          <div className="flex w-[25px] md:w-[35px] justify-center rounded-full bg-transparent outline outline-2 outline-slate-300 shadow-inner shadow-slate-500 h-[20px] md:h-[25px] animate-spin direction-reverse" />
                        </div>
                        <Skills />
                    </li>
                      <img 
                        src="/assets/images/homepage.png" 
                        alt="homepage-image" 
                        // width={400}
                        loading="lazy"
                        className="hidden md:flex object-cover h-fit md:w-[500px] lg:w-[500px] rounded-e-full filter grayscale content-evenly justify-end rounded-t-full border-b-2 border-slate-300 animate-in slide-in-from-bottom-40 duration-700"
                      />   
                </div>
              )
            })}
          </ul>
    </div>
  )
}

export default Welcome
