import Skills from "@/components/shared/Skills"
import { Button } from "@/components/ui/button"
import { welcomeMessage } from "@/constants"
import { myWelcomeMessage } from "@/types"

const Home = () => {
  return (
    <div className="default_container">
      <div className="flex flex-col justify-center items-start gap-10 mt-5 bg-gradient-to-t from-cyan-100 via-white to-white rounded-xl">
        <ul className="shadow-slate-500 h-fit p-5 m-0 w-full shadow rounded-xl">
          {welcomeMessage.map((link: myWelcomeMessage) => {
            return (
              <div className="flex flex-grow">
                  <li key={link.title} >
                    <h1 className="tittl_name">{link.title}</h1>
                    <h2 className="primary_text">{link.subTitle}</h2>
                    <h3 className="paragraph_text">Welcome, my name is Benson Kigoci.I have aquired skills that will help your business scale up in this technology era.Using my expertise i will design stunning <br /> for your busines using the latest technology</h3>
                    <Button className="outline_btn mt-2 font-serif">
                      continue reading
                    </Button>
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
    </div>
    
  )
}

export default Home
