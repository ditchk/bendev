import { useState } from "react"
import PackageSelect from "./PackageSelect"

const PackagesSect = () => {

  const [openContainer, SetOpenContainer] = useState(false)
  
  const handleClick2 = () => {
    SetOpenContainer(!openContainer)
  }

  return (
    <div className="packageSection" id="section">
        <div className="flex flex-col md:flex-row justify-center items-center w-full h-fit">
          <img src="/assets/images/pricing.jpg" alt="" width={700} className="md:hidden lg:flex" />
          <div className="ContainerPackage">
            <h2 className="PackText font-bold mb-4">Choose a Package</h2>
            <PackageSelect />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="flex flex-col md:flex-row justify-center w-full h-fit"> 
              <div className="flex flex-row justify-center items-center mb-2 w-full text-slate-400 outline-2 p-2 bg-gradient-to-l from-teal-800 via-black to-teal-800 cursor-pointer" onClick={handleClick2}>
                <h1 className="PackageTitleText w-full">Frequently asked questions(FAQs)</h1>
              </div>
          </div>
          <div className="flex flex-col justify-center items-center md:flex-row w-full h-full">
            {openContainer && (
              <div className="ContainerExplaPackage relative">
                <div className="flex flex-col justify-center items-center w-full bg-gradient-to-l from-teal-800 via-black to-teal-800 p-2 min-h-[250px] animate-in slide-in-from-bottom-10 duration-1000 ">
                  <ul className="list-decimal list-inside text-xs text-slate-200">
                    <li>Do you offer custom services?</li>
                    <li>I cant see the service i'm looking for on the packages provided. Do you offer more services?</li>
                    <li>How long do i have to wait for my project to be finished?</li>
                    <li>Are you an agency?</li>
                    <li>What happens when you get multiple contracts at the same time?</li>
                  </ul>
                  <h3 className="text-xs font-bold underline underline-offset-2 text-slate-200 mt-5">To provide you with a better response to this question. I would ask just 30minutes with you on a virtual meeting using any of this channels.
                    <li>Zoom</li>
                    <li>Slack</li>
                    <li>Skype</li>
                    <li>Microsoft Teams</li>
                  </h3>
                </div>
            </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default PackagesSect