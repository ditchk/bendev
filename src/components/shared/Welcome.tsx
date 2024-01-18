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
                    <div className="flex flex-row justify-center items-center">
                    <img 
                      src="/assets/images/homepage.png" 
                      alt="homepage-image" 
                      width={350}
                      loading="lazy"
                      className="Homepage-Image"
                    /> 
                    </div>
                      <div className="Div-1">
                        <h2 className="paragraph_text">{link.subTitle}</h2>
                        <div className="line-style" />
                        <div className="Rounde-style" />
                      </div>
                      <div className="Div-1">
                          <h2 className="paragraph_text">{link.motive}</h2>
                          <div className="line-style" />
                          <div className="Rounde-style" />
                      </div>
                      <div className="Div-1">
                        <div className="Rounde-style" />
                        <div className="line-style" />
                        <h3 className="paragraph_text">I have aquired skills that will help your business scale up in this technology era.Using my expertise i will design stunning landing pages/website and even design your ad campaignsfor your business using the latest technology</h3>
                      </div>
                      <div className="Div-1">
                          <h2 className="paragraph_text">{link.slogan}<Link reloadDocument className="Link-ref" to={'/mycv'}>Continue reading</Link></h2>
                          <div className="line-style" />
                          <div className="Rounde-style" />
                      </div>
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
