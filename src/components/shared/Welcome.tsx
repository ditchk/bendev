import Skills from "@/components/shared/Skills"
import { welcomeMessage } from "@/constants"
import { myWelcomeMessage } from "@/types"
import { useState } from "react"
import { Link } from "react-router-dom"

const Welcome = () => {


  const isloading = useState(false);

  return (
    <div className="Home_Container">
      <ul className="flex flex-1 h-fit w-full">
          {welcomeMessage.map((link: myWelcomeMessage) => {
            return (
              <div className="flex flex-col md:flex-row w-fit gap-5 md:gap-0">
                  <li key={link.title} >
                    <h1 className="tittl_name">{link.title}</h1>
                    <h2 className="primary_text">{link.subTitle}</h2>
                    <div>
                      {isloading && (
                        <img 
                          src="/assets/images/homepage.jpg" 
                          alt="homepage-image" 
                          width={400}
                          loading="lazy"
                          className="md:hidden object-contain bg-transparent h-fit mb-4 rounded-e-full justify-end rounded-t-full border-b-2 border-slate-700"
                        />  
                      )}
                    </div> 
                    <h3 className="paragraph_text">I have aquired skills that will help your business scale up in this technology era.Using my expertise i will design stunning landing pages/website and even design your ad campaigns <br /> for your business using the latest technology <br /> Click the button below to talk to me (❁´◡`❁)</h3>
                    <Link className="custom_button p-3 rounded-lg text-white font-serif hidden md:flex" to={'/mycv'}>Continue reading</Link>
                    <Link to={'/mycv'} className="Linkme2">
                      LEARN MORE
                    </Link>
                      <Skills />
                  </li>
                    <img 
                      src="/assets/images/homepage.jpg" 
                      alt="homepage-image" 
                      // width={400}
                      loading="lazy"
                      className="hidden md:flex object-contain h-full md:w-[300px] lg:w-[400px] rounded-e-full justify-end rounded-t-full border-b-2 border-cyan-400"
                    />   
              </div>
            )
          })}
        </ul>
    </div>
  )
}

export default Welcome
