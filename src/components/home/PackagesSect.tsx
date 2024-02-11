import { useState } from "react"
import { Button } from "../ui/button"
import PackageSelect from "./PackageSelect"
import { Contact } from "@/_root/pages"
import { MdClose } from "react-icons/md";


const PackagesSect = () => {

  const [OpenWindow, SetOpenWindow] = useState(false)

  const handleClick = () => {
    SetOpenWindow(!OpenWindow)
  }
  
  return (
    <div className="packageSection relative" id="section">
       <div className="ContainerPackage">
          <h1 className="PackageTitleText">Understand Our Pricing</h1>
          <p className="ParagraPhtitle">We offer a wide variety of services. This way we have clearly outline the packages that best suit your needs. 
            We understand we might not mention or cover what you maybe be looking for, 
            For this reason we ask you to send us a message on our contact page and we will reach out to you with a solution</p>

            <Button onClick={handleClick} className="bg-transparent text-gray-700 outline outine-2 outline-black mt-10">ReachOut Now!</Button>
            {OpenWindow && (
              <div className="flex flex-1 absolute left-0 right-0 justify-center items-center w-screen shadow-2xl shadow-black min-h-[100000px] bg-black bg-opacity-50 backdrop-blur-sm z-40">
                <div className="relative">
                  <MdClose  className="text-xl md:text-3xl text-white bg-gray-700 rounded-xl absolute justify-end right-0 top-0 mt-1 md:mt-2 cursor-pointer z-50 animate-in slide-in-from-top-10 duration-1000" onClick={handleClick} />
                  <Contact />
                </div>
              </div>
            )}
       </div>
        <div className="ContainerPackage">
            <h2 className="PackText font-bold mb-4">Choose a Package</h2>
            <PackageSelect />
        </div>
    </div>
  )
}

export default PackagesSect