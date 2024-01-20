import { welcomeMessage } from "@/constants"
import { myWelcomeMessage } from "@/types"
import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <div
      className="MainWel-Box">
        <ul className="main-list">
            {welcomeMessage.map((link: myWelcomeMessage) => {
              return (
                <div className="list-Cont">
                  <li key={link.title}>
                    <div className="flex flex-row justify-center items-center md:hidden">
                      <img 
                        src="/assets/images/homepage.png" 
                        alt="homepage-image" 
                        width={300}
                        loading="lazy"
                        className="Homepage-Image"
                      /> 
                    </div>
                    <div>
                        <h2 className="paragraph_text">{link.subTitle}</h2>
                        <h3 className="paragraph_text">I have aquired skills that will help your business scale up in this technology era.Using my expertise i will design stunning landing pages/website and even design your ad campaignsfor your business using the latest technology</h3>
                        <h2 className="paragraph_text">{link.motive}</h2>
                        <h2 className="paragraph_text">{link.slogan}<Link reloadDocument className="Link-ref" to={'/mycv'}>Continue reading</Link></h2>
                      </div>
                    </li>
                      <img 
                        src="/assets/images/homepage.png" 
                        alt="homepage-image" 
                        width={300}
                        loading="lazy"
                        className="hidden absolute object-cotain filter grayscale content-evenly justify-end rounded-t-full border-slate-300 animate-in slide-in-from-bottom-40 duration-700"
                      />   
                </div>
              )
            })}
          </ul>
    </div>
  )
}

export default Welcome
